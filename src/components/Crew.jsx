import React, { useState, useEffect } from "react";
import data from "../data.json";
import imgSrc1 from ".././assets/crew/image-douglas-hurley.png";
import imgSrc2 from ".././assets/crew/image-mark-shuttleworth.png";
import imgSrc3 from ".././assets/crew/image-victor-glover.png";
import imgSrc4 from ".././assets/crew/image-anousheh-ansari.png";

const Crew = () => {
  const [crew, setcrew] = useState(0);
  useEffect(() => {}, [crew]);
  return (
    <main className="crew">
      <span>
        <span> 02 </span>MEET YOUR CREW
      </span>
      <img
        src={
          crew == 0
            ? imgSrc1
            : crew == 1
            ? imgSrc2
            : crew == 2
            ? imgSrc3
            : imgSrc4
        }
        alt=""
        srcset=""
      />
      <article>
        <span>{data.crew[crew].role}</span>
        <section>{data.crew[crew].name}</section>
        <section>{data.crew[crew].bio}</section>
        <section>
          <button
            className={crew == 0 ? "btn-effect" : ""}
            onClick={() => setcrew(0)}
          ></button>
          <button
            className={crew == 1 ? "btn-effect" : ""}
            onClick={() => setcrew(1)}
          ></button>
          <button
            className={crew == 2 ? "btn-effect" : ""}
            onClick={() => setcrew(2)}
          ></button>
          <button
            className={crew == 3 ? "btn-effect" : ""}
            onClick={() => setcrew(3)}
          ></button>
        </section>
      </article>
    </main>
  );
};

export default Crew;
