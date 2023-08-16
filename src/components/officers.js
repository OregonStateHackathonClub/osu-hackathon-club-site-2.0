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
                <Col> <p className='officer-name'> Scott Lindsay </p></Col>
            </Row> 
            <Row> 
                <Col><p className='officer-title'> Vice President: </p> </Col>
                <Col><p className='officer-name'> Christina Persaud </p></Col> 
            </Row>
            <Row> 
                <Col><p className='officer-title'> Hackathon Coordinator: </p></Col>
                <Col><p className='officer-name'> Open position, reach out to oregonstatehackathonclub@gmail.com if interested </p></Col> 
            </Row>  
            <Row> 
                <Col><p className='officer-title'> Webmaster: </p> </Col>
                <Col><p className='officer-name'> Chris Ho </p></Col> 
            </Row> 
            <Row> 
                <Col><p className='officer-title'> Secretary: </p> </Col>
                <Col><p className='officer-name'> Rich Quach</p> </Col> 
            </Row>
            <Row> 
                <Col><p className='officer-title'> Treasurer: </p> </Col>
                <Col><p className='officer-name'> Rahul Kannan</p> </Col> 
            </Row>         
            <Row> 
                <Col><p className='officer-title'> Event Coordinator: </p></Col>
                <Col><p className='officer-name'> Zac Maes </p></Col> 
            </Row>
            <Row> 
                <Col><p className='officer-title'> Social Media Manager: </p></Col>
                <Col><p className='officer-name'>Brenden Covington</p></Col> 
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
