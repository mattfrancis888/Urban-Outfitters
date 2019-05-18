import React,  { Component }  from 'react';

class Total_Transaction extends React.Component{

    render(){
      return(
        <>
        <div className="container-fluid">
          <div className="row mb-3">
            <div className="col-12 mt-5 mb-5 col-md-6 col-lg-8">
              <h4 className="border-bottom shopping-bag-header pb-3"> Shopping Bag </h4>

              <div className="p-5 m-5">
                <h4 className="text-center cart-empty"> Your bag is currently empty. </h4>
              </div>
              <div className="p-5 m-5">
                <h4 className="text-center cart-empty">Test Item</h4>
              </div>
              <div className="p-5 m-5">
                <h4 className="text-center cart-empty">Test Item</h4>
              </div>
              <div className="p-5 m-5">
                <h4 className="text-center cart-empty">Test Item</h4>
              </div>
              <div className="p-5 m-5">
                <h4 className="text-center cart-empty">Test Item</h4>
              </div>
            </div>

            <div className="col-12 col-md-6 order-summary-container col-lg-4">
              <div className="order-summary-container">
                <h1 className="border-bottom order-summary-header"> Order Summary </h1>
                <div className="order-summary-info">
                  <div className="d-flex justify-content-between">
                    <h1>Subtotal</h1>
                    <h1>C$ 0.00</h1>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h1>Shipping</h1>
                    <h1>TBD</h1>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h1>Estimated Tax</h1>
                    <h1>C$0.00</h1>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h1>Totalx</h1>
                    <h1>C$0.00</h1>
                  </div>
                </div>
                <button type="button" className="btn btn-primary btn-lg btn-block p-3 mt-5 checkout-button" >Proceed To Checkout</button>
              </div>
            </div>
          </div>
        </div>
        </>
      );
    }
}

export default Total_Transaction;
