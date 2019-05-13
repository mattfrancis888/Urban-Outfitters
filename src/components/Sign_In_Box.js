import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Sign_In_Box = (props) => {
  return(
    <>
    <form className="p-5">

      <h1 className="text-center" id="sign-in-box-title"> Sign in </h1>

      <div className="form-group mb-4">
        <label for="exampleInputEmail1" className="sign-in-labels">Email address</label>
        <input type="email" className="form-control sign-in-input p-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      </div>

      <div className="form-group mb-4">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" className="form-control sign-in-input p-4" id="exampleInputPassword1" placeholder="Password"/>
      </div>
      <button type="button" className="btn btn-primary btn-lg w-100 p-3" id="sign-in-button">Sign in</button>
    </form>
    </>
  );
}

export default Sign_In_Box
