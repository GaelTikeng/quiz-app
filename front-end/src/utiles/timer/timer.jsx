import React, { useState, useEffect, useRef } from "react";
import "./timer.css";

const formatTimer = (time) => {
  let hours = Math.floor(time / 3600)
  let minutes = Math.floor((time - 3600) / 60);
  let seconds = Math.floor((time - 3600) % 60 );

  if (hours <= 10) hours = "0" + hours
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds <= 10) seconds = "0" + seconds;
  // console.log(seconds)
  return hours + ' ' + 'h' + ' ' +  minutes +' ' + "min";
  // + " " + seconds + " " + "sec"
  
};

export default function Timer({ seconds }) {
  const [countDown, setCountDown] = useState(seconds);
  const [timeOut, setTimeOut] = useState(false);
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countDown <= 0) {
      clearInterval(timerId.current);
      setTimeOut(true);
    }
  }, [countDown]);

  return (
    <div>
      <h3>Time left: {formatTimer(countDown)} </h3>
      {timeOut ? <p className="stop"><b>Time out !</b></p> : ""}
    </div>
  );
}
