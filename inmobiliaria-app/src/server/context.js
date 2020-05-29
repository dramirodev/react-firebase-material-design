import React, { createContext } from "react";

const FirebaseContext = createContext();

const { Consumer } = FirebaseContext;

export const consumerFirebase = (Component) => (props) => (
  <Consumer>
    {(firebase) => <Component {...props} firebase={firebase} />}
  </Consumer>
);
export default FirebaseContext;
