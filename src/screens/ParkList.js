import React, { useState, useEffect, useMemo } from "react";
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
    console.log("data:", screenName);

    getDocs(getParkData).then((snapShot) => {
      const parkDatasList = snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setParks(parkDatasList);

      if (screenName === "地域絞り込み") {
        if (dataFilter === "大森" || "蒲田・羽田" || "調布") {
          setAreaName(dataFilter);
        }
      }
      if (screenName === "年齢絞り込み") {
        if (dataFilter === "baby" || "child") {
          setIsAge(true);
        }
      }
    });
  }, []);

  // 地域フィルター関数
  // console.log("areaName:", areaName);
  useEffect(() => {
    const areaFilterData = parks.filter((park) => park.area === areaName);
    setParks(areaFilterData);
  }, [areaName]);

  // ベイビーフィルター関数
  // console.log("babyFilter:", babyFilter);
  useEffect(() => {
    const { dataFilter } = location.state;
    if (dataFilter === "baby") {
      const babyFilterData = parks.filter((park) => park.baby === true);
      setParks(babyFilterData);
    } else if (dataFilter === "child") {
      const childFilterData = parks.filter((park) => park.child === true);
      setParks(childFilterData);
    }

    console.log("ベイビーフィルターのparks:", parks);
  }, [isAge]);

  // 子どもフィルター

  // console.log("childFilter:", childFilterData);

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
