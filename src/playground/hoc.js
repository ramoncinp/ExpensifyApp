// Higher order component (HOC) - A component that renders another component
// Reuse code
// Render hijacking
// Prop manipultaion
// Abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

// requireAuthentication
const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {!props.isAuthenticated && <p>Please log-in to see the info</p>}
      {props.isAuthenticated && <WrappedComponent {...props} />}
    </div>
  );
};

const AdminInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info='these are the details' />, document.getElementById('app'));
ReactDOM.render(
  <AdminInfo isAuthenticated={false} info="these are the details" />,
  document.getElementById("app")
);
