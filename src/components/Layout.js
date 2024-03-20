import React from "react";
import Navbar from "./Navbar";
import styles from "../styles/style";
import Footer from "./Footer";
//import Hero from "./Hero";

const Layout = ({ children }) => {
  return (
    <div className="bg-primary w-full overflow-clip">
      <div
        className={`bg-primary sticky top-0 z-20 ${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className={` ${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <main>{children}</main>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
