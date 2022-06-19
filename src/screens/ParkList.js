import React, { useState, useEffect } from "react";
import { Header2 } from "../components/Header2";
import { useNavigate } from "react-router-dom";
import { ParkInfoCard } from "../components/ParkInfoCard";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export const ParkList = () => {
  const [parks, setParks] = useState([]);
  useEffect(() => {
    const parkData = collection(db, "ParkDetailData");
    console.log("parkData:", parkData);
    getDocs(parkData).then((snapShot) => {
      console.log("snapShot:", snapShot);
      console.log("docs:", snapShot.docs);
      console.log(
        "docsをmapして一つずつ表示するスプレッド:",
        snapShot.docs.map((doc) => ({ ...doc.data() }))
      );
      // console.log(
      //   "docsをmapして一つずつ表示するスプレッドじゃない:",
      //   snapShot.docs.map((doc) => doc.data())
      // );
      // setParks(snapShot.docs.map((doc) => ({ ...doc.data() })))
    });
  }, []);

  const navigate = useNavigate();
  const datas = [
    {
      park: "東調布公園",
      address: "大田区南雪谷5丁目13ー1",
      area: "調布",
      playset: ["ぶらんこ", "スプリング遊具"],
    },
    {
      park: "洗足池公園",
      address: "東京都大田区南千束2丁目14ー5",
      area: "調布",
      playset: [
        "ぶらんこ",
        "スプリング遊具",
        "ジャングルジム",
        "お砂場",
        "滑り台",
      ],
    },
  ];

  return (
    <div style={styles.body}>
      <Header2 />
      <section style={styles.parkListSection}>
        {datas.map((data, index) => {
          return (
            <ParkInfoCard
              data={data}
              onClick={() => {
                navigate("/ParkDetail");
              }}
              key={index}
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
    height: "100vh",
    position: "relative",
    backgroundColor: "#f3eed5",
    display: "flex",
    justifyContent: "center",
    paddingTop: 60,
  },
  parkListSection: {
    width: "90%",
    height: "95%",
  },
};
