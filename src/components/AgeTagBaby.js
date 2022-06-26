import React from "react";
import BabyGrayIcon from "../img/baby_gray.svg";
import BabyPinkIcon from "../img/baby_pink.svg";

export const AgeTagBaby = (props) => {
  console.log("AgeTagBabyのprops:", props);
  const babyTrue = props.data.baby;

  return (
    <div style={styles.ageWrapper}>
      <img
        src={babyTrue ? BabyPinkIcon : BabyGrayIcon}
        alt="赤ちゃん"
        style={styles.icon}
      />
      <p style={babyTrue ? styles.ageTrue : styles.ageFalse}>１ー３歳向け</p>
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
