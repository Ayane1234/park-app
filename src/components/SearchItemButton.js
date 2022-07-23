import React from "react";

export const SearchItemButton = ({ text1, text2, onClick }) => {
  return (
    <div style={styles.item} onClick={onClick}>
      <p style={styles.text}>
        {text1}
        <br></br>
        {text2}
      </p>
    </div>
  );
};

const styles = {
  item: {
    width: "120px",
    height: "120px",
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
