import React from "react";
import { PlaysetTag } from "./PlaysetTag";
import { ParkSummaryInfo } from "./ParkSummaryInfo";

export const ParkInfoCard = ({ data, onClick }) => {
  return (
    <div style={styles.card} onClick={onClick}>
      <div style={styles.parkContents}>
        <ParkSummaryInfo data={data} />

        <PlaysetTag data={data} />
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: "100%",
    height: "155px",
    backgroundColor: "white",
    borderRadius: "20px",
    marginBottom: "15px",
  },

  parkContents: {
    padding: "15px",
  },
};
