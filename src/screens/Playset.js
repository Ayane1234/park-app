import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PlaysetSearchButton } from "../components/PlaysetSearchButton";
import { Header } from "../components/Header";
import { SearchButton } from "../components/SearchButton";
import { ConstructionOutlined } from "@mui/icons-material";

export const Playset = () => {
  const [playset, setPlayset] = useState([]);
  const navigate = useNavigate();
  const ref = useRef([]);

  const playsetData = [
    "お砂場",
    "ぶらんこ",
    "滑り台",
    "スプリング遊具",
    "鉄棒",
    "ローラースライダー",
    "ジャングルジム",
    "ロープウェイ",
  ];
  playsetData.forEach((text, index) => {
    ref.current[index] = React.createRef();
  });

  const toParkList = () => {
    navigate("/ParkList", {
      state: { dataFilter: playset, screenName: "遊具絞り込み" },
    });
  };

  useEffect(() => {}, [playset]);
  console.log("playset:", playset);

  const onClick = (index) => {
    const array = playset;
    const element = ref.current;
    // console.log("element:", element[index].current.style);

    const playsetText = element[index].current.textContent;
    const newPlayset = playsetText;

    // console.log("newPlayset:", newPlayset);

    if (playset.includes(newPlayset)) {
      const nonThisPlayset = playset.filter((data) => data !== newPlayset);
      setPlayset(nonThisPlayset);
      element[index].current.style.backgroundColor = "white";
      element[index].current.style.color = "black";
    } else {
      const playsetFilter = [...array, newPlayset];
      setPlayset(playsetFilter);
      element[index].current.style.backgroundColor = "#e4af9b";
      element[index].current.style.color = "white";
    }
  };

  return (
    <div style={styles.body}>
      <Header />
      <section style={styles.section}>
        {playsetData.map((text, index) => {
          return (
            <PlaysetSearchButton
              key={text}
              ref={ref.current[index]}
              text1={text}
              onClick={() => onClick(index)}
            />
          );
        })}

        {/* <PlaysetSearchButton
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
        <PlaysetSearchButton text1="ロープ" text2="ウェイ" /> */}
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
