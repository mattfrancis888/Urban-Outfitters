import React, { Component } from 'react';
import item_1 from '../img/item_1.jpg';
import item_1_alt from '../img/item_1_alt.jpg';
import item_1_alt2 from '../img/item_1_alt2.jpg';
import item_1_alt3 from '../img/item_1_alt3.jpg';
import item_1_alt4 from '../img/item_1_alt4.jpg';
import item_1_alt5 from '../img/item_1_alt5.jpg';
import { UncontrolledCarousel } from 'reactstrap';


class Buy_Item extends React.Component {

  state = {
    radioStatus: null,
    currentImg: item_1
  }

  simulateClick(e) {
    e.click()
  }

  render(){
    const imgDic = {
      0: item_1,
      1: item_1_alt,
      2: item_1_alt2,
      3: item_1_alt3,
      4: item_1_alt4,
      5: item_1_alt5
    }

    const handleRadioClick = radioId => {
      this.setState({
        radioStatus: radioId,
        currentImg: imgDic[radioId]
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
            {/*Images that will appear on the side of the 'main image at LG screen' */}
            <div className="d-none d-lg-block col-lg-2 px-4">
            {/*manipulate px above to adjust to the images height and width in the image  carousel at large screeens, you can do the
              same for medium screens too!*/}
              <img className={`mw-100 my-2 ${this.state.radioStatus === 0 ? "active-side-image" : "inactive-side-image"}`}
                    onClick={() => handleRadioClick(0)} src={item_1}/>
              <img className={`mw-100 my-2 ${this.state.radioStatus === 1 ? "active-side-image" : "inactive-side-image"}`}
                    onClick={() => handleRadioClick(1)} src={item_1_alt}/>
              <img className={`mw-100 my-2 ${this.state.radioStatus === 2 ? "active-side-image" : "inactive-side-image"}`}
                    onClick={() => handleRadioClick(2)} src={item_1_alt2}/>
              <img className={`mw-100 my-2 ${this.state.radioStatus === 3 ? "active-side-image" : "inactive-side-image"}`}
                    onClick={() => handleRadioClick(3)} src={item_1_alt3}/>
              <img className={`mw-100 my-2 ${this.state.radioStatus === 4 ? "active-side-image" : "inactive-side-image"}`}
                    onClick={() => handleRadioClick(4)} src={item_1_alt4}/>
              <img className={`mw-100 my-2 ${this.state.radioStatus === 5 ? "active-side-image" : "inactive-side-image"}`}
                    onClick={() => handleRadioClick(5)} src={item_1_alt5}/>
            </div>

            <div className="position-relative col-12 col-lg-10">
              <img className="item-image mb-3 w-100" src= {this.state.currentImg} />
              {/*Radio buttons for pictures in xs screen */}
              <div className="d-block d-sm-none mt-3" id="carousel-form-for-xs-item-pic">
                <span className={`carousel-button mx-1 ${this.state.radioStatus === 0 ? "active-radio" : "inactive-radio"}`}
                  ref={this.simulateClick}
                  onClick={() => handleRadioClick(0)}
                />
                <span className={`carousel-button mx-1 ${this.state.radioStatus === 1 ? "active-radio" : "inactive-radio"}`}
                  onClick={() => handleRadioClick(1)}
                />
                <span className={`carousel-button mx-1 ${this.state.radioStatus === 2 ? "activeRadio" : "inactiveRadio"}`}
                  onClick={() => handleRadioClick(2)}
                />
                <span className={`carousel-button mx-1 ${this.state.radioStatus === 3 ? "activeRadio" : "inactiveRadio"}`}
                  onClick={() => handleRadioClick(3)}
                />
                <span className={`carousel-button mx-1 ${this.state.radioStatus === 4 ? "activeRadio" : "inactiveRadio"}`}
                  onClick={() => handleRadioClick(4)}
                />
                <span className={`carousel-button mx-1 ${this.state.radioStatus === 5 ? "activeRadio" : "inactiveRadio"}`}
                  onClick={() => handleRadioClick(5)}
                />
              </div>
            </div>

            {/*Images that will appear on the bottom of the 'main image at SM screen' */}
            <div className="d-none d-sm-block d-lg-none row mt-5 px-5">
              <img className={`col-3 my-1  ${this.state.radioStatus === 0 ? "active-side-image" : "inactive-side-image"} `}
                    onClick={() => handleRadioClick(0)}
                    src={item_1}/>
              <img className={`col-3 my-1  ${this.state.radioStatus === 1 ? "active-side-image" : "inactive-side-image"} `}
                    onClick={() => handleRadioClick(1)}
                    src={item_1_alt}/>
              <img className={`col-3 my-1  ${this.state.radioStatus === 2 ? "active-side-image" : "inactive-side-image"} `}
                    onClick={() => handleRadioClick(2)}
                    src={item_1_alt2}/>
              <img className={`col-3 my-1  ${this.state.radioStatus === 3 ? "active-side-image" : "inactive-side-image"} `}
                    onClick={() => handleRadioClick(3)}
                    src={item_1_alt3}/>
              <img className={`col-3 my-1  ${this.state.radioStatus === 4 ? "active-side-image" : "inactive-side-image"} `}
                    onClick={() => handleRadioClick(4)}
                    src={item_1_alt4}/>
              <img className={`col-3 my-1  ${this.state.radioStatus === 5 ? "active-side-image" : "inactive-side-image"} `}
                    onClick={() => handleRadioClick(5)}
                    src={item_1_alt5}/>
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
