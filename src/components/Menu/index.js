import React from "react";
import menu from "./menu";
const styles = {
  nav: {
    background: "#333",
    padding: "10px 20px",
  },
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    gap: "20px",
  },
  li: {},
  a: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

const Menu = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        {menu.map((item) => (
          <li key={item.id} style={styles.li}>
            <a href={item.path} style={styles.a}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
