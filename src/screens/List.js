import React from "react";
import { Link } from "react-router-dom";
import { Header2 } from "../components/Header2";

export const List = () => {
  return (
    <div style={styles.body}>
      <Header2 />
      <Link to="/ParkDetail">
        <section style={styles.section}>
          <div style={styles.card}>
            <p>東調布公園</p>
            <p>大田区南雪谷５丁目１３−１</p>
            <p>調布</p>
            <ul style={styles.ul}>
              <li style={styles.li}>ぶらんこ</li>
              <li style={styles.li}>滑り台</li>
              <li style={styles.li}>スプリング遊具</li>
            </ul>
          </div>
        </section>
      </Link>
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
    paddingTop: 100,
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
  li: {
    backgroundColor: "#CCB5A5",
    margin: "0 30px",
    listStyle: "none",
    borderRadius: "30px",
  },
  ul: {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
};
