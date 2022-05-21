import React from "react";

export const Large = (props) => {
  return (
    <div style={styles.large}>
      <p style={styles.text}>{props.text}</p>
    </div>
  );
};

const styles = {
  large: {
    width: "60vw",
    height: "25vw",
    margin: "10px",
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
