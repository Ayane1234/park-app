import React from "react";
import { Arrow } from "./Arrow";
import { HomeIcon } from "./HomeIcon";

export const ParkDetailsHeader = () => {
  return (
    <div>
      <header style={styles.ParkDetailsHeader}>
        <Arrow />

        <HomeIcon />
      </header>
    </div>
  );
};

const styles = {
  ParkDetailsHeader: {
    display: "flex",
    alignItems: "center",
    position: "fixed",
    left: 0,
    top: 0,
    width: "100vw",
    height: 60,
  },
};
