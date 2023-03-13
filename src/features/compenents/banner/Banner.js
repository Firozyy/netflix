import React from 'react'
import './baner.css'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
function Banner() {
  const movie = useSelector(state => state.movies)
  
  return (
    <>
      {!movie.loaading && movie.movie.length > 0 ? (
        <div className='baner ps-5 ' >
          <h3 className='text-white '>{movie.movie[2].name}</h3>
          <button>play <PlayArrowIcon/></button><button className='ms-2'><AddIcon/>playlist</button>
            <p>{movie.movie[0].overview}</p>
            <div className="fadeBottom"></div>
        </div>

      ) : null}

    </>
  )
}

export default Banner