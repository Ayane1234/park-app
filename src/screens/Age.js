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
    navigate("/ParkList", { state: { age: "baby" } });
  };
  // よくわかんないけど、子どもか赤ちゃんかを渡して、遷移先で赤ちゃんを取ったらbabyFilterをtrueにする？
  // babyボタン
  const babyButttonClick = () => {
    setAge();
  };
  const childButttonClick = () => {
    setAge();
  };
  return (
    <div style={styles.body}>
      <Header />

      <AgeSearchButton text="１−３歳" />
      <AgeSearchButton text="３−６歳" />

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
