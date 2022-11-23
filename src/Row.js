import React from 'react';
import { useState, useEffect} from 'react';
import axios from './axios';
import "./Row.css";






function Row({ title, fetchUrl, isLargeRow }) {
   const[movies,setMovies]= useState([]);
   
   useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();

    }, [fetchUrl]);
 
    
      
   
    return (
    <div className='row'>
      <h2>{title}</h2>

      <div className="row__posters">
       
        
         {movies && movies.map(movie => (
           <img 
           className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
           src={`https://image.tmdb.org/t/p/original${isLargeRow ?movie.poster_path:movie.backdrop_path}`} alt={movie.name} 
           key={movie.id}/>
            
         ))}


      </div>
     
    </div>
    
  )
}

export default Row;
