import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";

// Random component
//const now=Date.parse('2021-06-08T06:00:00');
const today = new Date("2021-06-08T07:00:00");
const x = today.setHours(today.getHours() + 3);

//var hourNow = today.getHours();
//const diff=Math.abs(end-now);
//const a=(now+(now*60*60*1000));

const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
};

ReactDOM.render(
  <Countdown date={Date.now() + x} renderer={renderer} />,
  document.getElementById("root")
);
