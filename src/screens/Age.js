import React, { useEffect, useState } from "react";
import { AgeFilterButton } from "../components/AgeFilterButton";
import { Header } from "../components/Header";
import { SearchButton } from "../components/SearchButton";
import { useNavigate } from "react-router-dom";

export const Age = () => {
  // useNavigateの初期化
  const navigate = useNavigate();

  // useState(age)の初期化
  const [age, setAge] = useState([]);
  const [child, setChild] = useState([]);
  const [baby, setBaby] = useState([]);
  const [isBabyFilterActive, setIsBabyFilterActive] = useState(false);
  const [isChildFilterActive, setIsChildFilterActive] = useState(false);

  const array = [];

  // useEffect
  useEffect(() => {
    const ageFilter = baby.concat(child);
    setAge(ageFilter);
  }, [baby, child]);

  // 公園リストへのルーティングの設定
  const toParkList = () => {
    navigate("/ParkList", {
      state: { dataFilter: age, screenName: "年齢絞り込み" },
    });
  };
  // console.log("age:", age);
  // console.log("baby:", baby);
  // console.log("child:", child);

  // babyボタン
  const babyButttonClick = () => {
    if (!baby.length) {
      const babyFilter = [...array, "baby"];
      setBaby(babyFilter);
      setIsBabyFilterActive(true);
    } else {
      const noneBabyFilter = baby.filter((babyFilter) => babyFilter !== "baby");
      setBaby(noneBabyFilter);
      setIsBabyFilterActive(false);
    }
    //   //判定できるもの？propsに渡す？押したよってtrueまたはfalseを渡して、
    //   //ボタンでスタイルを判定
  };

  const childButttonClick = () => {
    if (!child.length) {
      const childFilter = [...array, "child"];
      setChild(childFilter);
      setIsChildFilterActive(true);
    } else {
      const noneChildFilter = child.filter(
        (childFilter) => childFilter !== "child"
      );
      setChild(noneChildFilter);
      setIsChildFilterActive(false);
    }
  };

  return (
    <div style={styles.body}>
      <Header />

      <AgeFilterButton
        text="１−３歳"
        onClick={() => {
          babyButttonClick();
        }}
        bool={isBabyFilterActive}
      />
      <AgeFilterButton
        text="３−６歳"
        onClick={() => {
          childButttonClick();
        }}
        bool={isChildFilterActive}
      />

      <SearchButton
        onClick={() => {
          toParkList();
        }}
      />
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
  },
  section: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
