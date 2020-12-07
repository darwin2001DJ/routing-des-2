import React, { Component } from "react";
import { gb34 } from "./plansJson";
import Card from "./Card";
export default class GB34 extends Component {
  render() {
    return (
      <>
        <h1 className="heading">3G/4G Plans</h1>
        {gb34.map((data) => (
          <Card planData={data} />
        ))}
      </>
    );
  }
}
