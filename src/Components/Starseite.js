import React from 'react';
import {Container, Col, Row } from 'reactstrap';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

function Starseite () {
    return(
        <Container fluid="true"> 
            <Row>
                <Col sm="9" className="rightPanel">
                    <RightPanel />
                </Col>
                <Col sm="2" className="leftPanel">
                    <LeftPanel />
                </Col>
            </Row>
        </Container>
    );
}

export default Starseite;