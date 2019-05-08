import React from 'react';
import item_1 from '../img/item_1.jpg';
import item_1_alt from '../img/item_1_alt.jpg';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
const Buy_Item = (props) => {
  return(
    <div className="container-fluid">
      <div className="row">
        <div className="col col-md-6">

          <div className="position-relative item-available-image-container">
            <img className="item-image mb-3" src={item_1}/>
          </div>
          <h3 className="buy-item-title-and-price">Champion Chenille Embroidered Logo Hoodie Sweatshirt</h3>
          <span className="buy-item-title-and-price"> $82.00 CAD </span>

          <div className="d-block mt-3">
            <input type="radio" id="star10" name="rating" value="5" className="" /><label for="star5" title="5 starS">5 stars</label>
            <input type="radio" id="star9" name="rating" value="4" className="" /><label for="star4" title="4 stars">4 stars</label>
            <input type="radio" id="star10" name="rating" value="3" className="" /><label for="star3" title="3 starS">3 stars</label>
            <input type="radio" id="star9" name="rating" value="2" className="" /><label for="star2" title="2 stars">2 stars</label>
            <input type="radio" id="star9" name="rating" value="1" className="" /><label for="star1" title="1 star">1 star</label>
          </div>

          <h1 className="d-block"> Size: </h1>
          <div className="d-inline-block border p-4 mx-1">S</div>
          <div className="d-inline-block border p-4 mx-1">M</div>
          <div className="d-inline-block border p-4 mx-1">L</div>
          <div className="d-inline-block border p-4 mx-1">XL</div>
          <div className="d-inline-block border p-4 mx-1">XXL</div>

          <div className="d-block mt-4 mb-4">
            <h4 className="size-text d-inline-block"> Size Guides </h4>
            <h4 className="size-text d-inline-block mr-3 ml-3"> | </h4>
            <h4 className="size-text d-inline-block"> Customers Say: True to Size </h4>
          </div>

          <h4 className="d-block">Qty:</h4>

            <UncontrolledDropdown className="w-25 mb-5">
              <DropdownToggle caret className="filter-dropdown d-flex justify-content-between align-items-center bg-white text-dark py-3">
                1
              </DropdownToggle>
              <DropdownMenu className="w-100">
                <DropdownItem>2</DropdownItem>
                <DropdownItem>3</DropdownItem>
                <DropdownItem>4</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <div className="radio">
              <label ><input type="radio" name="optradio" value="ship-to-me" className="mr-3" checked/>Ship to me</label>
            </div>
            <div className="radio">
              <label><input type="radio" name="optradio" value="store-pick-up"className="mr-3"/>In-Store Pickup</label>
            </div>
          <button type="button" className="btn btn-primary btn-lg btn-block p-3 mt-5" id="add-to-bag-button" >Add to Bag</button>
        </div>

        <div className="col-md-6">
          <h1 className="d-block"> Size: </h1>
          <div className="d-inline-block border p-4 mx-1">S</div>
          <div className="d-inline-block border p-4 mx-1">M</div>
          <div className="d-inline-block border p-4 mx-1">L</div>
          <div className="d-inline-block border p-4 mx-1">XL</div>
          <div className="d-inline-block border p-4 mx-1">XXL</div>

          <div className="d-block mt-4 mb-4">
            <h4 className="size-text d-inline-block"> Size Guides </h4>
            <h4 className="size-text d-inline-block mr-3 ml-3"> | </h4>
            <h4 className="size-text d-inline-block"> Customers Say: True to Size </h4>
          </div>

          <h4 className="d-block">Qty:</h4>

            <UncontrolledDropdown className="w-25 mb-5">
              <DropdownToggle caret className="filter-dropdown d-flex justify-content-between align-items-center bg-white text-dark py-3">
                1
              </DropdownToggle>
              <DropdownMenu className="w-100">
                <DropdownItem>2</DropdownItem>
                <DropdownItem>3</DropdownItem>
                <DropdownItem>4</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <div className="radio">
              <label ><input type="radio" name="optradio" value="ship-to-me" className="mr-3" checked/>Ship to me</label>
            </div>
            <div className="radio">
              <label><input type="radio" name="optradio" value="store-pick-up"className="mr-3"/>In-Store Pickup</label>
            </div>
            <button type="button" className="btn btn-primary btn-lg btn-block p-3 mt-5" id="add-to-bag-button" >Add to Bag</button>
          </div>

      </div>
    </div>
  );
}

export default Buy_Item;
