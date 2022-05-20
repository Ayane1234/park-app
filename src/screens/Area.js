import React from "react";
import { Large } from "../components/Large";
import { Header } from "../components/Header";
import { Button } from "../components/Button";

export const Area = () => {
  return (
    <div style={styles.body}>
      <Header />
      <section style={styles.section}>
        <Large text="大森地区" />
        <Large text="調布地区" />
        <Large text="蒲田・羽田地区" />
      </section>

      <Button style={styles.button} />
    </div>
  );
};

const styles = {
  body: {
    width: "100vw",
    height: "100vh",
    position: "relative",
    backgroundColor: "#f3eed5",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  section: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
