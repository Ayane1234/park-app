import React from "react";
import { Link } from "react-router-dom";

export const Button = () => {
  return (
    <Link to="/List" style={styles.link}>
      <button style={styles.button}>さがす</button>
    </Link>
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
