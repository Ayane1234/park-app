import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header style={styles.header}>
        <ArrowBackIcon style={styles.arrow} onClick={() => navigate("/Home")} />
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
    marginLeft: 10,
    marginRight: "auto",
    fontSize: "2em",
    backgroundColor: "white",
    borderRadius: "50%",
    padding: "10px",
  },
};
