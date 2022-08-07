import React from "react";
import Circle from "../img/circle.png";
import Circle2 from "../img/circle2.png";
import { SearchItemButton } from "../components/SearchItemButton";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div style={styles.body}>
      <img src={Circle} style={styles.img} alt={"雲"} />
      <div>
        <section style={styles.section}>
          <SearchItemButton
            text1="遊具から"
            text2="さがす"
            onClick={() => {
              navigate("/Playset");
            }}
          />

          <SearchItemButton
            text1="年齢から"
            text2="さがす"
            onClick={() => {
              navigate("/Age");
            }}
          />
        </section>
        <section style={styles.section}>
          <SearchItemButton
            text1="地域から"
            text2="さがす"
            onClick={() => {
              navigate("/Area");
            }}
          />

          <SearchItemButton
            text1="公園名から"
            text2="さがす"
            onClick={() => {
              navigate("/ParkName");
            }}
          />
        </section>
      </div>
      <img src={Circle2} style={styles.img2} alt={"雲"} />
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
    zIndex: 1,
  },

  img: {
    position: "fixed",
    right: "-40%",
    top: "-40%",
  },
  img2: {
    position: "fixed",
    bottom: "-40%",
    left: "-40%",
  },
};
