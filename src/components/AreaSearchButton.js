import React from "react";

export const AreaSearchButton = ({ text, onClick, bool }) => {
  return (
    <div
      style={bool ? styles.AreaFilterButtonTrue : styles.AreaFilterButtonFalse}
    >
      <p style={styles.text} onClick={onClick}>
        {text}
      </p>
    </div>
  );
};

const styles = {
  AreaFilterButtonTrue: {
    width: "220px",
    height: "100px",
    margin: "10px",
    backgroundColor: "#e4af9b",
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
  AreaFilterButtonFalse: {
    width: "220px",
    height: "100px",
    margin: "10px",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderRadius: "30px",
  },
};
