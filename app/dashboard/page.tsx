"use client";

import LogoutButton from "../components/LogoutButton";
import Menu from "../components/Menu";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Article from "../components/Article";

export default function Index() {
  const [username, setUsername] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const isMenuVisible = function () {
    return menuVisible && isMobile ? "none" : "block";
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("/api/getUsername");
      const data = await result.json();
      setUsername(data);
    };

    fetchData();
  }, []);

  return (
    <div className="mainPage">
      <Menu onToggleMenu={setMenuVisible} />
      <div className="corePage" style={{ display: isMenuVisible() }}>
        <section className="topContainer">
          <div className="topWrapper">
            <article className="welcome topCard">
              <h2>Bienvenue</h2>
              <p>{username}</p>
            </article>
            <div className="topCardBottom">
              <article className="topCard">Lorem ipsum</article>
              <article className="topCard">Lorem ipsum</article>
            </div>
          </div>
          <div className="asideWrapper">
            <aside>Lorem Ipsum</aside>
          </div>
        </section>
        <section className="bottomContainer">
          <h3>Lorem ipsum dolor sit amet</h3>
          <div className="bottomArticleContainer">
            <Article />
            <Article />
            <Article />
            <Article />          
          </div>
        </section>
      </div>
    </div>
  );
}
