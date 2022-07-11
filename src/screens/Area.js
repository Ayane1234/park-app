import React, { useEffect, useState } from "react";
import { AreaSearchButton } from "../components/AreaSearchButton";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export const Area = () => {
  //useStateの初期化
  const [area, setArea] = useState("");
  const [isOmoriActive, setIsOmoriActive] = useState(false);
  const [isChofuActive, setIsChofuActive] = useState(false);
  const [isHanedaActive, setIsHanedaActive] = useState(false);

  // useNavigateの初期化
  const navigate = useNavigate();

  // 公園リストへのルーティングを設定
  // useState(area)を"/ParkList"へ渡す
  const toParkList = () => {
    navigate("/ParkList", {
      state: { dataFilter: area, screenName: "地域絞り込み" },
    });
  };
  console.log("area:", area);
  console.log("isOmoriActive:", isOmoriActive);
  console.log("isChofuActive:", isChofuActive);
  console.log("isHanedaActive:", isHanedaActive);

  // console.log("omoriActive:", isOmoriActive);
  // 大森ボタン
  const omoriButtonClick = () => {
    setArea("大森");
    if (
      isOmoriActive === false &&
      isChofuActive === false &&
      isHanedaActive === false
    ) {
      setIsOmoriActive(true);
      setIsChofuActive(false);
      setIsHanedaActive(false);
    } else if (isChofuActive || isHanedaActive === true) {
      setIsOmoriActive(true);
      setIsChofuActive(false);
      setIsHanedaActive(false);
    }
  };

  // 調布ボタン
  const chofuButtonClick = () => {
    setArea("調布");
    if (
      isOmoriActive === false &&
      isChofuActive === false &&
      isHanedaActive === false
    ) {
      setIsOmoriActive(false);
      setIsChofuActive(true);
      setIsHanedaActive(false);
    } else if (isOmoriActive || isHanedaActive === true) {
      setIsOmoriActive(false);
      setIsChofuActive(true);
      setIsHanedaActive(false);
    }
  };

  // 蒲田・羽田ボタン
  const kamataButtonClick = () => {
    setArea("蒲田・羽田");
    if (
      isOmoriActive === false &&
      isChofuActive === false &&
      isHanedaActive === false
    ) {
      setIsOmoriActive(false);
      setIsChofuActive(false);
      setIsHanedaActive(true);
    } else if (isOmoriActive || isChofuActive === true) {
      setIsOmoriActive(false);
      setIsChofuActive(false);
      setIsHanedaActive(true);
    }
  };

  return (
    <div style={styles.body}>
      <Header />

      <AreaSearchButton
        text="大森地区"
        onClick={() => omoriButtonClick()}
        bool={isOmoriActive}
      />
      <AreaSearchButton
        text="調布地区"
        onClick={() => chofuButtonClick()}
        bool={isChofuActive}
      />
      <AreaSearchButton
        text="蒲田・羽田地区"
        onClick={() => kamataButtonClick()}
        bool={isHanedaActive}
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
