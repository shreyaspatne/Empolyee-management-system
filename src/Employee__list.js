import React from "react";
import "./User.css";
import sdata from "./sdata";
import Employ from "./Employ";

function Employee__list(props) {
  let alpha = props.prop1;
  return (
    <div className="employ__list__section">
      <div className="employ__list__section__heading">{alpha}</div>
      <div className="employ__list__section__body">
        {sdata.map((val, ind) => {
          if (
            val.sdfname.charAt(0) == alpha.charAt(0) ||
            val.sdfname.charAt(0).toUpperCase() == alpha.charAt(0)
          ) {
            return (
              <Employ
                fname={val.sdfname}
                lname={val.sdlname}
                amt={val.sdamt}
                acamt={val.sdamtoutof}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Employee__list;
