import React from "react";

export const AreaTag = ({ area }) => {
  return (
    <div style={styles.areaWrapper}>
      <div style={styles.area}>{area}</div>
    </div>
  );
};

const styles = {
  areaWrapper: {
    height: "50%",
  },
  area: {
    fontSize: "13px",
    backgroundColor: "#e4af9b",
    borderRadius: "10px",
    textAlign: "center",
    padding: "2px",
    color: "white",
    width: "100%",
  },
};
