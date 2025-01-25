import React from 'react'

function MovieCard({movie}) {

    function onFavouriteClick(){
        alert('Clicked')
    }
    
  return (
    <div className='Movie-Card'>
         <div className="Movie-Poster">
            <img src={movie.image} alt={movie.title}/>
            <div className="Move-Overlay">
                <button className="favourite-btn" onClick={onFavouriteClick}>
                    ♥
                </button>
            </div>
         </div>
         <div className="Movie-Info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
         </div>
    </div>
  )
}

export default MovieCard;
