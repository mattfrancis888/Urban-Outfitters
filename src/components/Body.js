import React from 'react';


const Body = (props) => {
  return (
    <div className="container-fluid"> {/*Start of main content/body section*/}
          {/* End of main content/body section */}
          {props.children}
    </div>
  );
}

export default Body;
