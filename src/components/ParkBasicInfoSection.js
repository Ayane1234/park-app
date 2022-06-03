import React from "react";
import { ParkBasicInfo } from "./ParkBasicInfo";
import { AreaTagDetail } from "./AreaTagDetail";
export const ParkBasicInfoSection = () => {
  return (
    <section style={styles.ParkBasicInfoSection}>
      <ParkBasicInfo />

      <AreaTagDetail />
    </section>
  );
};

const styles = {
  ParkBasicInfoSection: {
    display: "grid",
    gridTemplateColumns: "78% 22%",
    paddingBottom: "10px",
    borderColor: "#CCB5A5",
    borderBottomStyle: "solid",
    borderWidth: "thin",
  },
};
