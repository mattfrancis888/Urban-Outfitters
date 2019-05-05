import React from 'react';
import {Link} from 'react-router-dom';
import uo_logo from '../img/uo_logo.gif';
import uo_logo_smaller_screen from '../img/uo_logo_smaller_screen.gif';

const Header = () => {
  return(
    <header>
      {/* Nav */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white p-4
      border-bottom fixed-top">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="nav_logo_container">
          <Link to="/">
            <picture>
              <source media="(min-width:768px)" srcset={uo_logo} />
              <source srcset={uo_logo_smaller_screen} />
              <img id="nav_logo" src={uo_logo} alt="Urban Outfitters Logo" />
            </picture>
          </Link>
        </div>

        {/* NOTE: Repeating SVG tags; bad practice?*/}
        <svg className="search_icon_img d-lg-none" aria-labelledby="search-title" viewBox="0 0 16 16">
          <title>Search</title>
          <path d="M4.08248,12.75007a6.93485,6.93485,0,0,1-2.12785-1.43759A6.65729,6.65729,0,0,1,.52014,9.20309,6.42066,6.42066,0,0,1,0,6.625,6.42494,6.42494,0,0,1,.52014,4.04681,6.68571,6.68571,0,0,1,4.08248.51563,6.57947,6.57947,0,0,1,6.68318,0,6.69587,6.69587,0,0,1,9.29931.51563a6.49882,6.49882,0,0,1,2.12785,1.4218,7.0382,7.0382,0,0,1,1.43449,2.10939A6.2715,6.2715,0,0,1,13.39771,6.625a6.26733,6.26733,0,0,1-.53607,2.57814,7.01967,7.01967,0,0,1-1.43449,2.10939,6.69362,6.69362,0,0,1-2.12785,1.43759,6.51767,6.51767,0,0,1-2.61613.53117A6.40481,6.40481,0,0,1,4.08248,12.75007ZM2.69527,2.67189A5.3642,5.3642,0,0,0,1.04028,6.625a5.364,5.364,0,0,0,1.655,3.95331A5.45975,5.45975,0,0,0,6.68318,12.2189a5.45863,5.45863,0,0,0,3.98741-1.64063,5.364,5.364,0,0,0,1.655-3.95331,5.3642,5.3642,0,0,0-1.655-3.95306A5.45863,5.45863,0,0,0,6.68318,1.03126,5.45975,5.45975,0,0,0,2.69527,2.67189ZM15.2732,15.95312A0.38035,0.38035,0,0,1,15.1,15.8125l-3.87741-4.37494a0.57509,0.57509,0,0,1-.12643-0.375,0.39187,0.39187,0,0,1,.18914-0.34367,0.49849,0.49849,0,0,1,.72521.03109l3.87741,4.37519a0.60748,0.60748,0,0,1,.1105.39054,0.56012,0.56012,0,0,1-.17371.35946,0.40354,0.40354,0,0,1-.15729.09375A0.61218,0.61218,0,0,1,15.47827,16,0.52423,0.52423,0,0,1,15.2732,15.95312Z"></path>
        </svg>
        <div className="d-flex align-items-center order-lg-1">
          <div className="border p-2 d-none d-lg-block">
            {/*Search box*/}
            <form className="form-inline">
              <svg className="search_icon_img" aria-labelledby="search-title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <title>Search</title>
                <path d="M4.08248,12.75007a6.93485,6.93485,0,0,1-2.12785-1.43759A6.65729,6.65729,0,0,1,.52014,9.20309,6.42066,6.42066,0,0,1,0,6.625,6.42494,6.42494,0,0,1,.52014,4.04681,6.68571,6.68571,0,0,1,4.08248.51563,6.57947,6.57947,0,0,1,6.68318,0,6.69587,6.69587,0,0,1,9.29931.51563a6.49882,6.49882,0,0,1,2.12785,1.4218,7.0382,7.0382,0,0,1,1.43449,2.10939A6.2715,6.2715,0,0,1,13.39771,6.625a6.26733,6.26733,0,0,1-.53607,2.57814,7.01967,7.01967,0,0,1-1.43449,2.10939,6.69362,6.69362,0,0,1-2.12785,1.43759,6.51767,6.51767,0,0,1-2.61613.53117A6.40481,6.40481,0,0,1,4.08248,12.75007ZM2.69527,2.67189A5.3642,5.3642,0,0,0,1.04028,6.625a5.364,5.364,0,0,0,1.655,3.95331A5.45975,5.45975,0,0,0,6.68318,12.2189a5.45863,5.45863,0,0,0,3.98741-1.64063,5.364,5.364,0,0,0,1.655-3.95331,5.3642,5.3642,0,0,0-1.655-3.95306A5.45863,5.45863,0,0,0,6.68318,1.03126,5.45975,5.45975,0,0,0,2.69527,2.67189ZM15.2732,15.95312A0.38035,0.38035,0,0,1,15.1,15.8125l-3.87741-4.37494a0.57509,0.57509,0,0,1-.12643-0.375,0.39187,0.39187,0,0,1,.18914-0.34367,0.49849,0.49849,0,0,1,.72521.03109l3.87741,4.37519a0.60748,0.60748,0,0,1,.1105.39054,0.56012,0.56012,0,0,1-.17371.35946,0.40354,0.40354,0,0,1-.15729.09375A0.61218,0.61218,0,0,1,15.47827,16,0.52423,0.52423,0,0,1,15.2732,15.95312Z"></path>
              </svg>
              <input className="form-control mr-sm-2 border-0" type="search" placeholder="Search" aria-label="Search"/>
            </form>
          </div>
          {/*End of search box*/}
          <a className="nav-link d-none d-lg-block" id="nav_sign_in_font" href="#">Sign in</a>
          <svg className="bag_icon_img" xmlns="http://www.w3.org/2000/svg" id="Design" viewBox="0 0 16.5 18">
            <title>Bag</title>
            <path id="Bag" className="c-cart__img-path" d="M1 15.34V7.49H15.5v7.85L13.86 17H2.64ZM6.22 2.08 7.3 1H9.14l1.09 1.09V6.5h-4ZM6.89 0 5.22 1.67V6.5H0v9.26L2.23 18h12l2.23-2.24V6.5H11.23V1.68L9.56 0Z"></path>
          </svg>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent"> {/*Start of collapsable section in nav*/}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/items-available" className="nav-link" href="#">Women's <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to="/items-available" className="nav-link">Men's<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to="/items-available" className="nav-link">Home<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to="/items-available" className="nav-link">Lifestyle<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to="/items-available" className="nav-link">Beauty<span className="sr-only">(current)</span></Link>
            </li>
          </ul>
        </div> {/*End of collapsable section in nav */}
      </nav> {/*End of Nav*/}
      {/*End of header*/}
    </header>
  );
}

export default Header;
