import React from "react";
import "./User.css";
import Action from "./Action";
import Progress from "./Progress";

function Employ(props) {
  return (
    <div className="employ__list__body">
      <div className="employ__list__body__nav">
        <div className="employ__list__name">
          <div>{props.fname}</div>
          <div>{props.lname}</div>
        </div>
        <div className="action__button">
          <Action />
        </div>
      </div>
      <div className="employ__list__amount__div">
        <div className="amount__paid">Amount Paid</div>
        <div className="amount__paid__value">
          <div>
            {props.amt}
            <span>$</span>
          </div>
          <div>
            of {props.acamt}
            <span>$</span>
          </div>
        </div>
        <div className="employ__list__progressbar">
          <Progress p1={props.amt} p2={props.acamt} />
        </div>
      </div>
    </div>
  );
}

export default Employ;
