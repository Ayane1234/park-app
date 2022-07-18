import React from "react";

export const PlaysetSearchButton = React.forwardRef(
  ({ text1, text2, onClick, bool }, ref) => (
    <div style={styles.PlaysetSearchButton} onClick={onClick} ref={ref}>
      <p style={styles.text}>
        {text1}
        <br></br>
        {text2}
      </p>
    </div>
  )
);

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
    fontSize: "16px",
  },
};
