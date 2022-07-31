import React from "react";

export const PlaysetSearchButton = ({ text1, text2, onClick, bool, value }) => {
  return (
    <div
      style={
        bool ? styles.PlaysetSearchButtonTrue : styles.PlaysetSearchButtonFalse
      }
      onClick={onClick}
    >
      <p style={styles.text}>
        {text1}
        <br></br>
        {text2}
      </p>
    </div>
  );
};

const styles = {
  PlaysetSearchButtonFalse: {
    width: "100px",
    height: "100px",
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
    fontSize: "16px",
  },
  PlaysetSearchButtonTrue: {
    width: "100px",
    height: "100px",
    backgroundColor: "#e4af9b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderRadius: "30px",
  },
};
