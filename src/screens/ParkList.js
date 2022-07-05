import React, { useState, useEffect } from "react";
import { Header2 } from "../components/Header2";
import { useNavigate, useLocation } from "react-router-dom";
import { ParkInfoCard } from "../components/ParkInfoCard";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export const ParkList = () => {
  // useState(parks)の初期化
  const [parks, setParks] = useState([]);
  const [areaName, setAreaName] = useState();

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
  console.log("location:", location.state);

  // firestoreから全データの取得
  useEffect(() => {
    const getParkData = collection(db, "ParkDetailData");
    getDocs(getParkData).then((snapShot) => {
      const parkDatasList = snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setParks(parkDatasList);
      setAreaName(location.state);
    });
  }, []);

  // 地域フィルター関数
  console.log("areaName:", areaName);
  useEffect(() => {
    const areaFilterData = parks.filter((park) => park.area === areaName);
    // console.log("areaFilterData:", areaFilterData);
    setParks(areaFilterData);
    // console.log("areaFilter内のparks:", parks);
  }, [areaName]);

  // ベイビーフィルター関数
  const babyFilter = true;
  const babyFilterData = parks.filter((park) => park.baby === babyFilter);
  console.log("babyFilter:", babyFilterData);

  // 子どもフィルター
  const childFilter = true;
  const childFilterData = parks.filter((park) => park.child === childFilter);
  console.log("childFilter:", childFilterData);

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
    // backgroundSize: "cover",
  },
  parkListSection: {
    width: "90%",
    height: "auto",
  },
};
