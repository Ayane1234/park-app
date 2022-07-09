import React, { useState, useEffect, useMemo } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  getDocs,
  query,
  QuerySnapshot,
  where,
} from "firebase/firestore";
import { useNavigate, useLocation } from "react-router-dom";

export const TestData = () => {
  const [parks, setParks] = useState([]);
  const [babyFilter, setBabyFilter] = useState();
  const location = { state: "baby" };

  useEffect(() => {
    const getParkData = collection(db, "ParkDetailData");

    getDocs(getParkData).then((snapShot) => {
      const parkDatasList = snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setParks(parkDatasList);
    });

    // //ageの分岐
    // if (location.state === "baby") {
    //   console.log("赤ちゃん向け有り");
    //   setBabyFilter(true);
    // } else {
    //   return;
    // }
  }, []);

  console.log("[parks]", parks);

  const baby = true;
  const babyFilterD = parks.filter((park) => park.age === baby);
  console.log("[babyFilterD]", babyFilterD);

  // const ageFilterData = parks.filter();
  // const getParkData = collection(db, "ParkDetailData");
  // const query1 = query(
  //   getParkData,
  //   where("playset", "array-contains", "ぶらんこ")
  // );
  // const query2 = query(
  //   getParkData,
  //   where("playset", "in", [["ぶらんこ", "滑り台"]])
  // );
  // console.log("query2:", query2);
  // // getDocs(query1).then((querySnapshot) => {
  // //   console.log("querySnapshot:", querySnapshot);
  // //   querySnapshot.docs.map((doc) => {
  // //     console.log("doc:", doc.data());
  // //   });
  // // });
  // getDocs(query2).then((querySnapshot) => {
  //   console.log("querySnapshot:", querySnapshot);
  //   querySnapshot.docs.map((doc) => {
  //     console.log("doc:", doc.data());
  //   });
  // });

  return <div>testdata</div>;
};
