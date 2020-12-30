import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import DisclaimerModal from './components/DisclaimerModal';
import Kontakt from './components/Kontakt';
import Referenzen from './components/Referenzen';
import Leistungen from './components/Leistungen';
import Unternehmen from './components/Unternehmen';
import HSKonfigurator from './components/HSKonfigurator';
import Datenschutz from './components/Datenschutz';
import Impressum from './components/Impressum';
import Starseite from './components/Starseite';

function App () {
    return(
        <Router>
            <div className='App'>
                <Header className='App-header'/>
                <DisclaimerModal/>
                <br/>
                <Switch>
                    <Route path='/' exact component={Starseite}/>
                    <Route path='/kontakt' exact component={Kontakt}/>
                    <Route path='/unternehmen' exact component={Unternehmen}/>
                    <Route path='/leistungen' exact component={Leistungen}/>
                    <Route path='/referenzen' exact component={Referenzen}/>
                    <Route path='/datenschutz' exact component={Datenschutz}/>
                    <Route path='/impressum' exact component={Impressum}/>
                    <Route path='/hs-konfigurator' exact component={HSKonfigurator}/>
                </Switch>
                <Footer/>
            </ div>
        </Router>
    );
}

export default App;