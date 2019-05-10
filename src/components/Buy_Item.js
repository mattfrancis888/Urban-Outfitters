import React, { Component } from 'react';
import item_1 from '../img/item_1.jpg';
import item_1_alt from '../img/item_1_alt.jpg';
import item_1_alt2 from '../img/item_1_alt2.jpg';
import item_1_alt3 from '../img/item_1_alt3.jpg';
import item_1_alt4 from '../img/item_1_alt4.jpg';
import item_1_alt5 from '../img/item_1_alt5.jpg';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Buy_Item extends React.Component {

  state = {
    divColors: ['default','default','default','default','default','default'],
  }

  render(){

    const handleDivClick = index => {
      const divColors = ['default','default','default','default','default','default'];
      divColors[index] = 'red';
      this.setState({
        divColors: divColors
      });
    }

  return(
    <div className="container-fluid">

      <div className="row">
        <div className="col-12 mb-3">
          <h3 className="buy-item-title-and-price mt-3">Champion Chenille Embroidered Logo Hoodie Sweatshirt</h3>
          <span className="buy-item-title-and-price"> $82.00 CAD </span>
        </div>

        {/*beginning of container that's on the left in SM+ screen */}
        <div className="col col-sm-6 col-lg-5 mr-lg-5">
          <div className="row">
            <div className="d-none d-lg-block col-lg-2 px-4">
            {/*manipulate px above to adjust to the images height and width in the image  carousel at large screeens, you can do the
              same for medium screens too!*/}
              <img className="mw-100 my-2" src={item_1}/>
              <img className="mw-100 my-2" src={item_1_alt}/>
              <img className="mw-100 my-2" src={item_1_alt2}/>
              <img className="mw-100 my-2" src={item_1_alt3}/>
              <img className="mw-100 my-2" src={item_1_alt4}/>
              <img className="mw-100 my-2" src={item_1_alt5}/>
            </div>

            <div className="position-relative col-12 col-lg-10">
              <img className="item-image mb-3 w-100" src={item_1}/>

              <div className="d-block d-sm-none mt-3" id="carousel-form-for-xs-item-pic">
                <span className="carousel-button mx-1"
                  style={{backgroundColor: this.state.divColors[0]}}
                  onClick={() => handleDivClick(0)}
                />
                <span className="carousel-button mx-1"
                  style={{backgroundColor: this.state.divColors[1]}}
                  onClick={() => handleDivClick(1)}
                />
                <span className="carousel-button mx-1"
                  style={{backgroundColor: this.state.divColors[2]}}
                  onClick={() => handleDivClick(2)}
                />
                <span className="carousel-button mx-1"
                  style={{backgroundColor: this.state.divColors[3]}}
                  onClick={() => handleDivClick(3)}
                />
                <span className="carousel-button mx-1"
                  style={{backgroundColor: this.state.divColors[4]}}
                  onClick={() => handleDivClick(4)}
                />
                <span className="carousel-button mx-1"
                  style={{backgroundColor: this.state.divColors[5]}}
                  onClick={() => handleDivClick(5)}
                />
              </div>
            </div>

            <div className="d-none d-sm-block d-lg-none row mt-5 px-5">
              <img className="col-3" src={item_1_alt2}/>
              <img className="col-3" src={item_1_alt3}/>
              <img className="col-3" src={item_1_alt4}/>
              <img className="col-3" src={item_1_alt5}/>
            </div>
          </div>        {/*end of container that's on the left in sm+ screen */}

  {/*Info on the bottom  of the pic in very small screen mode will dissapear on SM breakpoint */}
          <div className="d-sm-none">
            {this.props.buy_item_info}
          </div>
        </div>

  {/*Info on the right of the pic that will appear on SM+ breakpoint */}
        <div className="d-none d-sm-block col-sm-6 col-lg-6">
          {this.props.buy_item_info}
        </div>

        </div>
      </div>
    );
  }
}

export default Buy_Item;
