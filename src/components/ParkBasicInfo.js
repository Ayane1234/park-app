import React from "react";

export const ParkBasicInfo = (props) => {
  console.log("ParkBasicInfoのprops:", props);
  return (
    <div style={styles.ParkBasicInfo}>
      <div style={styles.parkName}>{props.basicInfoData.name}</div>
      <div style={styles.address}>{props.basicInfoData.address}</div>
      <div style={styles.parkSize}>{props.basicInfoData.size}㎡</div>
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
