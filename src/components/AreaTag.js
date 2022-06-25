import React from "react";

export const AreaTag = (props) => {
  return (
    <div style={styles.areaContent}>
      <div style={styles.area}>{props.area}</div>
    </div>
  );
};

const styles = {
  area: {
    fontSize: "13px",
    backgroundColor: "#e4af9b",
    borderRadius: "10px",
    textAlign: "center",
    padding: "2px",
    color: "white",
    width: "100%",
  },
  areaContent: {
    // width: "75%",
    height: "50%",
    // marginLeft: "auto",
  },
};
