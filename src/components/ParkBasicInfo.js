import React from "react";

export const ParkBasicInfo = () => {
  return (
    <div style={styles.ParkBasicInfo}>
      <div style={styles.parkName}>東調布公園</div>
      <div style={styles.address}>東京都大田区南雪谷5-13-1</div>
      <div style={styles.parkSize}>25,229㎡</div>
    </div>
  );
};

const styles = {
  area: {
    fontSize: "13px",
    backgroundColor: "#e4af9b",
    borderRadius: "10px",
    textAlign: "center",
    padding: "1px",
    color: "white",
    width: "100%",
  },
  parkName: {
    fontSize: "28px",
  },
  address: {
    fontSize: "18px",
  },
  parkSize: {
    fontSize: "15px",
  },
};
