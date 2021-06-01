import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import './SingleMovie.css'

const SingleMovie = ({movies}) => {

    const { id } = useParams();
    const [movie, setMovies] = useState("");
    useEffect(() => {
      setMovies (movies.find((el) => el.id == id ))
    }, []);
  
  return(

  <div className="container">
          <div className="HomeLink">
              <Link to="/" className="btn-default">
                Go Back To Home
              </Link>
          </div>
          <div className="Description">
            <div className="img">
           <img src={movie.poster} alt={movie.title} /> 
           </div>
           <div>
            <h2> Title :{movie.title}</h2>
            </div>
            <div>
            <h2> Year : {movie.year}</h2>
            </div>
            <div>
            <h2> Description : {movie.description}</h2>
            </div>
            <div>
            <h2> Rate : {movie.rating}</h2>
            </div>
          </div>
          <div className="trailer">
          <div>
            <h1>See Trailer</h1>
            </div>
            <br/>
            <div>
            <ReactPlayer url={movie.trailerurl} title="YouTube video player"/>
            </div>
          </div> 
  </div>
  )
  }

export default SingleMovie
