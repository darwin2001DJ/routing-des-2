import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import TopupPlan from "./TopupPlan";
import GB2 from "./GB2";
import GB34 from "./GB34";
import Img2g from "./Images/2g.png";
import Img3g4g from "./Images/3g4g.png";
import ImgTopup from "./Images/topup.png";

export default class RouterJioPlans extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/topup" component={TopupPlan} />
            <Route path="/2g" component={GB2} />
            <Route path="/3g4g" component={GB34} />
          </Switch>
          <nav>
            <Link to="/topup">
              <img id="topup-image" src={ImgTopup} />
            </Link>
            <Link to="/2g">
              <img id="jio-image" src={Img3g4g} />
            </Link>
            <Link to="/g3g4">
              <img id="GB2-image" src={Img2g} />
            </Link>
          </nav>
        </Router>
      </>
    );
  }
}
