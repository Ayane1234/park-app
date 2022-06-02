import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useNavigate } from "react-router-dom";
import ParkImg from "../img/park.png";
import Child from "../img/boy.png";
import Baby from "../img/baby.png";
import ParkImgOther from "../img/parkImg1.png";
import ParkImgOther2 from "../img/parkImg2.png";

export const ParkDetailInfo = () => {
  const navigate = useNavigate();
  const datas = [
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
      <header style={styles.headerDetail}>
        <ArrowBackIcon style={styles.arrow} onClick={() => navigate(-1)} />

        <HomeRoundedIcon
          style={styles.home}
          onClick={() => navigate("/Home")}
        />
      </header>
      <body>
        <img src={ParkImg} alt="メイン画像" style={styles.main} />
        <section style={styles.parkContents}>
          <div style={styles.parkName}>東調布公園</div>
          <div style={styles.areaContent}>
            <div style={styles.area}>調布</div>
          </div>
        </section>
        <section style={styles.addressContens}>
          <address style={styles.address}>東京都大田区南雪谷5-13-1</address>
          <div>25,229㎡</div>
        </section>
        <section style={styles.playsetWrapper}>
          <div style={styles.item}>遊具</div>
          <div style={styles.playsetContents}>
            <p style={styles.playset}>ぶらんこ</p>
            <p style={styles.playset}>スプリング遊具</p>
            <p style={styles.playset}>ジャングルジム</p>
            <p style={styles.playset}>お砂場</p>
            <p style={styles.playset}>滑り台</p>
          </div>
          <section style={styles.ageWrapper}>
            <div style={styles.ageContents}>
              <img src={Baby} alt="赤ちゃん" style={styles.icon} />
              <p style={styles.age}>１ー３歳向け</p>
            </div>
            <div style={styles.ageContents}>
              <img src={Child} alt="子ども" style={styles.icon} />
              <p style={styles.age}>３ー６歳向け</p>
            </div>
          </section>
        </section>
        <section>
          <div style={styles.item}>その他情報</div>
          <div style={styles.other}>徒歩圏内に公営プールあり</div>
        </section>
        <section>
          <img
            src={ParkImgOther}
            alt="公園その他写真"
            style={styles.otherImg}
          />
          <img
            src={ParkImgOther2}
            alt="公園その他写真"
            style={styles.otherImg}
          />
        </section>
      </body>
    </div>
  );
};

const styles = {
  body: {
    width: "100vw",
    height: "100vh",
    position: "relative",
  },
  headerDetail: {
    display: "flex",
    alignItems: "center",
    position: "fixed",
    left: 0,
    top: 0,
    width: "100vw",
    height: "10%",
  },

  section: {
    display: "flex",
    padding: "10px",
  },
  arrow: {
    marginLeft: 10,
    marginRight: "auto",
    fontSize: "2em",
    backgroundColor: "white",
    borderRadius: "50%",
    padding: "10px",
  },
  home: {
    fontSize: "2em",
    padding: "10px",
    marginLeft: "auto",
    marginRight: 10,
    color: "#CCB5A5",
    backgroundColor: "white",
    borderRadius: "50%",
  },
  main: {
    width: "100%",
    height: "25%",
  },

  parkContents: {
    display: "grid",
    gridTemplateColumns: "70% 30%",
  },

  areaContent: {
    width: "75%",
    marginLeft: "auto",
  },
  area: {
    // display: "inline-block",
    backgroundColor: "#e4af9b",
    borderRadius: "20px",
    textAlign: "center",
    padding: "1px",
    // display: "block",
  },
  parkName: {
    fontSize: "2em",
  },
  address: {
    fontStyle: "normal",
  },
  addressContens: {
    borderBottomStyle: "solid",
    borderWidth: "thin",
    paddingBottom: "10px",
    borderColor: "#CCB5A5",
  },
  playsetWrapper: {
    borderBottomStyle: "solid",
    borderWidth: "thin",
    paddingBottom: "10px",
    borderColor: "#CCB5A5",
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
  item: {
    fontSize: "1.5em",
  },
  ageWrapper: {
    display: "flex",
  },
  ageContents: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    width: "15%",
    height: "auto",
  },
  age: {
    fontSize: "0.8em",
  },
  other: {
    padding: 0,
  },

  otherImg: {
    width: "95%",
    height: "25%",
    display: "block",
    margin: "auto",
    padding: "5px",
  },
};
