import React from "react";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          <a href="https://google.com">FateFul</a> | React.Js
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed By FateFul With Love ♥</p>
      </footer>
    </>
  );
};

export default Layout;
