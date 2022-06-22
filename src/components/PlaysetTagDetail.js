import React from "react";

export const PlaysetTagDetail = (props) => {
  console.log("PlaysetTagDetailのprops:", props);
  return (
    <div>
      <p style={styles.playset}>{props.playset}</p>
    </div>
  );
};

const styles = {
  playset: {
    display: "block",
    padding: "1px 10px 1px 10px",
    textAlign: "center",
    backgroundColor: "#CCB5A5",
    margin: "2px 5px 1px 0px",
    borderRadius: "30px",
    color: "white",
    fontSize: "13px",
  },
};
