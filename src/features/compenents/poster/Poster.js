import React from 'react'
import "./poster.css"
import { useSelector } from 'react-redux'
import { Image, Row, Col } from 'react-bootstrap'
import resources from '../../../resources'

function Poster() {
  const { imageURl_base } = resources
  const Movie = useSelector(state => state.movies);


  return (
    <>
      {!Movie.loading && Movie.movie.length > 0 ? (
        <Row >
          <h5 className='text-white'>Netflix originals</h5>
          <Col className='poster'>
            {Movie.movie.map(obj => (
              <Image className='posters'src={`${imageURl_base + obj.backdrop_path}`} />
            ))}



          </Col>
        </Row>
      ) : null

      }

    </>

  )
}

export default Poster