import React, { useEffect, useState } from "react";
import { AreaSearchButton } from "../components/AreaSearchButton";
import { Header } from "../components/Header";
import { SearchButton } from "../components/SearchButton";
import { useNavigate } from "react-router-dom";

export const Area = () => {
  //useStateの初期化
  const [area, setArea] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [isOmoriActive, setIsOmoriActive] = useState(false);
  const [isChofuActive, setIsChofuActive] = useState(false);
  const [isHanedaActive, setIsHanedaActive] = useState(false);

  // useNavigateの初期化
  const navigate = useNavigate();

  // 公園リストへのルーティングを設定
  // useState(area)を"/ParkList"へ渡す
  const toParkList = () => {
    if (area === "") {
      return;
    } else {
      navigate("/ParkList", {
        state: { dataFilter: area, screenName: "地域絞り込み" },
      });
    }
  };

  useEffect(() => {
    if (area === "") {
      setIsSearch(false);
    } else {
      setIsSearch(true);
    }
  }, [area]);
  // 大森ボタン
  const omoriButtonClick = () => {
    setArea("大森");
    setIsOmoriActive(true);
    setIsChofuActive(false);
    setIsHanedaActive(false);
  };

  // 調布ボタン
  const chofuButtonClick = () => {
    setArea("調布");
    setIsOmoriActive(false);
    setIsChofuActive(true);
    setIsHanedaActive(false);
  };

  // 蒲田・羽田ボタン
  const kamataButtonClick = () => {
    setArea("蒲田・羽田");
    setIsOmoriActive(false);
    setIsChofuActive(false);
    setIsHanedaActive(true);
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

      <SearchButton
        style={styles.button}
        isSearch={isSearch}
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
