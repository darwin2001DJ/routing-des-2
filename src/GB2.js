import React, { Component } from "react";
import { gb2 } from "./plansJson";
import Card from "./Card";
export default class GB2 extends Component {
  render() {
    return (
      <>
        <h1 className="heading">2G Plans</h1>
        {gb2.map((data) => (
          <Card planData={data} />
        ))}
      </>
    );
  }
}
