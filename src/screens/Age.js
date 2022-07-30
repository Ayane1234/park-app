import React, { useEffect, useState } from "react";
import { AgeFilterButton } from "../components/AgeFilterButton";
import { Header2 } from "../components/Header2";
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
  const [isSearch, setIsSearch] = useState(false);

  const array = [];

  // useEffect
  useEffect(() => {
    const ageFilter = baby.concat(child);
    setAge(ageFilter);
  }, [baby, child]);

  // 公園リストへのルーティングの設定
  const toParkList = () => {
    if (!age.length) {
      return;
    } else {
      navigate("/ParkList", {
        state: { dataFilter: age, screenName: "年齢絞り込み" },
      });
    }
  };

  useEffect(() => {
    if (age.length > 0) {
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
  }, [age]);

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
      <Header2 />

      <div style={styles.wrapper}>
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
          isSearch={isSearch}
          onClick={() => {
            toParkList();
          }}
        />
      </div>
    </div>
  );
};

const styles = {
  body: {
    width: "100vw",
    height: "100vh",
    position: "relative",
    backgroundColor: "#f3eed5",
    top: 50,
  },
  wrapper: {
    height: "90%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
};
