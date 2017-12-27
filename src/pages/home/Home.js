import React from "react";
import { connect } from "react-redux";
import Button from "antd/lib/button";

import { Logo } from "../../components";

let Home = ({ status, counter, onIncrement }) => (
  <div className="home">
    <Logo />
    <h1>{status}</h1>
    <h2>{counter}</h2>
    <Button onClick={onIncrement}>+</Button>
  </div>
);

/**
 * connect arguments
 */
const mapStateToProps = ({ counter, status }) => ({
  counter,
  status
});
const mapDispatchToProps = dispatch => ({
  onIncrement: () => {
    dispatch({
      type: "INCREMENT"
    });
  }
});

Home = connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;
