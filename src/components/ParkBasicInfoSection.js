import React from "react";
import { ParkBasicInfo } from "./ParkBasicInfo";
import { AreaTag } from "./AreaTag";

export const ParkBasicInfoSection = ({ data }) => {
  return (
    <section style={styles.ParkBasicInfoSection}>
      <ParkBasicInfo basicInfoData={data} />
      <AreaTag area={data.area} />
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
