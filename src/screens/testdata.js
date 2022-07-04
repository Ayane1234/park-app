import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  getDocs,
  query,
  QuerySnapshot,
  where,
} from "firebase/firestore";

export const TestData = () => {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    const getParkData = collection(db, "ParkDetailData");
    // console.log("getParkData:", getParkData);
    getDocs(getParkData).then((snapShot) => {
      // console.log("snapShot:", snapShot);
      const parkDatasList = snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // console.log("parkDataList:", parkDatasList);
      setParks(parkDatasList);

      // console.log("parks:", parks);
    });
  }, []);
  console.log("useEffectの外のparks:", parks);
  const areaName = "大森";
  // const age = "1-3歳";
  const areaFilterData = parks.filter(
    (park) =>
      // console.log("park:", park.area === "調布");
      park.area === areaName
  );

  console.log("areaFilterData:", areaFilterData);

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
