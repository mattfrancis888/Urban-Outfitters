import React from 'react';
import {Link} from 'react-router-dom';
import item_1 from '../img/item_1.jpg';
import item_1_alt from '../img/item_1_alt.jpg';

const Item_Info = () => {
  return(
    <>
      <div className="position-relative item-available-image-container">
        <Link to="buy-item">
        <img className="item-image mb-3" src={item_1}/>
        <button type="button" className="btn btn-light quick-shop-button">QUICK SHOP</button>
        </Link>
      </div>
      <h3 className="item-title">Champion Chenille Embroidered Logo Hoodie Sweatshirt</h3>
      <span> $82.00 CAD </span>

    </>
  );
}

export default Item_Info;
