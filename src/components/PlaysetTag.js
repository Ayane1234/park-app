import React from "react";

export const PlaysetTag = (props) => {
  console.log("PlaysetTagのprops:", props);
  return (
    <div style={styles.playsetSection}>
      {props.data.playset.map((playitem, index) => {
        return (
          <p style={styles.playset} key={index}>
            {playitem}
          </p>
        );
      })}
    </div>
  );
};

const styles = {
  playset: {
    display: "block",
    padding: "1px 10px 1px 10px",
    textAlign: "center",
    backgroundColor: "#CCB5A5",
    margin: "2px 5px 1px 0px",
    borderRadius: "30px",
    color: "white",
    fontSize: "15px",
  },
  playsetSection: {
    display: "flex",
    flexWrap: "wrap",
  },
};
