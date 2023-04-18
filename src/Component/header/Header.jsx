import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

function NavItem(props) {
  return (
    <li>
      <NavLink className={props.cn} to={props.path} onClick={props.close}>
        <i className={props.icon} />
        {props.name}
      </NavLink>
    </li>
  );
}

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [subMenuClick, setSubmenuClick] = useState(false);
  const handleSubMenuClick = () => setSubmenuClick(!subMenuClick);
  const closeMobileMenu = () => {
    setClick(false);
    setSubmenuClick(false);
  }

  let menuRef = useRef();
  let subMenuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setClick(false);
      }
      if(!subMenuRef.current.contains(e.target)){
        setSubmenuClick(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink className="nav-logo" to="/">
            <img
              id="logo"
              src="https://www.dtims.intan.my/theme/images/logo.png"
              alt="Intan logo"
            />
          </NavLink>
          <div ref={menuRef}>
            <div className="menu-icon" onClick={handleClick}>
              <i className={!click ? "bi bi-list" : "bi bi-x-lg"}></i>
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"} ref={subMenuRef}>
              <NavItem
                cn="navlink"
                path="/"
                icon="bi bi-house-fill"
                name="Laman Utama"
                close = {closeMobileMenu}
              />
              <NavItem
                cn="navlink"
                path="/maklumat-penyemak"
                icon="bi bi-search"
                name="Semak Sijil"
                close = {closeMobileMenu}
              />
              <li className={subMenuClick ? "menu-has-children active" : "menu-has-children"} onClick={handleSubMenuClick} >
                <span className="akaun">
                  <i className="bi bi-person-fill"></i>Akaun Pengguna
                </span>
                <ul
                  className={subMenuClick ? "sub-menu active" : "sub-menu"}
                >
                  <NavItem
                    cn="navlink subItem"
                    path="/login"
                    icon="bi bi-box-arrow-in-right"
                    name="Log Masuk"
                    close = {closeMobileMenu}
                  />
                  <NavItem
                    cn="navlink subItem"
                    path="/register"
                    icon="bi bi-pencil-square"
                    name="Daftar Akaun"
                    close = {closeMobileMenu}
                  />
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header;
