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
                <Col><p className='officer-name'> Christina Persaud </p></Col> 
            </Row>
            <Row> 
                <Col><p className='officer-title'> Hackathon Coordinator: </p></Col>
                    <Col><p className='officer-name'> Oluwatomi Hassan </p></Col> 
            </Row>  
            <Row> 
                <Col><p className='officer-title'> Webmaster: </p> </Col>
                <Col><p className='officer-name'> Cameron Canfield </p></Col> 
            </Row> 
            <Row> 
                <Col><p className='officer-title'> Secretary: </p> </Col>
                <Col><p className='officer-name'> Edward Swanson</p> </Col> 
            </Row>
            <Row> 
                <Col><p className='officer-title'> Treasurer: </p> </Col>
                <Col><p className='officer-name'> Rahul Kannan</p> </Col> 
            </Row>         
            <Row> 
                <Col><p className='officer-title'> Event Coordinator: </p></Col>
                <Col><p className='officer-name'> Keona Abad </p></Col> 
            </Row>
            <Row> 
                <Col><p className='officer-title'> Social Media Manager: </p></Col>
                <Col><p className='officer-name'>Brenden Covington</p></Col> 
            </Row> 
            <Row> 
                <Col><p className='officer-title'> Club Advisor: </p></Col>
                <Col><p className='officer-name'> Hannah Scott </p></Col> 
            </Row>
            <Row> 
                <Col><p className='officer-title'> Professional Outreach: </p></Col>
                <Col><p className='officer-name'> Abhishek Enaguthi </p></Col> 
            </Row>
            <Row> 
                <Col><p className='officer-title'> Sponsorship Coordinator: </p></Col>
                <Col><p className='officer-name'> Guy Cohen </p></Col> 
            </Row>
            <Row> 
                <Col><p className='officer-title'> Recruitment: </p></Col>
                <Col><p className='officer-name'> Owen Krause </p></Col> 
            </Row>
        </Container>
        </div>
    );
}


export default Officers
