import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import item_1 from '../img/item_1.jpg';
import item_1_alt from '../img/item_1_alt.jpg';
import item_2 from '../img/item_2.jpg';
import item_2_alt from '../img/item_2_alt.jpg';
import item_3 from '../img/item_3.jpg';
import item_3_alt from '../img/item_3_alt.jpg';

const Items_Available = () =>{
  return (
    <div className="container-fluid">
      <div className="row text-center">
        <h3 className="font-weight-bold my-3 align-with-UO-logo">Items</h3>
      </div>
      <div className="row mb-5 px-4 d-flex justify-content-between">
        <UncontrolledDropdown id="item-category-filter">
          <DropdownToggle caret className="filter-dropdown d-flex justify-content-between align-items-center bg-white text-dark">
            Item Categories
          </DropdownToggle>
          <DropdownMenu className="w-100">
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <UncontrolledDropdown id="item-attribute-filter">
          <DropdownToggle caret className="filter-dropdown d-flex justify-content-between align-items-center bg-white text-dark">
            Filter
          </DropdownToggle>
          <DropdownMenu className="w-100">
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
        <h4 className="align-with-UO-logo mb-3" id="result-count"> x results </h4>
      <div className="row">
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-5">
          <img className="item-image mb-3" src={item_1}/>
          <h3 className="item-title">Champion Chenille Embroidered Logo Hoodie Sweatshirt</h3>
          <span> $82.00 CAD </span>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <img className="item-image mb-3" src={item_2}/>
          <h3 className="item-title">Champion Chenille Embroidered Logo Hoodie Sweatshirt</h3>
          <span> $82.00 CAD </span>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <img className="item-image" src={item_3}/>
          <h3 className="item-title">Champion Chenille Embroidered Logo Hoodie Sweatshirt</h3>
          <span> $82.00 CAD </span>
        </div>
      </div>

    </div>
  );
};

export default Items_Available;
