import React, { useState, useEffect } from "react";

import logoSrc from "./../assets/shared/logo.svg";
import hamSrc from "./../assets/shared/icon-hamburger.svg";
import closeSrc from "./../assets/shared/icon-close.svg";

const Nav = ({ handleClick }) => {
  const [page, setPage] = useState(0);
  const [menuToggle,setMenuToggle] = useState(false);
  useEffect(() => {}, [page]);
  return (
    <>
    <nav className="nav">
      <img src={logoSrc} />
      <div></div>
      <article>
        <span
          className={page == 0 ? "nav-effects" : ""}
          onClick={() => {
            handleClick(0);
            setPage(0);
          }}
        >
          <span>00 </span>
          Home
        </span>
        <span
          className={page == 1 ? "nav-effects" : ""}
          onClick={() => {
            handleClick(1);
            setPage(1);
          }}
        >
          <span>01 </span>
          Destination
        </span>
        <span
          className={page == 2 ? "nav-effects" : ""}
          onClick={() => {
            handleClick(2);
            setPage(2);
          }}
        >
          <span>02 </span>
          Crew
        </span>
        <span
          className={page == 3 ? "nav-effects" : ""}
          onClick={() => {
            handleClick(3);
            setPage(3);
          }}
        >
          <span>03 </span>
          Technology
        </span>
      </article>
      <img src={hamSrc} onClick={()=>setMenuToggle(true)}/>
    </nav>
    
   { menuToggle?
    <article className={'menu-toggle'}>
      <img src={closeSrc} onClick={()=>setMenuToggle(false)}/>
        <span
          className={page == 0 ? "nav-effect" : ""}
          onClick={() => {
            handleClick(0);
            setPage(0);
          }}
        >
          <span>00 </span>
          HOME
        </span>
        <span
          className={page == 1 ? "nav-effect" : ""}
          onClick={() => {
            handleClick(1);
            setPage(1);
          }}
        >
          <span>01 </span>
          DESTINATION
        </span>
        <span
          className={page == 2 ? "nav-effect" : ""}
          onClick={() => {
            handleClick(2);
            setPage(2);
          }}
        >
          <span>02 </span>
          CREW
        </span>
        <span
          className={page == 3 ? "nav-effect" : ""}
          onClick={() => {
            handleClick(3);
            setPage(3);
          }}
        >
          <span>03 </span>
          TECHNOLOGY
        </span>
      </article>:''}
    </>
  );
};

export default Nav;
