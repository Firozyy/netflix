import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMOvie, } from '../slice/movieSlice';
import { fetchAction } from '../slice/actionSlice';
import { fetchComedy } from '../slice/comedySlice';
import { fetchFantavcy } from '../slice/fantacySlice';
import { Container, Row,Col } from 'react-bootstrap';
import Nav from './navbar/Nav';
import Banner from './banner/Banner';
import resources from '../../resources';
import Poster from './poster/Poster';
import Action from './poster/Action';
import Comedy from './poster/Comedy';
import Fantacy from './poster/Fantacy';


function Home() {


    const Movie = useSelector(state => state.movies);

  
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMOvie());
        dispatch(fetchAction());
        dispatch(fetchComedy());
        dispatch(fetchFantavcy());
    }, [])


    return (
        <>

            {Movie.loaading && <div>Loading....</div>}
            {!Movie.loaading && Movie.movie.length > 0 ? (
                <Container fluid style={{backgroundColor:"#111"}}>
                    <Row className='baner' style={{ backgroundSize: "cover", backgroundImage: `url("${resources.imageURl_base}${Movie.movie[2].backdrop_path}")` }}   >
                        <Nav />
                        <Banner />
                    </Row>
                    <Row className='ps-3 pe-3'>
                        <Col className='mt-2'>
                        <Poster />
                        </Col>
                        <Col className='mt-2'>
                        <Action/>
                        </Col>
                        <Col className='mt-2'>
                      <Comedy/>
                        </Col>
                        <Col>
                        <Fantacy/>
                        </Col>
                        
                    </Row>
                </Container>
            ) : null}



        </>

    )
}

export default Home