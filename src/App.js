import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTimes } from '@fortawesome/free-solid-svg-icons';

import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';
import Testme from './components/Testme.js';
import Featured from './components/Featured.js';
import Item_Info from './components/Item_Info.js';
import Items_Available from './components/Items_Available.js';
import Buy_Item from './components/Buy_Item.js';
import Buy_Item_Info from './components/Buy_Item_Info.js';
import Sign_In_Box from './components/Sign_In_Box.js';

library.add(faStar, faTimes);

class App extends Component {
  state = {
      hideHeaderAndFooter: false
  }
  myCallback = (booleanFromChild) => {
    {/*If sign in button is clicked, <Header> and <Footer> should dissapear */}
    this.setState({
      hideHeaderAndFooter: booleanFromChild
    });
    console.log(booleanFromChild);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header callbackFromParent={this.myCallback}/>

          <Route exact path="/" render = {() => <Featured/> } />
          {/*Passing component Item_Info, as a children is created for practice */}
          <Route path="/items-available" render = {() => <Items_Available item_info={<Item_Info/>}/> } />
          <Route path="/test" render = {() => <Sign_In_Box/> } />
          <Route path="/buy-item" render = {() => <Buy_Item buy_item_info={<Buy_Item_Info/>}
            item_info={<Item_Info/>}/> } />
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
