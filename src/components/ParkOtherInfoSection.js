import React from "react";

export const ParkOtherInfoSection = ({ other }) => {
  return (
    <section>
      <div style={styles.sectionTitle}>その他情報</div>
      <div style={styles.other}>{other}</div>
    </section>
  );
};
const styles = {
  other: {
    padding: 0,
  },
  sectionTitle: {
    fontSize: "20px",
  },
};
