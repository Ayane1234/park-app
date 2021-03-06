import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { useNavigate, useLocation } from "react-router-dom";
import { ParkInfoCard } from "../components/ParkInfoCard";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export const ParkList = () => {
  // useStateの初期化
  const [parks, setParks] = useState([]);
  const [areaName, setAreaName] = useState("");
  const [isAge, setIsAge] = useState(); //要検討
  const [parkName, setParkName] = useState("");
  const [playset, setPlayset] = useState([]);

  // useNavigateの初期化
  // 公園詳細画面へのルーティングの設定
  const navigate = useNavigate();
  const toParkDetailInfo = (park) => {
    navigate("/ParkDetail", { state: { info: park } });
  };

  // useLocationの初期化
  const location = useLocation();

  // firestoreから全データの取得
  useEffect(() => {
    const getParkData = collection(db, "ParkDetailData");
    const { dataFilter, screenName } = location.state;
    console.log("dataFilter:", dataFilter);

    // 関数化する
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
        dataFilter.map((ageFilter) => {
          if (ageFilter === "baby" || "child") {
            setIsAge(true);
          }
        });
      }

      if (screenName === "公園名絞り込み") {
        setParkName(dataFilter);
      }
      if (screenName === "遊具絞り込み") {
        setPlayset(dataFilter);
      }
    });
  }, []);

  // 地域フィルター
  useEffect(() => {
    const areaFilterData = parks.filter((park) => park.area === areaName);
    setParks(areaFilterData);
  }, [areaName]);

  // 年齢フィルター
  useEffect(() => {
    const { dataFilter } = location.state;
    if (dataFilter.includes("baby")) {
      if (dataFilter.includes("child")) {
      } else {
        const babyFilterData = parks.filter((park) => park.baby === true);
        setParks(babyFilterData);
      }
    } else {
      const childFilterData = parks.filter((park) => park.child === true);
      setParks(childFilterData);
    }
  }, [isAge]);

  // 公園名フィルター
  useEffect(() => {
    const parkNameFilterData = parks.filter(
      (park) => park.name.match(parkName) || park.furigana.match(parkName)
    );
    setParks(parkNameFilterData);
  }, [parkName]);

  const playsetFilterFunc = () => {
    const filter = playset;

    const allPlaysetData = parks.map((park) => {
      // フィルターとparkをまとめる
      const arrs = [filter, park.playset];

      // フィルターとparkをconcatnateする
      const arrsConcat = filter.concat(park.playset);

      // 重複をなくす
      const chofuku = arrsConcat.filter(function (value, index, array) {
        return array.indexOf(value) === index;
      });

      // フィルターにもpark.playsetにも両方ある遊具を絞る
      const result = chofuku.filter(function (val) {
        let samePlayset = true;

        arrs.forEach(function (filterAndParkSet, index) {
          samePlayset = filterAndParkSet.indexOf(val) !== -1 && samePlayset;
        });
        return samePlayset;
      });

      // filterとresultのJSON.stringfyで比較
      // trueだったら、parkをリターンする

      if (JSON.stringify(filter) === JSON.stringify(result)) {
        return park;
      } else {
        return false;
      }
    });
    const playsetFilterData = allPlaysetData.filter((park) => park !== false);

    setParks(playsetFilterData);
  };
  // 遊具フィルター
  useEffect(() => {
    playsetFilterFunc();
  }, [playset]);

  console.log("parks:", parks);
  return (
    <div style={styles.body}>
      <Header />
      {parks.length > 0 && (
        <section style={styles.amountParkSection}>
          <div style={styles.amountPark}>検索結果　{parks.length}件</div>
        </section>
      )}

      <div style={styles.parkListSectionWrapper}>
        <section style={styles.parkListSection}>
          {parks.length > 0 ? (
            parks.map((park, id) => {
              return (
                <ParkInfoCard
                  data={park}
                  onClick={() => {
                    toParkDetailInfo(park);
                  }}
                  key={id}
                />
              );
            })
          ) : (
            <div style={styles.nonePark}>
              <p style={styles.text}>
                お探しの検索条件では、公園はありませんでした。
                <br></br>
                新しい検索条件で再検索してみてください。
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

const styles = {
  body: {
    left: 0,
    top: 0,
    overflow: "hidden",
    width: "100vw",
    maxWidth: "100%",
    minHeight: "100vh",
    position: "relative",
    backgroundColor: "#f3eed5",
    paddingTop: 50,
  },
  parkListSectionWrapper: {
    display: "flex",
    justifyContent: "center",
  },

  parkListSection: {
    width: "90%",
    height: "auto",
  },
  amountParkSection: {
    display: "flex",
    justifyContent: "flex-end",
    padding: 20,
  },
  amountPark: {
    // width: "90%",
    fontSize: "20px",
    // margin: "0 0 0 80%",
  },
  nonePark: {
    width: "300px",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    diplay: "flex",
    height: "100vh",
    fontSize: "20px",
    textAlign: "center",
  },
};
