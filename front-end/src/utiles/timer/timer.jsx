import React, { useState, useEffect, useRef, forwardRef } from "react";
import "./timer.css";

const formatTimer = (time) => {
  let seconds = 0;
  let minutes = 0;
  let hours = Math.floor(time / 3600);
  if (time >= 3600) {
    minutes = Math.floor((time - 3600) / 60);
    seconds = Math.floor((time - 3600) % 60);
  } else {
    minutes = Math.floor(time / 60);
    seconds = Math.floor(time - minutes * 60);
  }

  if (hours <= 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  // console.log(seconds)
  return (
    hours +
    " " +
    "h" +
    " " +
    minutes +
    " " +
    "min" +
    " " +
    seconds +
    " " +
    "sec"
  );
};

const Timer = ({ seconds, ref }) => {
  const [countDown, setCountDown] = useState(seconds);

  const [leftTime, setLeftTime] = useState(false);
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countDown <= 300) setLeftTime(true);
    if (countDown <= 0) {
      clearInterval(timerId.current);
      // setTimeOut(true)
      alert("time out");
      setTimeOut(!timeOut);
    }
  }, [countDown]);

  return (
    <div>
      {leftTime ? (
        <h3 className="stop">Time left: {formatTimer(countDown)} </h3>
      ) : (
        <h3 className="play">Time left: {formatTimer(countDown)} </h3>
      )}
    </div>
  );
};
export default Timer;
