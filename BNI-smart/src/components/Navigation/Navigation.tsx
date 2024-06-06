"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navigation: React.FC = () => {
  const [menu, setMenu] = useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("menu-shrink");
      } else {
        elementId?.classList.remove("menu-shrink");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <div>
      <nav
        id="navbar"
        className="navbar fixed-top navbar-expand-md navbar-light top-menu"
      >
        <div className="container">
          <Image
            src="/images/tki.svg"
            alt="App About Image"
            width={130}
            height={130}
          />

          <button
            onClick={toggleNavbar}
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={classOne} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link onClick={toggleNavbar} className="nav-link" href="#home">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link onClick={toggleNavbar} className="nav-link" href="#problem">
                  Problem
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  onClick={toggleNavbar}
                  className="nav-link"
                  href="#benefit"
                >
                  Benefit
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  onClick={toggleNavbar}
                  className="nav-link"
                  href="#pengguna"
                >
                  USER
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  onClick={toggleNavbar}
                  className="nav-link"
                  href="#pricing"
                >
                  Pricing
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link onClick={toggleNavbar} className="nav-link" href="#faqs">
                  Faqs
                </Link>
              </li>

              <li className="nav-item">
                <Link onClick={toggleNavbar} className="nav-link" href="#blog">
                  Blog
                </Link>
              </li> */}

              <li className="nav-item">
                <Link
                  onClick={toggleNavbar}
                  className="nav-link"
                  href="#contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
