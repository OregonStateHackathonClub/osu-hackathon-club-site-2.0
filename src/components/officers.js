import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Officers = () => {

    return (
        <div  className="infobody"> 
        <Container>
            <h2> current officers</h2>

            {/* Update when officers change */}

            <Row>
                <Col><p className='officer-title'> President:</p> </Col>
                <Col> <p className='officer-name'> Noah Sapse </p></Col>
                
            </Row> 

            <Row> 
                <Col><p className='officer-title'> Vice President: </p> </Col>
                <Col><p className='officer-name'> Kharissa Fernando Smith </p></Col> 
            </Row>

            <Row> 
                <Col><p className='officer-title'> Secretary: </p> </Col>
                <Col><p className='officer-name'> Konstantinos Drosos </p> </Col> 
            </Row>

            <Row> 
                <Col><p className='officer-title'> Treasurer: </p> </Col>
                <Col><p className='officer-name'> Lawrence Kwok </p> </Col> 
            </Row>
            
            <Row> 
                <Col><p className='officer-title'> Communication: </p></Col>
                <Col><p className='officer-name'> Alec Bovee </p></Col> 
            </Row>  

            <Row> 
                <Col><p className='officer-title'> Webmaster: </p> </Col>
                <Col><p className='officer-name'> Rachel Peterson </p></Col> 
            </Row>  



            <Row> 
                <Col><p className='officer-title'> Club Advisor: </p></Col>
                <Col><p className='officer-name'> Hannah Scott </p></Col> 
            </Row>  
               
        </Container>
        </div>
    );
}


export default Officers