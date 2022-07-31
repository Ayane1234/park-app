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
    // marginLeft: 260,
    // marginTop: 10,
    marginRight: "5%",
    fontSize: "30px",
    backgroundColor: "white",
    borderRadius: "50%",
    padding: "10px",
    color: "#CCB5A5",
  },
};
