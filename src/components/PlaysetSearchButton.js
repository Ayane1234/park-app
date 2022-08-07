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
    width: "90px",
    height: "90px",
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
    fontSize: "13px",
  },
  PlaysetSearchButtonTrue: {
    width: "90px",
    height: "90px",
    backgroundColor: "#e4af9b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderRadius: "30px",
  },
};
