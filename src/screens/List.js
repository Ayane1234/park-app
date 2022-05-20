import React from "react";

export const List = () => {
  return (
    <div style={styles.body}>
      <section style={styles.section}>
        <div style={styles.card}>
          <p>東調布公園</p>
          <p>大田区南雪谷５丁目１３−１</p>
          <p>調布</p>
          <ul>
            <li>ぶらんこ</li>
            <li>滑り台</li>
            <li>スプリング遊具</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

const styles = {
  body: {
    width: "100vw",
    height: "100vh",
    position: "relative",
    backgroundColor: "#f3eed5",
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    // paddingTop: 30,
  },
  card: {
    width: "80%",
    height: "30%",
    backgroundColor: "white",
  },
  section: {
    width: "100%",
    height: "95%",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
  },
};
