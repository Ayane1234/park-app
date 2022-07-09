import React, { useState } from "react";
import { AgeSearchButton } from "../components/AgeSearchButton";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export const Age = () => {
  // useNavigateの初期化
  const navigate = useNavigate();

  // useState(age)の初期化
  const [age, setAge] = useState();

  // 公園リストへのルーティングの設定
  const toParkList = () => {
    navigate("/ParkList", {
      state: { dataFilter: age, screenName: "年齢絞り込み" },
    });
  };

  // babyボタン
  const babyButttonClick = () => {
    setAge("baby");
    //判定できるもの？propsに渡す？押したよってtrueまたはfalseを渡して、
    //ボタンでスタイルを判定
  };
  const childButttonClick = () => {
    setAge("child");
  };
  console.log("age:", age);
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
