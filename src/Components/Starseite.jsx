import React from 'react';
import {Container, Col, Row } from 'reactstrap';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

import './Starseite.css';

function Starseite () {
    return(
        <Container fluid="true"> 
            <Row>
                <Col sm="9" className="leftPanel">
                    <LeftPanel />
                </Col>
                <Col sm="2" className="rightPanel">
                    <RightPanel />
                </Col>
            </Row>
        </Container>
    );
}

export default Starseite;