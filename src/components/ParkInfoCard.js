import React from "react";
import { PlaysetTag } from "./PlaysetTag";
import { ParkSummaryInfo } from "./ParkSummaryInfo";

export const ParkInfoCard = ({ data, onClick, width }) => {
  return (
    <div
      style={width > 699 ? styles.cardWidth700 : styles.cardWidth699}
      onClick={onClick}
    >
      <div style={styles.parkContents}>
        <ParkSummaryInfo data={data} width={width} />

        <PlaysetTag data={data} />
      </div>
    </div>
  );
};

const styles = {
  cardWidth699: {
    width: "100%",
    height: "155px",
    backgroundColor: "white",
    borderRadius: "20px",
    marginBottom: "15px",
  },
  cardWidth700: {
    width: "300px",
    height: "155px",
    backgroundColor: "white",
    borderRadius: "20px",
    marginBottom: "15px",
  },

  parkContents: {
    padding: "15px",
  },
};
