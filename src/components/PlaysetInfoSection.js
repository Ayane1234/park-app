import React from "react";
import { PlaysetTagDetail } from "./PlaysetTagDetail";
import { AgeTagBaby } from "./AgeTagBaby";
import { AgeTagChild } from "./AgeTagChild";

export const PlaysetInfoSection = (props) => {
  console.log("PlaysetInfoSectionのprops:", props);
  return (
    <div>
      <section style={styles.playsetWrapper}>
        <div style={styles.sectionTitle}>遊具</div>
        <div style={styles.playsetContents}>
          {props.data.playset.map((playset, id) => {
            return <PlaysetTagDetail playset={playset} key={id} />;
          })}
        </div>
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
  playsetContents: {
    display: "flex",
    flexWrap: "wrap",
  },
  sectionTitle: {
    fontSize: "20px",
  },
  ageWrapper: {
    display: "grid",
    gridTemplateColumns: "50% 50%",
  },
};
