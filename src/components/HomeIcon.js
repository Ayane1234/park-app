import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useNavigate } from "react-router-dom";

export const HomeIcon = () => {
  const navigate = useNavigate();
  return (
    <HomeRoundedIcon style={styles.home} onClick={() => navigate("/Home")} />
  );
};

const styles = {
  home: {
    fontSize: "40px",
    padding: "5px",
    marginLeft: "auto",
    marginRight: 10,
    marginTop: 10,
    color: "#CCB5A5",
    backgroundColor: "white",
    borderRadius: "50%",
  },
};
