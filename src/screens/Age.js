import React from "react";
import { Large } from "../components/Large";
import { Header } from "../components/Header";
import { Button } from "../components/Button";

export const Age = () => {
  return (
    <div style={styles.body}>
      <Header />
      <section style={styles.section}>
        <Large text="１−３歳" />
        <Large text="３−６歳" />
      </section>
      <Button />
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
  // sectionButton: {
  //   display: "flex",
  // },
};
