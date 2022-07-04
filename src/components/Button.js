import React from "react";

export const Button = (props) => {
  return (
    <button style={styles.button} onClick={props.onClick}>
      さがす
    </button>
  );
};

const styles = {
  button: {
    width: "55%",
    height: "70px",
    margin: "20px",
    backgroundColor: "#d4dfbb",
    borderRadius: "30px",
    border: "none",
    fontSize: "18px",
    position: "fixed",
    bottom: 30,
  },
};
