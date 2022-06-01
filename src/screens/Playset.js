import React from "react";
import { Small } from "../components/Small";
import { Header } from "../components/Header";
import { Button } from "../components/Button";

export const Search = () => {
  return (
    <div style={styles.body}>
      <Header />
      <section style={styles.section}>
        <Small text1="お砂場" />
        <Small text1="ぶらんこ" />
      </section>
      <section style={styles.section}>
        <Small text1="滑り台" />
        <Small text1="スプリング" text2="遊具" />
      </section>
      <section style={styles.section}>
        <Small text1="鉄棒" />
        <Small text1="ローラー" text2="スライダー" />
      </section>
      <section style={styles.section}>
        <Small text1="ジャングル" text2="ジム" />
        <Small text1="ロープ" text2="ウェイ" />
      </section>
<<<<<<< HEAD

=======
>>>>>>> feature/ParkList-components
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
    justifyContent: "center",
  },
};
