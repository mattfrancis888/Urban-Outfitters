import React from 'react';
import item_1 from '../img/item_1.jpg';
import item_1_alt from '../img/item_1_alt.jpg';
import item_2 from '../img/item_2.jpg';
import item_2_alt from '../img/item_2_alt.jpg';

const Items_Available = () =>{
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <h1 className="">Items</h1>
      </div>
      <div className="row">
        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
          <img class="content_image" src={item_1}/>
          <h3>Champion Chenille Embroidered Logo Hoodie Sweatshirt</h3>
          <span> $82.00 CAD </span>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <img class="content_image" src={item_2}/>
          <h3>Champion Chenille Embroidered Logo Hoodie Sweatshirt</h3>
          <span> $82.00 CAD </span>
        </div>
      </div>
    </div>
  );
};

export default Items_Available;
