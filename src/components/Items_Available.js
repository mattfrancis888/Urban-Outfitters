import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import item_1 from '../img/item_1.jpg';
import item_1_alt from '../img/item_1_alt.jpg';
import item_2 from '../img/item_2.jpg';
import item_2_alt from '../img/item_2_alt.jpg';
import item_3 from '../img/item_3.jpg';
import item_3_alt from '../img/item_3_alt.jpg';
import item_4 from '../img/item_4.jpg';
import item_4_alt from '../img/item_4_alt.jpg';

const Items_Available = () =>{
  return (
    <div className="container-fluid">
      <div className="row text-center">
        <h3 className="font-weight-bold my-3 align-with-UO-logo d-md-none">Items</h3>
      </div>
      <div className="row mb-5 px-4 d-flex justify-content-between d-md-none">
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

        <UncontrolledDropdown className="item-attribute-filter">
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

      <h4 className="align-with-UO-logo mb-3 d-md-none" id="result-count"> 5 results </h4>

      <div className="row">

        {/*Start Sidebar */}
        <div className="d-none d-md-block col-md-3">
          <h3 id="browse-by-header" className="pb-3"> Browse by </h3>
          <h3 id="all-new-header" className="py-3"> All New </h3>

          <ul class="list-group">
            <li class="list-group-item border-0 py-3 px-0">Graphic Tees</li>
            <li class="list-group-item border-0 py-3 px-0">Tops</li>
            <li class="list-group-item border-0 py-3 px-0">Jackets</li>
            <li class="list-group-item border-0 py-3 px-0">Bottoms</li>
            <li class="list-group-item border-0 py-3 px-0">Shoes</li>
            <li class="list-group-item border-0 py-3 px-0">Accessories</li>
            <li class="list-group-item border-0 py-3 px-0">Grooming</li>
          </ul>
        </div>
        {/*End of Sidebar */}
        <div className="col-md-9">
          <div className="row">
          {/*FUTURE REMINDER: DOC SAID NOT TO USE A ROW INSIDE ROW! No need to */}
          {/*Will appear on MD breakpoint*/}
            <div className="col-12 d-none d-md-flex">
            {/*'a 'col' inside a column has a different interaction than a 'col' inside a ROW
              ;hence d-flex was used
            */}
              <div className="col">
                <h3 className="font-weight-bold my-3 d-inline-block mr-3">Items</h3>
                <h4 className="d-inline-block" id="result-count"> 5 results </h4>
              </div>
              <div className="col d-flex justify-content-end">
                <UncontrolledDropdown className="item-attribute-filter">
                  <DropdownToggle caret className="filter-dropdown d-flex justify-content-between
                  align-items-center bg-white text-dark">
                    Filter
                  </DropdownToggle>
                  <DropdownMenu className="w-100">
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </div> {/*End of Will appear on MD breakpoint*/}
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-5">
              <div className="position-relative item-available-image-container">
                <img className="item-image mb-3" src={item_1}/>
                <button type="button" className="btn btn-light quick-shop-button">QUICK SHOP</button>
              </div>
              <h3 className="item-title">Champion Chenille Embroidered Logo Hoodie Sweatshirt</h3>
              <span> $82.00 CAD </span>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="position-relative item-available-image-container">
                <img className="item-image mb-3" src={item_2}/>
                <button type="button" className="btn btn-light quick-shop-button">QUICK SHOP</button>
              </div>
              <h3 className="item-title">Champion Chenille Embroidered Logo Hoodie Sweatshirt</h3>
              <span> $82.00 CAD </span>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="position-relative item-available-image-container">
                <img className="item-image" src={item_3}/>
                <button type="button" className="btn btn-light quick-shop-button">QUICK SHOP</button>
              </div>
              <h3 className="item-title">Champion Chenille Embroidered Logo Hoodie Sweatshirt</h3>
              <span> $82.00 CAD </span>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="position-relative item-available-image-container">
                <img className="item-image" src={item_4}/>
                <button type="button" className="btn btn-light quick-shop-button">QUICK SHOP</button>
              </div>
              <h3 className="item-title">Champion Chenille Embroidered Logo Hoodie Sweatshirt</h3>
              <span> $82.00 CAD </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items_Available;
