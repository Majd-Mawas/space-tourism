import React, { useState, useEffect } from "react";
import data from "../data.json";

const Technology = () => {
  const [tech, setTech] = useState(0);
  useEffect(() => {}, [tech]);
  return (
    <main className="tech">
      <span>
        <span> 03 </span>SPACE LAUNCH 101
      </span>
      <article>
        <section>
          <button
            onClick={() => setTech(0)}
            className={tech == 0 ? "btn-effect-tech" : ""}
          >
            1
          </button>
          <button
            onClick={() => setTech(1)}
            className={tech == 1 ? "btn-effect-tech" : ""}
          >
            2
          </button>
          <button
            onClick={() => setTech(2)}
            className={tech == 2 ? "btn-effect-tech" : ""}
          >
            3
          </button>
        </section>
        <section>
          <span>THE TERMINOLOGY…</span>
          <span>{data.technology[tech].name}</span>
          <span>{data.technology[tech].description}</span>
        </section>
      </article>
      <article
        className={tech == 0 ? "imgSrc1" : tech == 1 ? "imgSrc2" : "imgSrc3"}
      ></article>
    </main>
  );
};

export default Technology;
