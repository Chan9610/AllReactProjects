import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Moviapi() {
    const[input,setInput]=useState('')
    const[movies,setMovies]=useState([]);
    const Api_Key ="4d88ab36e5d48f360a0370b7ba7c5e1f";
    const img_base_path = "https://image.tmdb.org/t/p/original";

    function handel() {
        axios.get("https://api.themoviedb.org/3/search/movie?query="+input+"&include_adult=false&language=en-US&page=1&api_key="+Api_Key).then((response)=>{
            console.log(response.data.results[0].poster_path);
            setInput(response.data.results[0].poster_path);
        });
    }
    handel()
  return (
    <>
    <input type="text" />
    <button>Find Movies</button>
    <img src={input} alt="" /> 
    
    </>
  )
}

export default Moviapi