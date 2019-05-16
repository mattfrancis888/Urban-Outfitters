import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Sign_In_Box extends React.Component {

  closeClicked = () => {
    this.props.closeSignInCallback(false);
  }

  componentDidUpdate(prev){
    if (this.props.showSignInBox) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "visible";
    }
  }


  render(){
    if(this.props.showSignInBox === false){
      return(null);
    } else{
      return(
        <>
        <div className="popup-out" onClick={this.closeClicked} >
          <div className="popup-in">
            <form className="p-5">
              <span className="d-flex justify-content-end">
                <FontAwesomeIcon icon="times"
                 className="fa-lg" style={ {color: "#767676", cursor:"pointer"} }
                 onClick={this.closeClicked}/>
              </span>
              <h1 className="text-center" id="sign-in-box-title"> Sign in </h1>

              <div className="form-group mb-4 w-100">
                <label for="exampleInputEmail1" className="sign-in-labels">Email address</label>
                <input type="email" className="form-control sign-in-input p-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              </div>

              <div className="form-group mb-4 w-100">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control sign-in-input p-4" id="exampleInputPassword1" placeholder="Password"/>
              </div>
              <button type="button" className="btn btn-primary btn-lg w-100 p-3" id="sign-in-button">Sign in</button>
            </form>
          </div>
        </div>
        </>
      );
    }
  }
}

export default Sign_In_Box;
