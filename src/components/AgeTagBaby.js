import React from "react";
import Baby from "../img/baby.png";

export const AgeTagBaby = () => {
  return (
    <div style={styles.ageContents}>
      <img src={Baby} alt="赤ちゃん" style={styles.icon} />
      <p style={styles.age}>１ー３歳向け</p>
    </div>
  );
};

const styles = {
  ageContents: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    width: "25px",
    height: "auto",
  },
  age: {
    fontSize: "13px",
  },
};
