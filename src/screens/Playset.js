import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PlaysetSearchButton } from "../components/PlaysetSearchButton";
import { Header } from "../components/Header";
import { SearchButton } from "../components/SearchButton";
import { db } from "../firebase/firebase";
import {
  collection,
  connectFirestoreEmulator,
  getDocs,
} from "firebase/firestore";

export const Playset = () => {
  const [playset, setPlayset] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [playsetData, setPlaysetData] = useState([]);
  const navigate = useNavigate();
  const ref = useRef([]);

  useEffect(() => {
    const getPlaysetData = collection(db, "PlaysetList");
    getDocs(getPlaysetData).then((snapShot) => {
      const playsetList = snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPlaysetData(playsetList);
    });
  }, []);

  const playsetDataObject = [
    { tilte: "お砂場", bool: false },
    { title: "ぶらんこ", bool: false },
    { title: "滑り台", bool: false },
    { title: "スプリング遊具", bool: false },
    { title: "鉄棒", bool: false },
    { title: "ローラースライダー", bool: false },
    { title: "ジャングルジム", bool: false },
    { title: "ロープウェイ", bool: false },
  ];
  const [isActive, setIsActive] = useState(playsetDataObject);

  useEffect(() => {
    if (playset.length > 0) {
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
  }, [playset]);

  // playsetData.forEach((text, index) => {
  //   ref.current[index] = React.createRef();
  // });

  const playsetClick = (value) => {
    let array = [];
    array = playset;
    const newPlayset = value;

    if (!playset.includes(newPlayset)) {
      const playsetFilterData = [...array, newPlayset];
      setPlayset(playsetFilterData);

      const isTrueObject = isActive;
      const newIsTrueObject = isTrueObject.map((playsetBool) =>
        playsetBool.title === newPlayset
          ? { ...playsetBool, bool: true }
          : playsetBool
      );

      setIsActive(newIsTrueObject);
    } else {
      const noneThisPlayset = playset.filter((data) => data !== newPlayset);
      setPlayset(noneThisPlayset);
      const isFalseObject = isActive;
      const newIsFalseObject = isFalseObject.map((playsetBool) =>
        playsetBool.title === newPlayset
          ? { ...playsetBool, bool: false }
          : playsetBool
      );
      setIsActive(newIsFalseObject);
    }
  };

  const toParkList = () => {
    if (!playset.length) {
      return;
    } else {
      navigate("/ParkList", {
        state: { dataFilter: playset, screenName: "遊具絞り込み" },
      });
    }
  };

  return (
    <div style={styles.body}>
      <Header />
      <section style={styles.section}>
        {playsetData.map((playset, id) => {
          return (
            <PlaysetSearchButton
              text1={playset.text1}
              key={id}
              text2={playset.text2}
              onClick={() => playsetClick(playset.value)}
              value={playset.value}
              bool={isActive}
            />
          );
        })}
      </section>

      <SearchButton isSearch={isSearch} onClick={() => toParkList()} />
    </div>
  );
};

const styles = {
  body: {
    paddingTop: 70,
    width: "100vw",
    height: "100vh",
    position: "relative",
    backgroundColor: "#f3eed5",
    display: "flex",
    justifyContent: "center",
  },
  section: {
    maxWidth: "300px",
    maxHeight: "600px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    placeItems: "center",
    columnGap: "10px",
    rowGap: "0",
  },
};
