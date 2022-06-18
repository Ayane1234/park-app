import React from "react";
import Child from "../img/boy.png";

export const AgeTagChild = () => {
  return (
    <div style={styles.ageContents}>
      <img src={Child} alt="子ども" style={styles.icon} />
      <p style={styles.age}>３ー６歳向け</p>
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
