import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useNavigate } from "react-router-dom";

export const Header2 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header style={styles.header2}>
        <ArrowBackIcon style={styles.arrow} onClick={() => navigate(-1)} />

        <HomeRoundedIcon
          style={styles.home}
          onClick={() => navigate("/Home")}
        />
      </header>
    </div>
  );
};

const styles = {
  header2: {
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    position: "fixed",
    left: 0,
    top: 0,
    width: "100vw",
    height: 60,
  },
  arrow: {
    marginLeft: 20,
    marginRight: "auto",
    fontSize: "2em",
    backgroundColor: "white",
    borderRadius: "50%",
    padding: "10px",
  },

  home: {
    fontSize: "2em",
    padding: "10px",
    marginLeft: "auto",
    marginRight: 20,
    color: "#CCB5A5",
  },
};
