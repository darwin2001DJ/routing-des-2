import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const { planData } = this.props;

    return (
      <>
        <div id={planData.id} className="card">
          <div id={planData.id + "header"}>
            <h1>{planData.price}</h1>
            <div id={planData.id + "description"}>
              <p>{planData.plan}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
