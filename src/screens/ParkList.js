import React, { useState, useEffect } from "react";
import { Header2 } from "../components/Header2";
import { useNavigate, Link } from "react-router-dom";
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
  const toParkDetailInfo = (park) => {
    navigate("/ParkDetail", { state: { info: park } });
  };

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
