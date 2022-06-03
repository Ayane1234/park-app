import React from "react";

export const AgeSearchButton = (props) => {
  return (
    <div style={styles.AgeSearchButton}>
      <p style={styles.text}>{props.text}</p>
    </div>
  );
};

const styles = {
  AgeSearchButton: {
    width: "60vw",
    height: "25vw",
    margin: "30px",
    backgroundColor: "white",
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
};
