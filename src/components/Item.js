import React from "react";

export const Item = (props) => {
  return (
    <div style={styles.item}>
      <p style={styles.text}>{props.text}</p>
    </div>
  );
};

const styles = {
  item: {
    width: "30vw",
    height: "30vw",
    margin: "10px",
    backgroundColor: "#d4dfbb",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderRadius: "40px",
  },
  text: {
    position: "absolute",
    textAlign: "center",
  },
};
