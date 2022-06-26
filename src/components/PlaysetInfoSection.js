import React from "react";
import { PlaysetTag } from "./PlaysetTag";
import { AgeTagBaby } from "./AgeTagBaby";
import { AgeTagChild } from "./AgeTagChild";

export const PlaysetInfoSection = (props) => {
  console.log("PlaysetInfoSectionのprops:", props);
  return (
    <div>
      <section style={styles.playsetWrapper}>
        <div style={styles.sectionTitle}>遊具</div>
        <PlaysetTag data={props.data} />

        <section style={styles.ageWrapper}>
          <AgeTagBaby data={props.data} />
          <AgeTagChild data={props.data} />
        </section>
      </section>
    </div>
  );
};

const styles = {
  playsetWrapper: {
    borderBottomStyle: "solid",
    borderWidth: "thin",
    paddingBottom: "10px",
    borderColor: "#CCB5A5",
  },
  sectionTitle: {
    fontSize: "20px",
  },
  ageWrapper: {
    display: "grid",
    gridTemplateColumns: "50% 50%",
  },
};
