import React from "react";
import ChildGrayIcon from "../img/child_gray.svg";
import ChildPinkIcon from "../img/child_pink.svg";

export const AgeTagChild = ({ data }) => {
  const childTrue = data.child;
  return (
    <div style={styles.ageWrapper}>
      <img
        src={childTrue ? ChildPinkIcon : ChildGrayIcon}
        alt="子ども"
        style={styles.icon}
      />
      <p style={childTrue ? styles.ageTrue : styles.ageFalse}>３ー６歳向け</p>
    </div>
  );
};

const styles = {
  ageWrapper: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    width: "25px",
    height: "auto",
  },
  ageTrue: {
    fontSize: "13px",
  },
  ageFalse: {
    fontSize: "13px",
    color: "rgb(180, 180, 180)",
  },
};
