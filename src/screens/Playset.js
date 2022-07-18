import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PlaysetSearchButton } from "../components/PlaysetSearchButton";
import { Header } from "../components/Header";
import { SearchButton } from "../components/SearchButton";

export const Playset = () => {
  const [playset, setPlayset] = useState([]);
  const navigate = useNavigate();
  const ref = useRef(null);

  const toParkList = () => {
    navigate("/ParkList", {
      state: { dataFilter: playset, screenName: "遊具絞り込み" },
    });
  };

  const array = [];
  const onClick = () => {
    const el = ref.current;
    const playsetText = el.textContent;
    const playsetFilter = [...array, playsetText];
    setPlayset(playsetFilter);

    console.log("el:", el.textContent);
    console.log("playsetFilter:", playsetFilter);
    if (playsetFilter.includes(playsetText)) {
      playsetFilter.filter((playset) => playset !== playsetText);
    } else {
      playsetFilter = [...array, playsetText];
    }
    // const text =
  };
  console.log("playset:", playset);
  return (
    <div style={styles.body}>
      <Header />
      <section style={styles.section}>
        <PlaysetSearchButton
          text1="お砂場"
          onClick={() => onClick()}
          ref={ref}
        />
        <PlaysetSearchButton
          text1="ぶらんこ"
          onClick={() => onClick()}
          ref={ref}
        />

        <PlaysetSearchButton text1="滑り台" />
        <PlaysetSearchButton text1="スプリング" text2="遊具" />

        <PlaysetSearchButton text1="鉄棒" />
        <PlaysetSearchButton text1="ローラー" text2="スライダー" />

        <PlaysetSearchButton text1="ジャングル" text2="ジム" />
        <PlaysetSearchButton text1="ロープ" text2="ウェイ" />
      </section>

      <SearchButton onClick={() => toParkList()} />
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
