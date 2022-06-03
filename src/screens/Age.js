import React from "react";
import { AgeSearchButton } from "../components/AgeSearchButton";
import { Header } from "../components/Header";
import { Button } from "../components/Button";

export const Age = () => {
  return (
    <div style={styles.body}>
      <Header />
      {/* <section style={styles.section}> */}
      <AgeSearchButton text="１−３歳" />
      <AgeSearchButton text="３−６歳" />
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
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
