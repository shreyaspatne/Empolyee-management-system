import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

function Progress(props) {
  const perct = Math.round((props.p1 / props.p2) * 100);
  return (
    <div>
      <LinearProgress variant="determinate" value={perct} />
    </div>
  );
}

export default Progress;
