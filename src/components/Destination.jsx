import React, { useState, useEffect } from "react";
import data from "../data.json";
import moon from "./../assets/destination/image-moon.png";
import mars from "./../assets/destination/image-mars.png";
import titan from "./../assets/destination/image-titan.png";
import europa from "./../assets/destination/image-europa.png";

const Destination = () => {
  const [planet, setPlanet] = useState(0);
  useEffect(() => {}, [planet]);
  return (
    <main className="destination">
      <span>
        <span> 01 </span>Pick your destination
      </span>
      <img src={planet==0?moon:planet==1?mars:planet==2?europa:titan} alt="" />
      <article>
        <section>
          <span
            onClick={() => setPlanet(0)}
            className={planet == 0 ? "dest-effect" : 0}
          >
            MOON
          </span>
          <span
            onClick={() => setPlanet(1)}
            className={planet == 1 ? "dest-effect" : 1}
          >
            MARS
          </span>
          <span
            onClick={() => setPlanet(2)}
            className={planet == 2 ? "dest-effect" : 2}
          >
            EUROPA
          </span>
          <span
            onClick={() => setPlanet(3)}
            className={planet == 3 ? "dest-effect" : 3}
          >
            TITAN
          </span>
        </section>
        <section>{data.destinations[planet].name}</section>
        <div>{data.destinations[planet].description}</div>
        <div></div>
        <section>
          <div>
            <span>AVG. DISTANCE</span>
            <span>{data.destinations[planet].distance}</span>
          </div>
          <div>
            <span>EST. TRAVEL TIME</span>
            <span>{data.destinations[planet].travel}</span>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Destination;
