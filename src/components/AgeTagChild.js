import React from "react";
import ChildFalse from "../img/child_false.svg";
import ChildTrue from "../img/child_true.svg";

export const AgeTagChild = (props) => {
  const childTrue = props.data.child;
  if (childTrue === true) {
    return (
      <div style={styles.ageContents}>
        <img src={ChildTrue} alt="子ども" style={styles.icon} />
        <p style={styles.ageTrue}>３ー６歳向け</p>
      </div>
    );
  } else {
    return (
      <div style={styles.ageContents}>
        <img src={ChildFalse} alt="子ども" style={styles.icon} />
        <p style={styles.ageFalse}>３ー６歳向け</p>
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
  },
  ageTrue: {
    fontSize: "13px",
  },
  ageFalse: {
    fontSize: "13px",
    color: "rgb(180, 180, 180)",
  },
};
