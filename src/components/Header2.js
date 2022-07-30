import React from "react";
import { Arrow } from "./Arrow";
import { HomeIcon } from "./HomeIcon";

export const Header2 = () => {
  return (
    <div>
      <header style={styles.header2}>
        <Arrow />

        <HomeIcon />
      </header>
    </div>
  );
};

const styles = {
  header2: {
    backgroundColor: "gray",
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    height: "60px",
  },
};
