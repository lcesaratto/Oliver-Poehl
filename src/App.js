import React, { useState} from 'react';
import './App.css';
import Header from './Components/Header';
import {Container, Col, Row } from 'reactstrap';
import LeftPanel from './Components/LeftPanel';
import RightPanel from './Components/RightPanel';
import Footer from './Components/Footer';
import DisclaimerModal from './Components/DisclaimerModal'

const App = () => {
    return(
        <>
            <Header className='App-header'/>
            <Container fluid="true">
                <DisclaimerModal/>
                <br/>
                <Row>
                    <Col sm="9" className="rightPanel">
                        <RightPanel />
                    </Col>
                    <Col sm="2" className="leftPanel">
                        <LeftPanel />
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}

export default App;