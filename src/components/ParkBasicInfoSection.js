import React from "react";
import { ParkBasicInfo } from "./ParkBasicInfo";
import { AreaTag } from "./AreaTag";

export const ParkBasicInfoSection = (props) => {
  console.log("ParkBasicInfoのprops:", props);
  return (
    <section style={styles.ParkBasicInfoSection}>
      <ParkBasicInfo basicInfoData={props.data} />
      <AreaTag area={props.data.area} />
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
