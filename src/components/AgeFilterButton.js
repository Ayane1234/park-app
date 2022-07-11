import React from "react";

export const AgeFilterButton = ({ text, onClick, bool }) => {
  // console.log("bool:", bool);
  return (
    <div
      style={bool ? styles.AgeFilterButtonTrue : styles.AgeFilterButtonFalse}
    >
      <p style={styles.text} onClick={onClick}>
        {text}
      </p>
    </div>
  );
};

const styles = {
  AgeFilterButtonTrue: {
    width: "60vw",
    height: "25vw",
    margin: "30px",
    backgroundColor: "#e4af9b",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderRadius: "30px",
  },
  text: {
    position: "absolute",
    textAlign: "center",
  },
  AgeFilterButtonFalse: {
    width: "60vw",
    height: "25vw",
    margin: "30px",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderRadius: "30px",
    cursor: "pointer",
  },
};
