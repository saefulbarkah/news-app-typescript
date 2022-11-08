import { Header } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [blurNav, setBlurNav] = useState(false);

  // blur effect on navbar
  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 0) {
        setBlurNav(true);
      }
      if (window.pageYOffset === 0) {
        setBlurNav(false);
      }
    };
    console.log(blurNav);
  }, [blurNav]);
  return (
    <Header className={`header ${blurNav ? "blur" : ""}`}>
      <nav className="navbar">
        <div className="logo">News</div>
        <ul className="nav-list">
          <NavLink to="" className="nav-item btn-nav">
            Reading Now
          </NavLink>
        </ul>
      </nav>
    </Header>
  );
};

export default Navbar;
