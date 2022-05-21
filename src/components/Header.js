import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const Header = () => {
  return (
    <div>
      <header style={styles.header}>
        <ArrowBackIcon style={styles.arrow} />
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
    height: "10%",
  },
  arrow: {
    margin: "5px",
    fontSize: 40,
  },
};
