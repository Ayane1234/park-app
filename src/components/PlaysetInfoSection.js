import React from "react";
import { PlaysetTagDetail } from "./PlaysetTagDetail";
import { AgeTagBaby } from "./AgeTagBaby";
import { AgeTagChild } from "./AgeTagChild";

export const PlaysetInfoSection = () => {
  return (
    <div>
      <section style={styles.playsetWrapper}>
        <div style={styles.sectionTitle}>遊具</div>
        <div style={styles.playsetContents}>
          <PlaysetTagDetail playset={"ぶらんこ"} />
          <PlaysetTagDetail playset={"スプリング遊具"} />
          <PlaysetTagDetail playset={"ジャングルジム"} />
          <PlaysetTagDetail playset={"お砂場"} />
          <PlaysetTagDetail playset={"滑り台"} />
        </div>
        <section style={styles.ageWrapper}>
          <AgeTagBaby />
          <AgeTagChild />
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
