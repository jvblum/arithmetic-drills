import { useState, useEffect } from "react";

export default function useTimer() {
  const timeDefault = 120;
  const [time, setTime] = useState(timeDefault);
  const [intervalMaster, setIntervalMaster] = useState(null);

  const startTimer = () => {
    setIntervalMaster(
      setInterval(() => {
        setTime((prev) => prev - 1);
        console.log(time);
      }, 1000)
    );
  };

  const pauseTimer = () => {
    clearInterval(intervalMaster);
    setIntervalMaster(null);
  };

  const resetTimer = () => {
    setTime(timeDefault);
    clearInterval(intervalMaster);
    setIntervalMaster(null);
  };

  useEffect(() => {
    if (time === 0) {
      resetTimer();
    }
  }, [time]);

  return { time, startTimer, resetTimer, pauseTimer, intervalMaster };
}
