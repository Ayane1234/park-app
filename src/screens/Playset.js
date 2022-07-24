import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PlaysetSearchButton } from "../components/PlaysetSearchButton";
import { Header } from "../components/Header";
import { SearchButton } from "../components/SearchButton";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

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
  console.log("isActive:", isActive[1].bool);

  // playsetData.forEach((text, index) => {
  //   ref.current[index] = React.createRef();
  // });
  let array = [];
  const playsetClick = (value) => {
    array = playset;
    const newPlayset = value;
    console.log("value:", value);

    if (!playset.includes(newPlayset)) {
      const playsetFilterData = [...array, newPlayset];
      setPlayset(playsetFilterData);
      const found = playsetDataObject.find((e) => e.title === newPlayset);
    } else {
      const noneThisPlayset = playset.filter((data) => data !== newPlayset);
      setPlayset(noneThisPlayset);
    }
  };
  // console.log("playset:", playset);

  // const onClick = (index) => {
  //   const array = playset;
  //   const element = ref.current;
  //   // console.log("element:", element[index].current.style);

  //   const playsetText = element[index].current.textContent;
  //   const newPlayset = playsetText;
  //   console.log("element:", element);
  //   // console.log("newPlayset:", newPlayset);

  //   if (playset.includes(newPlayset)) {
  //     const nonThisPlayset = playset.filter((data) => data !== newPlayset);
  //     setPlayset(nonThisPlayset);
  //     element[index].current.style.backgroundColor = "white";
  //     element[index].current.style.color = "black";
  //   } else {
  //     const playsetFilter = [...array, newPlayset];
  //     setPlayset(playsetFilter);
  //     element[index].current.style.backgroundColor = "#e4af9b";
  //     element[index].current.style.color = "white";
  //   }
  // };

  const toParkList = () => {
    if (!playset.length) {
      return;
    } else {
      navigate("/ParkList", {
        state: { dataFilter: playset, screenName: "遊具絞り込み" },
      });
    }
  };

  // console.log("playsetData:", playsetData);
  console.log("playset:", playset);
  console.log("isSearch :", isSearch);

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
              bool={isActive}
            />
          );
        })}
        {/* {playsetData.map((text, index) => {
          return (
            <PlaysetSearchButton
              key={index}
              // ref={ref.current[index]}
              text1={text}
              onClick={() => playsetClick(text)}
            />
          );
        })} */}
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
