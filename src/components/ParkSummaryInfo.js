import React from "react";
import { AreaTag } from "./AreaTag";

export const ParkSummaryInfo = (props) => {
  // console.log("ParkSummaryInfoのprops:", props);
  return (
    <div>
      <div style={styles.parkSummaryInfo}>
        <div style={styles.park}>{props.data.park}</div>
        <AreaTag area={props.data.area} />
      </div>
      <div style={styles.address}>{props.data.address}</div>
    </div>
  );
};

const styles = {
  parkSummaryInfo: {
    display: "grid",
    gridTemplateColumns: "78% 22%",
  },

  park: {
    fontSize: "20px",
  },
  address: {
    fontSize: "15px",
  },
};
