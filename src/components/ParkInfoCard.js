import React from "react";
import { PlaysetTag } from "./PlaysetTag";
import { ParkSummaryInfo } from "./ParkSummaryInfo";

export const ParkInfoCard = (props) => {
  return (
    <div style={styles.card} onClick={props.onClick}>
      <div style={styles.parkContents}>
        <ParkSummaryInfo data={props.data} />

        <PlaysetTag data={props.data} />
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
