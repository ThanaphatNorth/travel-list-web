import React from "react";
import menu from "./menu";
import styles from "./Menu.module.scss";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  return (
    <nav className={styles.nav}>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            <Link
              to={item.path}
              className={location.pathname === item.path ? styles.active : ""}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
