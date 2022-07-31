import React from "react";
import { Arrow } from "./Arrow";
import { HomeIcon } from "./HomeIcon";

export const Header = () => {
  return (
    <div>
      <div style={styles.header2}>
        <div style={styles.headerWrapper}>
          <Arrow />

          <HomeIcon />
        </div>
      </div>
    </div>
  );
};

const styles = {
  header2: {
    backgroundColor: "white",
    flexWrap: "wrap",
    position: "fixed",
    left: 0,
    top: 0,
    width: "100vw",
    height: "60px",
    // outline: "2px solid blue",
    zIndex: "1",
  },
  headerWrapper: {
    paddingTop: 5,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};
