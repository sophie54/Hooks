import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MovieCard from './MovieCard'


const MovieList = (props) => {
    return (
        <Container>
     <Row >
          {console.log(props.list.length)}  {
            
            props.list.map(
                (elem) => 
                 <Col xs={6} md={4}>
               <MovieCard movie={elem} />
              </Col>
            )}
         
        </Row>
        </Container>
      
    )
}

export default MovieList
