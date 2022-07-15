import React from "react";
import { PlaysetSearchButton } from "../components/PlaysetSearchButton";
import { Header } from "../components/Header";
import { SearchButton } from "../components/SearchButton";

export const Playset = () => {
  return (
    <div style={styles.body}>
      <Header />
      <section style={styles.section}>
        <PlaysetSearchButton text1="お砂場" />
        <PlaysetSearchButton text1="ぶらんこ" />

        <PlaysetSearchButton text1="滑り台" />
        <PlaysetSearchButton text1="スプリング" text2="遊具" />

        <PlaysetSearchButton text1="鉄棒" />
        <PlaysetSearchButton text1="ローラー" text2="スライダー" />

        <PlaysetSearchButton text1="ジャングル" text2="ジム" />
        <PlaysetSearchButton text1="ロープ" text2="ウェイ" />
      </section>

      <SearchButton />
    </div>
  );
};

const styles = {
  body: {
    paddingTop: 70,
    width: "100vw",
    height: "100vh",
    position: "relative",
    backgroundColor: "#f3eed5",
    display: "flex",
    justifyContent: "center",
  },
  section: {
    width: "75%",
    height: "75%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};
