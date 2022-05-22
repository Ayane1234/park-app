import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useNavigate } from "react-router-dom";

export const ParkDetail = () => {
  const navigate = useNavigate();
  return (
    <div style={styles.body}>
      <section style={styles.section}>
        <ArrowBackIcon style={styles.arrow} onClick={() => navigate(-1)} />
        <HomeRoundedIcon style={styles.home} onClick={() => navigate()} />
      </section>
    </div>
  );
};

const styles = {
  body: {
    width: "100vw",
    height: "100vh",
    position: "relative",
    backgroundColor: "#f3eed5",
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    // paddingTop: 100,
  },

  section: {
    display: "flex",
    padding: "10px",
  },
  arrow: {
    backgroundColor: "white",
    fontSize: "2em",
    borderRadius: "50%",
    padding: "10px",
    // margin: "10px",
  },
  home: {
    backgroundColor: "white",
    fontSize: "2em",
    borderRadius: "50%",
    padding: "10px",
    marginLeft: "auto",
    marginRight: 10,
    color: "#CCB5A5",
  },
};
