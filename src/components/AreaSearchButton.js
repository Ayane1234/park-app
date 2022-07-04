import React from "react";

export const AreaSearchButton = (props) => {
  return (
    <div style={styles.AreaSearchButton}>
      <p style={styles.text} onClick={props.onClick}>
        {props.text}
      </p>
    </div>
  );
};

const styles = {
  AreaSearchButton: {
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
