import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Buy_Item_Info = () => {
  return(
    <>
      <div className="d-block mt-3">
        <FontAwesomeIcon icon="star" className="fa-lg"/>
        <FontAwesomeIcon icon="star" className="fa-lg"/>
        <FontAwesomeIcon icon="star" className="fa-lg"/>
        <FontAwesomeIcon icon="star" className="fa-lg"/>
        <FontAwesomeIcon icon="star" className="fa-lg"/>
        <span className="align-middle"> 5.0 </span>
      </div>

      <h1 className="d-block"> Size: </h1>
      <div className="d-inline-block border p-4 mx-1 size-box">S</div>
      <div className="d-inline-block border p-4 mx-1 size-box">M</div>
      <div className="d-inline-block border p-4 mx-1 size-box">L</div>
      <div className="d-inline-block border p-4 mx-1 size-box">XL</div>
      <div className="d-inline-block border p-4 mx-1 size-box">XXL</div>

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
      <button type="button" className="btn btn-primary btn-lg btn-block p-3 mt-5 add-to-bag-button" >Add to Bag</button>

    </>
  );
}

export default Buy_Item_Info;
