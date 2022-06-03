import React from "react";
import { AreaSearchButton } from "../components/AreaSearchButton";
import { Header } from "../components/Header";
import { Button } from "../components/Button";

export const Area = () => {
  return (
    <div style={styles.body}>
      <Header />
      {/* <section style={styles.section}> */}
      <AreaSearchButton text="大森地区" />
      <AreaSearchButton text="調布地区" />
      <AreaSearchButton text="蒲田・羽田地区" />
      {/* </section> */}

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
    // paddingTop: 70,
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
