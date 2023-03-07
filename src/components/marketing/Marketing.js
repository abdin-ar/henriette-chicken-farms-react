import Marketing1 from "./Marketing1";
import Marketing2 from "./Marketing2";
import Marketing3 from "./Marketing3";
import Marketing4 from "./Marketing4";
import Marketing5 from "./Marketing5";
import { useState, useEffect } from "react";

const marketingData = [
  <Marketing1 />,
  <Marketing2 />,
  <Marketing3 />,
  <Marketing4 />,
  <Marketing5 />,
];

const timeInterval = 10000;

const Marketing = () => {
  const [chosen, setChosen] = useState(
    Math.floor(Math.random() * marketingData.length)
  );
  const [isMoving, setIsMoving] = useState(true);

  useEffect(() => {
    let interval;
    if (isMoving) {
      interval = setInterval(selectMarketing, timeInterval);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [timeInterval, isMoving]);

  function selectMarketing() {
    let newChosen = Math.floor(Math.random() * marketingData.length);
    if (newChosen === chosen) {
      if (newChosen === marketingData.length - 1) {
        newChosen = 0;
      } else {
        newChosen++;
      }
    }
    setChosen(newChosen);
  }

  return (
    <article
      className="section-marketing"
      onMouseEnter={() => setIsMoving(false)}
      onMouseLeave={() => setIsMoving(true)}
      onFocus={() => setIsMoving(false)}
      onBlur={() => setIsMoving(true)}
      tabIndex={0}
    >
      {marketingData[chosen]}
    </article>
  );
};

export default Marketing;
