import React, { Component } from "react";
import { topup } from "./plansJson";
import Card from "./Card";
export default class TopupPlan extends Component {
  render() {
    return (
      <>
        <h1 className="heading">Topup Plans</h1>
        {topup.map((data) => (
          <Card planData={data} />
        ))}
      </>
    );
  }
}
