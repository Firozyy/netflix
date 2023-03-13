import React from 'react'
import "./poster.css"
import { useSelector } from 'react-redux'
import { Image, Row, Col } from 'react-bootstrap'
import resources from '../../../resources'

function Action() {
  const { imageURl_base } = resources
  const Action =useSelector(state => state.action)


  return (
    <>
      {!Action.loading && Action.actions.length > 0 ? (
        <Row >
          <h5 className='text-white'>Action</h5>
          <Col className='poster'>
            {Action.actions.map(obj => (
              <Image className='smallposters'src={`${imageURl_base + obj.backdrop_path}`} />
            ))}



          </Col>
        </Row>
      ) : null

      }

    </>

  )
}

export default Action