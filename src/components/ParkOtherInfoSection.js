import React from "react";

export const ParkOtherInfoSection = () => {
  return (
    <section>
      <div style={styles.sectionTitle}>その他情報</div>
      <div style={styles.other}>徒歩圏内に公営プールあり</div>
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
