import React, { useState, useEffect } from "react";
import { Header2 } from "../components/Header2";
import { useNavigate, useLocation } from "react-router-dom";
import { ParkInfoCard } from "../components/ParkInfoCard";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export const ParkList = () => {
  // useStateの初期化
  const [parks, setParks] = useState([]);
  const [areaName, setAreaName] = useState();
  const [isAge, setIsAge] = useState();
  const [parkName, setParkName] = useState();

  // useNavigateの初期化
  // 公園詳細画面へのルーティングの設定
  const navigate = useNavigate();
  const toParkDetailInfo = (park) => {
    // クリックした{park}を遷移先に渡す
    navigate("/ParkDetail", { state: { info: park } });
  };

  // useLocationの初期化
  const location = useLocation();

  // locationをコンソールに出力
  console.log("location.state:", location.state);

  // firestoreから全データの取得
  useEffect(() => {
    const getParkData = collection(db, "ParkDetailData");
    const { dataFilter, screenName } = location.state;
    // console.log("data:", screenName);

    getDocs(getParkData).then((snapShot) => {
      const parkDatasList = snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setParks(parkDatasList);

      if (screenName === "地域絞り込み") {
        if (dataFilter === "大森" || "蒲田・羽田" || "調布") {
          // console.log("地域分岐とおたよ");
          setAreaName(dataFilter);
        }
      }
      if (screenName === "年齢絞り込み") {
        dataFilter.map((ageFilter) => {
          if (ageFilter === "baby" || "child") {
            // console.log("年齢分岐通ったよ");
            // console.log("ageFilter:", ageFilter);
            setIsAge(true);
          }
        });
      }

      if (screenName === "公園名絞り込み") {
        setParkName(dataFilter);
        console.log("dataFilter:", dataFilter);
      }
    });
  }, []);
  console.log("parks:", parks);

  // 地域フィルター関数
  useEffect(() => {
    const areaFilterData = parks.filter((park) => park.area === areaName);
    setParks(areaFilterData);
  }, [areaName]);

  // 年齢フィルター関数
  useEffect(() => {
    const { dataFilter } = location.state;
    // console.log("dataFilter:", dataFilter);
    if (dataFilter.includes("baby")) {
      if (dataFilter.includes("child")) {
        // console.log("両方あるよ");
      } else {
        const babyFilterData = parks.filter((park) => park.baby === true);
        setParks(babyFilterData);
        // console.log("ベイビーだけ");
      }
    } else {
      const childFilterData = parks.filter((park) => park.child === true);
      setParks(childFilterData);

      // console.log("子供だけ");
    }
  }, [isAge]);

  // 公園名フィルター関数
  useEffect(() => {
    const parkNameFilterData = parks.filter(
      (park) => park.name.match(parkName) || park.furigana.match(parkName)
    );
    setParks(parkNameFilterData);
    console.log("parkNameFilterData:", parkNameFilterData);
  }, [parkName]);

  // 遊具フィルター関数
  const filter = ["滑り台", "ぶらんこ", "お砂場"];
  const playsetFilterData = parks.filter((park) => park.playset === filter);
  console.log("playsetFilterData:", playsetFilterData);

  //　配列A[1,2,3,4,5]表示されない
  //　条件配列B[2,3,6]
  // 抽出した配列C[2,3]false

  // trueの場合
  //　配列A[1,2,3,4,5,6]
  //　条件配列B[2,3,6]
  // 抽出した配列C[2,3,6]true

  return (
    <div style={styles.body}>
      <Header2 />
      <section style={styles.parkListSection}>
        {parks.map((park, id) => {
          return (
            <ParkInfoCard
              data={park}
              onClick={() => {
                toParkDetailInfo(park);
              }}
              key={id}
            />
          );
        })}
      </section>
    </div>
  );
};

const styles = {
  body: {
    width: "100vw",
    minHeight: "100vh",
    position: "relative",
    backgroundColor: "#f3eed5",
    display: "flex",
    justifyContent: "center",
    paddingTop: 60,
  },
  parkListSection: {
    width: "90%",
    height: "auto",
  },
};
