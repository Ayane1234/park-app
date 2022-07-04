import React, { useState } from "react";
import { AreaSearchButton } from "../components/AreaSearchButton";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export const Area = () => {
  //useStateの初期化
  const [area, setArea] = useState("");
  console.log("area:", area);

  // useNavigateの初期化
  const navigate = useNavigate();

  // 公園リストへのルーティングを設定
  // useState(area)を"/ParkList"へ渡す
  const toParkList = () => {
    navigate("/ParkList", { state: area });
  };

  // 大森ボタン
  const omoriButtonClick = () => {
    setArea("大森");
  };

  // 調布ボタン
  const chofuButtonClick = () => {
    setArea("調布");
  };

  // 蒲田・羽田ボタン
  const kamataButtonClick = () => {
    setArea("蒲田・羽田");
  };

  return (
    <div style={styles.body}>
      <Header />

      <AreaSearchButton text="大森地区" onClick={() => omoriButtonClick()} />
      <AreaSearchButton text="調布地区" onClick={() => chofuButtonClick()} />
      <AreaSearchButton
        text="蒲田・羽田地区"
        onClick={() => kamataButtonClick()}
      />

      <Button
        style={styles.button}
        onClick={() => {
          toParkList(area);
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
