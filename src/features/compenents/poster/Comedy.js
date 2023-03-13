import React from 'react'
import "./poster.css"
import { useSelector } from 'react-redux'
import { Image, Row, Col } from 'react-bootstrap'
import resources from '../../../resources'

function Comedy() {
    const { imageURl_base } = resources
    const Comedy = useSelector(state => state.comedy);


    return (
        <>
            {!Comedy.loading && Comedy.comdeys.length > 0 ? (
                <Row >
                    <h5 className='text-white'>Comedy</h5>
                    <Col className='poster'>
                        {Comedy.comdeys.map(obj => (
                            <Image className='smallposters' src={`${imageURl_base + obj.backdrop_path}`} />
                        ))}



                    </Col>
                </Row>
            ) : null

            }

        </>

    )
}

export default Comedy