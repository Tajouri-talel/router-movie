import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieList from './Components/MoviesList/MovieList';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import SearchByRate from './Components/Search/SearchByRate';
import Add from './Components/Cards/MovieAdd'
import items from './serves/items.json'
import SingleMovie from './Components/Cards/SingleMovie';


const App = () => {
	
	const [searchValue,setSearchValue]=useState('');
	const [searchRate,setSearchRate]=useState('');
    const[movie,setMovie]=useState(items);


   const search =(title)=>{
	setSearchValue(title) ;  
   }
   
   const searchRatemovies =(rating)=>{
	setSearchRate(rating) ;  
   }
  
const addMovies=(x)=>{
	setMovie([...movie,x])
}

	return (

		<Router>
		<Switch>
		
<Route
	exact path="/">
	<>
		
<div className='container-fluid movie-app'>
<Header text="M O V I E S" />
<Search search={search} />
<SearchByRate searchRatemovies={searchRatemovies} />
<h1 class="ribbon">
   <strong class="ribbon-content">THIS IS MY MOVIE LIST</strong>
</h1>
			<div className='row'>
				<MovieList movies={movie.filter(movie=>movie.title.toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase())&&(movie.rating>=searchRate))} />
		
					
			</div>
			
<Add submitMovies={addMovies}/>
</div>
</>
</Route>
		<Route path="/movie/:id" render={(props) => <SingleMovie movies={movie} {...props}/>}
				/>
		</Switch>
	</Router>

	);
};

export default App;