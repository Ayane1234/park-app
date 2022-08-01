import React from "react";
import { AreaTag } from "./AreaTag";

export const ParkSummaryInfo = ({ data }) => {
  return (
    <div>
      <div style={styles.parkSummaryInfo}>
        <div style={styles.park}>{data.name}</div>
        <AreaTag area={data.area} />
      </div>
      <div style={styles.address}>{data.address}</div>
    </div>
  );
};

const styles = {
  parkSummaryInfo: {
    display: "grid",
    gridTemplateColumns: "75% 25%",
  },

  park: {
    fontSize: "20px",
  },
  address: {
    fontSize: "15px",
  },
};
