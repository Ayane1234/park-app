import React from "react";
import Circle from "../img/circle.png";
import Circle2 from "../img/circle2.png";
import { Item } from "../components/Item";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div style={styles.body}>
      <img src={Circle} style={styles.img} />
      <div>
        <section style={styles.section}>
          <Link to="/Playset">
            <Item text="遊具からさがす" />
          </Link>

          <Link to="/Age">
            <Item text="年齢からさがす" />
          </Link>
        </section>
        <section style={styles.section}>
          <Link to="/Area">
            <Item text="地域からさがす" />
          </Link>

          <Link to="/ParkName">
            <Item text="公園名からさがす" />
          </Link>
        </section>
      </div>
      <img src={Circle2} style={styles.img2} />
    </div>
  );
};
const styles = {
  body: {
    width: "100vw",
    height: "100vh",
    position: "relative",
    backgroundColor: "#f3eed5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
  },

  img: {
    position: "fixed",
    right: "-25%",
    top: "-15%",
  },
  img2: {
    position: "fixed",
    bottom: "-10%",
    left: "-40%",
    // transform: "translate(-30%,-75%)",
  },
};
