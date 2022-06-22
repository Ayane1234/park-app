import React from "react";
import BabyFalse from "../img/baby_false.svg";
import BabyTrue from "../img/baby_true.svg";

export const AgeTagBaby = (props) => {
  console.log("AgeTagBabyのprops:", props);
  const babyTrue = props.data.baby;
  if (babyTrue === true) {
    return (
      <div style={styles.ageContents}>
        <img src={BabyTrue} alt="赤ちゃん" style={styles.icon} />
        <p style={styles.ageTrue}>１ー３歳向け</p>
      </div>
    );
  } else {
    return (
      <div style={styles.ageContents}>
        <img src={BabyFalse} alt="赤ちゃん" style={styles.icon} />
        <p style={styles.ageFalse}>１ー３歳向け</p>
      </div>
    );
  }
};

const styles = {
  ageContents: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    width: "25px",
    height: "auto",
    // color: "black",
  },
  ageTrue: {
    fontSize: "13px",
    // color: "#E4AF9B",

    // color: "gray",
  },
  ageFalse: {
    fontSize: "13px",
    color: "rgb(180, 180, 180)",
  },
};
