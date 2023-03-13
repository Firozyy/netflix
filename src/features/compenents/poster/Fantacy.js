import React from 'react'

import "./poster.css"
import { useSelector } from 'react-redux'
import { Image, Row, Col } from 'react-bootstrap'
import resources from '../../../resources'
function Fantacy() {
    const { imageURl_base } = resources
    const Fantacy = useSelector(state => state.fantacy);


    return (
        <>
            {!Fantacy.loading && Fantacy.fantacy.length > 0 ? (
                <Row >
                    <h5 className='text-white'>Fantacy</h5>
                    <Col className='poster'>
                        {Fantacy.fantacy.map(obj => (
                            <Image className='smallposters' src={`${imageURl_base + obj.backdrop_path}`} />
                        ))}



                    </Col>
                </Row>
            ) : null

            }

        </>

    )
}
export default Fantacy