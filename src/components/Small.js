import React from "react";

export const Small = (props) => {
  return (
    <div style={styles.small}>
      <p style={styles.text}>
        {props.text1}
        <br></br>
        {props.text2}
      </p>
    </div>
  );
};

const styles = {
  small: {
    width: "25vw",
    height: "25vw",
    margin: "10px",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderRadius: "20px",
  },
  text: {
    position: "absolute",
    textAlign: "center",
  },
};
