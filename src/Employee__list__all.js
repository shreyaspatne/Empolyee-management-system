import React from "react";
import "./User.css";
import sdata from "./sdata";
import Employ from "./Employ";
function Employee__list__all() {
  return (
    <div className="employ__list__section">
      <div className="employ__list__section__heading">All</div>
      <div className="employ__list__section__body">
        {sdata.map((val, ind) => {
          return (
            <Employ
              fname={val.sdfname}
              lname={val.sdlname}
              amt={val.sdamt}
              acamt={val.sdamtoutof}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Employee__list__all;
