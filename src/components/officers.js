import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Officers = () => {

    return (
        <div  className="infobody"> 
        <Container>
            <h2> Current Officers</h2>
            {/* Update when officers change */}
            <Row>
                <Col><p className='officer-title'> President:</p> </Col>
                <Col> <p className='officer-name'> Havel Konda </p></Col>
            </Row> 
            <Row> 
                <Col><p className='officer-title'> Vice President: </p> </Col>
                <Col><p className='officer-name'> Chris Ho </p></Col> 
            </Row>
            <Row> 
                <Col><p className='officer-title'> Webmaster: </p> </Col>
                <Col><p className='officer-name'> Cameron Canfield </p></Col> 
            </Row> 
            {/* <Row>  */}
                {/* <Col><p className='officer-title'> Secretary: </p> </Col> */}
                {/* <Col><p className='officer-name'> Edward Swanson</p> </Col>  */}
            {/* </Row> */}
            <Row> 
                <Col><p className='officer-title'> Treasurer: </p> </Col>
                <Col><p className='officer-name'> Rahul Kannan</p> </Col> 
            </Row>         
            <Row> 
                <Col><p className='officer-title'> Sponsorship Coordinator: </p></Col>
                <Col><p className='officer-name'> Keona Abad </p></Col> 
            </Row>
            <Row> 
                <Col><p className='officer-title'> Event Coordinator: </p></Col>
                    <Col><p className='officer-name'> Eliane Wang </p></Col> 
            </Row>  
            <Row> 
                <Col><p className='officer-title'> Online Coordinator: </p></Col>
                <Col><p className='officer-name'>	Caleb Chia</p></Col> 
            </Row> 
            <Row> 
                <Col><p className='officer-title'> Club Advisor: </p></Col>
                <Col><p className='officer-name'> Hannah Scott </p></Col> 
            </Row>
            <Row> 
                <Col><p className='officer-title'> Public Relations: </p></Col>
                <Col><p className='officer-name'> Mack Lieu </p></Col> 
            </Row>
            <Row> 
                <Col><p className='officer-title'> Public Relations: </p></Col>
                <Col><p className='officer-name'> Danielle Chang </p></Col> 
            </Row>
            <Row> 
                <Col><p className='officer-title'> Director of Outreach: </p></Col>
                <Col><p className='officer-name'> Owen Krause </p></Col> 
            </Row>
        </Container>
        </div>
    );
}


export default Officers
