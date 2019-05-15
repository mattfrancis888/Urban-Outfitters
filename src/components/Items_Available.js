import React, { Component } from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import item_1 from '../img/item_1.jpg';
import item_1_alt from '../img/item_1_alt.jpg';
import item_2 from '../img/item_2.jpg';
import item_2_alt from '../img/item_2_alt.jpg';
import item_3 from '../img/item_3.jpg';
import item_3_alt from '../img/item_3_alt.jpg';
import item_4 from '../img/item_4.jpg';
import item_4_alt from '../img/item_4_alt.jpg';

class Items_Available extends React.Component {
  componentDidMount() {
      window.scrollTo(0, 0);
  }
  render(){
    return (
      <div className="container-fluid">
        <div className="row text-center">
          <h3 className="font-weight-bold my-3 align-with-UO-logo d-md-none">Items</h3>
        </div>
        <div className="row mb-5 px-4 d-flex justify-content-between d-md-none">
          <UncontrolledDropdown id="item-category-filter">
            <DropdownToggle caret className="dropdown-design d-flex justify-content-between align-items-center bg-white text-dark">
              Item Categories
            </DropdownToggle>
            <DropdownMenu className="w-100">
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown className="item-attribute-filter">
            <DropdownToggle caret className="dropdown-design d-flex justify-content-between align-items-center bg-white text-dark">
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

          {/*Beginning Sidebar */}
          <div className="d-none d-md-block col-md-3 col-xl-2">
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
          <div className="col-md-9 col-xl-10">
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
                    <DropdownToggle caret className="dropdown-design d-flex justify-content-between
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
              <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-5">
                {this.props.item_info}
              </div>
              <div className="col-6 col-md-4 col-lg-4 col-xl-3 mb-5">
                {this.props.item_info}
              </div>
              <div className="col-6 col-md-4 col-lg-4 col-xl-3 mb-5" >
                {this.props.item_info}
              </div>
              <div className="col-6 col-md-4 col-lg-4 col-xl-3 mb-5">
                {this.props.item_info}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Items_Available;
