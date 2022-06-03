import React from "react";

export const PlaysetSearchButton = (props) => {
  return (
    <div style={styles.PlaysetSearchButton}>
      <p style={styles.text}>
        {props.text1}
        <br></br>
        {props.text2}
      </p>
    </div>
  );
};

const styles = {
  PlaysetSearchButton: {
    width: "100px",
    height: "100px",
    margin: "0px 10px 0 10px ",
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
