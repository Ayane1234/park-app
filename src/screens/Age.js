import React, { useState } from "react";
import { AgeSearchButton } from "../components/AgeSearchButton";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export const Age = () => {
  // useNavigateの初期化
  const navigate = useNavigate();

  // useState(age)の初期化
  const [age, setAge] = useState([]);
  const [child, setChild] = useState([]);
  const [baby, setBaby] = useState([]);
  const [active, setActive] = useState(false);

  // 公園リストへのルーティングの設定
  const toParkList = () => {
    const ageFilter = baby.concat(child);
    setAge(ageFilter);
    navigate("/ParkList", {
      state: { dataFilter: age, screenName: "年齢絞り込み" },
    });
  };

  const isTrue = () => {
    setActive(!active);
  };

  // console.log("age:", age);
  const array = [];

  // babyボタン
  const babyButttonClick = () => {
    if (!baby.length) {
      const babyFilter = [...array, "baby"];
      setBaby(babyFilter);
    } else {
      const noneBabyFilter = baby.filter((babyFilter) => babyFilter !== "baby");
      setBaby(noneBabyFilter);
    }
    //   //判定できるもの？propsに渡す？押したよってtrueまたはfalseを渡して、
    //   //ボタンでスタイルを判定
  };
  console.log("age:", age);
  console.log("baby:", baby);
  console.log("child:", child);

  const childButttonClick = () => {
    if (!child.length) {
      const childFilter = [...array, "child"];
      setChild(childFilter);
    } else {
      const noneChildFilter = child.filter(
        (childFilter) => childFilter !== "child"
      );
      setChild(noneChildFilter);
    }
  };
  // console.log("age:", age);
  return (
    <div style={styles.body}>
      <Header />

      <AgeSearchButton
        text="１−３歳"
        onClick={() => {
          babyButttonClick();
        }}
      />
      <AgeSearchButton
        text="３−６歳"
        onClick={() => {
          childButttonClick();
        }}
      />

      <Button
        style={styles.button}
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
