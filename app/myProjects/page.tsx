"use client";

import Menu from "../components/Menu";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Project from "../components/Project";

export default function Index() {
  const [menuVisible, setMenuVisible] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const isMenuVisible = function () {
    return menuVisible && isMobile ? "none" : "block";
  };

  return (
    <div className="mainPage">
      <Menu onToggleMenu={setMenuVisible} />
      <section
        className="corePage corePageProjects"
        style={{ display: isMenuVisible() }}
      >
        <h2>Mes projets</h2>
        <div className="projectContainer">
          <div className="projectWrapper">
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
        </div>
      </section>
    </div>
  );
}
