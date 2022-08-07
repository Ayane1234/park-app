import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const getPlaysetData = collection(db, "PlaysetList");
    getDocs(getPlaysetData).then((snapShot) => {
      const playsetList = snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const playsetListWithBool = playsetList.map((playset) => {
        playset.bool = false;
        return playset;
      });

      setPlaysetData(playsetListWithBool);
    });
  }, []);

  //widthの取得
  const getHeighSize = () => {
    const height = window.innerHeight;

    return { height };
  };
  const [heightSize, setHeightSize] = useState(getHeighSize());

  console.log("heightSize:", heightSize);
  useEffect(() => {
    function handleWindowResize() {
      setHeightSize(getHeighSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (playset.length > 0) {
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
  }, [playset]);

  const playsetClick = (value) => {
    let array = [];
    array = playset;
    const newPlayset = value;
    if (!playset.includes(newPlayset)) {
      const playsetFilterData = [...array, newPlayset];
      setPlayset(playsetFilterData);

      const playsetTrueBool = playsetData.map((playsetdata) =>
        playsetdata.value === newPlayset
          ? { ...playsetdata, bool: true }
          : playsetdata
      );

      setPlaysetData(playsetTrueBool);
    } else {
      const noneThisPlayset = playset.filter((data) => data !== newPlayset);
      setPlayset(noneThisPlayset);
      const playsetFlaseBool = playsetData.map((playsetdata) =>
        playsetdata.value === newPlayset
          ? { ...playsetdata, bool: false }
          : playsetdata
      );
      setPlaysetData(playsetFlaseBool);
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
      <section
        style={heightSize.height < 800 ? styles.section599 : styles.section600}
      >
        {playsetData.map((playset, id) => {
          return (
            <PlaysetSearchButton
              text1={playset.text1}
              key={id}
              text2={playset.text2}
              onClick={() => playsetClick(playset.value)}
              value={playset.value}
              bool={playset.bool}
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
    paddingTop: 50,
    width: "100vw",
    height: "100vh",
    position: "relative",
    backgroundColor: "#f3eed5",
    display: "flex",
    justifyContent: "center",
  },
  section599: {
    maxWidth: "300px",
    maxHeight: "500px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    placeItems: "center",
    columnGap: "10px",
    rowGap: " 0px",
  },
  section600: {
    maxWidth: "300px",
    maxHeight: "700px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    placeItems: "center",
    columnGap: "10px",
    rowGap: " 0px",
  },
};
