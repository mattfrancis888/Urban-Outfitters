import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import holiday_banner from '../img/holiday_banner.jpg';
import holiday_banner_smaller_screen from '../img/holiday_banner_smaller_screen.jpg';
import first_look from '../img/first_look.gif';
import first_look_smaller_screen from '../img/first_look_smaller_screen.jpg';
import giftable_graphics from '../img/giftable_graphics.jpg';
import giftable_graphics_smaller_screen from '../img/giftable_graphics_smaller_screen.jpg';
import new_bedding from '../img/new_bedding.jpg';
import new_bedding_smaller_screen from '../img/new_bedding_smaller_screen.jpg';
import photography_shop from '../img/photography_shop.jpg';
import photography_shop_smaller_screen from '../img/photography_shop_smaller_screen.jpg';
import new_arrivals from '../img/new_arrivals.jpg';
import new_arrivals_smaller_screen from '../img/new_arrivals_smaller_screen.jpg';
import back_in_stock from '../img/back_in_stock.jpg';
import back_in_stock_smaller_screen from '../img/back_in_stock_smaller_screen.jpg';
import most_liked from '../img/most_liked.jpg';
import most_liked_smaller_screen from '../img/most_liked_smaller_screen.jpg';

class Featured extends React.Component {
  componentDidMount() {
      window.scrollTo(0, 0);
  }
  render(){
    return(
      <div className="container-fluid">
        <div className="row mb-5">
          <div className="col">
            <Link to="/items-available">
              <picture>
                <source media="(min-width:768px)" srcset={holiday_banner} />
                <source srcset={holiday_banner_smaller_screen} />
                <img className="content_image" src={holiday_banner} alt="Holiday banner"/>
              </picture>
            </Link>
          </div>
        </div>
        <div className="row">
          {/*pr-md-x only affects md breakpoint and up;otherwise it'll use the default pr val */}
          <div className="col-md-6 mb-4 pr-md-3">
            <Link to="/items-available">
              <button type="button" className="btn btn-light image_button">SHOP</button>
              <picture>
                <source media="(min-width:768px)" srcset={first_look} />
                <source srcset={first_look_smaller_screen} />
                <img className="content_image h-xl-100-custom" src={first_look} alt="First look - soft,simple new styles are here."/>
                {/* h-xl-100-custom is created because the first_look picture is not big enough to fill the whole container*/}
              </picture>
            </Link>
          </div>
          <div className="col-md-6 mb-4 pl-md-3">
            <Link to="/items-available">
              <button type="button" className="btn btn-light image_button">SHOP GRAPHICS</button>
              <picture>
                <source media="(min-width:768px)" srcset={giftable_graphics} />
                <source srcset={giftable_graphics_smaller_screen} />
                <img className="content_image" src={giftable_graphics} alt="Giftable graphics"/>
              </picture>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4 pr-md-3">
            <Link to="/items-available">
              <button type="button" className="btn btn-light image_button">SHOP BEDDING</button>
              <picture>
                <source media="(min-width:768px)" srcset={new_bedding} />
                <source srcset={new_bedding_smaller_screen} />
                <img className="content_image" src={new_bedding} alt="Bedding shop"/>
              </picture>
            </Link>
          </div>
          <div className="col-md-6 mb-4 pl-md-3">
            <Link to="/items-available">
              <button type="button" className="btn btn-light image_button">SHOP CAMERAS + FILM</button>
              <picture>
                <source media="(min-width:768px)" srcset={photography_shop} />
                <source srcset={photography_shop_smaller_screen} />
                <img className="content_image" src={photography_shop} alt="Photography shop"/>
              </picture>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4 pr-md-3">
            <Link to="/items-available">
              <button type="button" className="btn btn-light image_button">SHOP</button>
              <picture>
                <source media="(min-width:768px)" srcset={new_arrivals} />
                <source srcset={new_arrivals_smaller_screen} />
                <img className="content_image" src={new_arrivals} alt="New arrivals"/>
                </picture>
            </Link>
          </div>
          <div className="col-md-4 mb-4 px-md-3">
            <Link to="/items-available">
              <button type="button" className="btn btn-light image_button">SHOP</button>
              <picture>
                <source media="(min-width:768px)" srcset={back_in_stock} />
                <source srcset={back_in_stock_smaller_screen} />
                <img className="content_image" src={back_in_stock} alt="Back in stock"/>
                <Link to="/items-available "></Link>
              </picture>
            </Link>
          </div>
          <div className="col-md-4 mb-4 pl-md-3">
            <Link to="/items-available">
              <button type="button" className="btn btn-light image_button">SHOP</button>
              <picture>
                <source media="(min-width:768px)" srcset={most_liked} />
                <source srcset={most_liked_smaller_screen} />
                <img className="content_image" src={most_liked} alt="Most liked"/>
                <Link to="/items-available "></Link>
              </picture>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Featured;
