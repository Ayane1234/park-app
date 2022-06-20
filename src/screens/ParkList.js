import React, { useState, useEffect } from "react";
import { Header2 } from "../components/Header2";
import { useNavigate } from "react-router-dom";
import { ParkInfoCard } from "../components/ParkInfoCard";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export const ParkList = () => {
  const [parks, setParks] = useState([]);
  const [ids, setIds] = useState([]);
  useEffect(() => {
    const parkData = collection(db, "ParkDetailData");
    console.log("parkData:", parkData);
    getDocs(parkData).then((snapShot) => {
      console.log("snapShot:", snapShot);
      // console.log(
      //   "id:",
      //   snapShot.docs.map((doc) => doc.id)
      // );
      // console.log(
      //   "docsをmapして一つずつ表示するスプレッド:",
      //   snapShot.docs.map((doc) => ({ ...doc.data() }))
      // setIds(snapShot.docs.map((doc) => ({ ...doc.id })));
      setParks(snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  const navigate = useNavigate();
  // const datas = [
  //   {
  //     park: "東調布公園",
  //     address: "大田区南雪谷5丁目13ー1",
  //     area: "調布",
  //     playset: ["ぶらんこ", "スプリング遊具"],
  //   },
  //   {
  //     park: "洗足池公園",
  //     address: "東京都大田区南千束2丁目14ー5",
  //     area: "調布",
  //     playset: [
  //       "ぶらんこ",
  //       "スプリング遊具",
  //       "ジャングルジム",
  //       "お砂場",
  //       "滑り台",
  //     ],
  //   },
  // ];

  return (
    <div style={styles.body}>
      <Header2 />
      <section style={styles.parkListSection}>
        {parks.map((park, id) => {
          return (
            <ParkInfoCard
              data={park}
              onClick={() => {
                navigate("/ParkDetail");
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
    // height: "100%",
    position: "relative",
    backgroundColor: "#f3eed5",
    display: "flex",
    justifyContent: "center",
    paddingTop: 60,
    // backgroundSize: "cover",
  },
  parkListSection: {
    width: "90%",
    height: "95%",
  },
};
