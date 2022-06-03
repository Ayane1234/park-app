import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export const Arrow = () => {
  const navigate = useNavigate();
  return <ArrowBackIcon style={styles.arrow} onClick={() => navigate(-1)} />;
};

const styles = {
  arrow: {
    marginLeft: 20,
    marginTop: 10,
    marginRight: "auto",
    fontSize: "2em",
    backgroundColor: "white",
    borderRadius: "50%",
    padding: "10px",
  },
};
