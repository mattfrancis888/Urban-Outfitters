import React from 'react';

{/*#USE THIS FOR PRACTICE TO IN PASSING child COMPONENTS*/}
const Body = (props) => {
  return (
    <div className="container-fluid"> {/*Start of main content/body section*/}
          {/* End of main content/body section */}
          {props.children}
    </div>
  );
}

export default Body;
