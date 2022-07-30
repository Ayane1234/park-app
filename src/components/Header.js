import React from "react";

import { Arrow } from "./Arrow";

export const Header = () => {
  return (
    <div>
      <header style={styles.header}>
        <Arrow />
      </header>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    position: "fixed",
    left: 0,
    top: 0,
    width: "100vw",
    height: 60,
  },
};
