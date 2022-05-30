import React from "react";
import { Link } from "react-router-dom";
import { Header2 } from "../components/Header2";
import { useNavigate } from "react-router-dom";

export const List = () => {
  // 公園名
  // 住所
  // エリア
  // 遊具種類タグ
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
      <section style={styles.section}>
        {/* <Link to="/ParkDetail"> */}
        {datas.map((data) => {
          return (
            <section
              style={styles.card}
              onClick={() => navigate("/ParkDetail")}
            >
              <div style={styles.contents}>
                <div style={styles.areaParkContents}>
                  <div style={styles.park}>{data.park}</div>
                  <div style={styles.areaContent}>
                    <div style={styles.area}>{data.area}</div>
                  </div>
                </div>

                <div style={styles.address}>{data.address}</div>

                <div style={styles.playsetContents}>
                  {data.playset.map((playitem) => {
                    return <p style={styles.playset}>{playitem}</p>;
                  })}
                </div>
              </div>
            </section>
          );
        })}
        {/* </Link> */}
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
    // flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
  },
  section: {
    width: "80%",
    height: "95%",
  },
  card: {
    width: "100%",
    height: "25%",
    backgroundColor: "white",
    borderRadius: "10px",
    marginBottom: "15px",
  },

  contents: {
    padding: "15px",
  },

  areaParkContents: {
    display: "grid",
    gridTemplateColumns: "80% 20%",
  },
  areaContent: {
    width: "75%",
    marginLeft: "auto",
  },
  area: {
    // display: "inline-block",
    backgroundColor: "#e4af9b",
    borderRadius: "10px",
    textAlign: "center",
    padding: "1px",
  },

  park: {
    fontSize: "1.6em",
  },

  address: {
    fontSize: "1em",
  },
  playset: {
    display: "block",
    padding: "1px 10px 1px 10px",
    textAlign: "center",
    backgroundColor: "#CCB5A5",
    margin: "2px 5px 1px 0px",
    // marginBottom: "0px",
    borderRadius: "30px",
    color: "white",
  },
  playsetContents: {
    display: "flex",
    flexWrap: "wrap",
  },
};
