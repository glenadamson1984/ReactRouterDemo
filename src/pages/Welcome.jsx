import React from "react";
import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome</h1>
      <Route path={"/welcome/new-user"}>
        <p>welcome new user</p>
      </Route>
    </section>
  );
};

export default Welcome;
