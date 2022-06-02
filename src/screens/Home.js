import React from "react";
import Circle from "../img/circle.png";
import Circle2 from "../img/circle2.png";
import { SearchItemButton } from "../components/SearchItemButton";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div style={styles.body}>
      <img src={Circle} style={styles.img} />
      <div>
        <section style={styles.section}>
          <SearchItemButton
            text="遊具からさがす"
            onClick={() => navigate("/Playset")}
          />

          <SearchItemButton text="年齢からさがす" />
        </section>
        <section style={styles.section}>
          <SearchItemButton text="地域からさがす" />

          <SearchItemButton text="公園名からさがす" />
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
