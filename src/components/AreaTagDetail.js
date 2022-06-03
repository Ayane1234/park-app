import React from "react";

export const AreaTagDetail = () => {
  return (
    <div style={styles.areaWrapper}>
      <div style={styles.area}>調布</div>
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
    padding: "1px",
    color: "white",
    width: "100%",
  },
};
