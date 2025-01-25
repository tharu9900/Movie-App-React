import React from 'react'
import MovieCard from '../components/MovieCard'
import { useState } from 'react';

function Home() {

    const [searchQuery,setsearchQuery]=useState("");

    const movies = [
        {id:1,title:"Dark",release_data:"2025"},
        {id:2,title:"Terminator",release_data:"2023"},
        {id:3,title:"Matrix",release_data:"2024"}
    ]

    const handleSubmit = (e)=>{ 
        e.preventDefault(); //prevent keep the default mode
        alert("Hello")
        setsearchQuery("")

    }
  return (
    <div className="Home">
        <form onSubmit={handleSubmit} className="Search-Form">
            <input 
                type="text" 
                placeholder='Input Your Search Here....' 
                className="Search-Input" 
                value={searchQuery}
                onChange={(e)=>setsearchQuery(e.target.value)}
            />
            <button type="submit" className="Search-Button">Search</button>
        </form>
        <div className="Movie-Grid">
            {movies.map((movie)=>(
                movie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard movie={movie} key={movie.id}/>)
            ))}
        </div>
    </div>
  )
}

export default Home