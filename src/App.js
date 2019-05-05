import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';
import Testme from './components/Testme.js';
import Featured from './components/Featured.js';
import Items_Available from './components/Items_Available.js';


    class App extends Component {
      render() {
        return (
          <BrowserRouter>
            <div className="App">
              <Header/>
              <Route exact path="/" render = {() => <Featured/> } />
              <Route path="/items-available" render = {() => <Items_Available/> } />
              <Footer/>
            </div>
          </BrowserRouter>
        );
      }
    }

export default App;
