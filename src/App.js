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
import Total_Transaction from './components/Total_Transaction.js';

library.add(faStar, faTimes);

class App extends Component {

  state = {
      showSignInBox: false,
  }

  showSignInCallback=(showSignInBoolean) => {
    this.setState({
      showSignInBox: showSignInBoolean,
    });
  }

  closeSignInCallback = (closeSignInBoolean) => {
    this.setState({
      showSignInBox: closeSignInBoolean
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header showSignInCallback={this.showSignInCallback}/>

          <Route exact path="/" render = {() => <Featured/> } />
          {/*Passing component Item_Info, as a children is created for practice */}
          {/*TODO: Change prop names to camelCase */}
          <Route path="/items-available" render = {() => <Items_Available item_info={<Item_Info/>}/> } />
          <Sign_In_Box closeSignInCallback={this.closeSignInCallback}
            showSignInBox={this.state.showSignInBox}/>

          <Route path="/buy-item" render = {() => <Buy_Item buy_item_info={<Buy_Item_Info/>}
            item_info={<Item_Info/>}/> } />

          <Route path="/total-transaction" render = {() => <Total_Transaction/>}/>

          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
