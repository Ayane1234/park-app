import React from "react";

export const Button = () => {
  return <button style={styles.button}>さがす</button>;
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
  },
};
