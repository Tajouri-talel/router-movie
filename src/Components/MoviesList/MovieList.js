import React from 'react';
import Card from '../Cards/Card';
import {Link} from 'react-router-dom';
import '../../App.css';


const MovieList = ({movies}) => {
	return (
		<>
			{movies.map((movie, index) => (
				<Link  to={'/movie/'+ movie.id}>
					<Card movie={movie} key={index}/>
				</Link>
			))}
		</>
	);
};

export default MovieList;