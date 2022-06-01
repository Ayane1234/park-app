import React from "react";

import { PlaysetTag } from "./PlaysetTag";
import { ParkSummaryInfo } from "./ParkSummaryInfo";

export const ParkInfoCard = (props) => {
  console.log("props:", props);
  return (
    <div style={styles.card} onClick={props.onClick}>
      <div style={styles.parkContents}>
        <ParkSummaryInfo data={props} />

        <PlaysetTag data={props} />
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: "100%",
    height: "25%",
    backgroundColor: "white",
    borderRadius: "10px",
    marginBottom: "15px",
  },

  parkContents: {
    padding: "15px",
  },

  // address: {
  //   fontSize: "1em",
  // },
};
