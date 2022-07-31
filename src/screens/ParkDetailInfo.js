import React from "react";
import { ParkBasicInfoSection } from "../components/ParkBasicInfoSection";
import { Header } from "../components/Header";
import { PlaysetInfoSection } from "../components/PlaysetInfoSection";
import { ParkOtherInfoSection } from "../components/ParkOtherInfoSection";
import { useLocation } from "react-router-dom";

export const ParkDetailInfo = () => {
  const location = useLocation();
  console.log("location:", location);
  const detailnfo = location.state.info;
  console.log("detailInfo:", detailnfo);

  return (
    <div style={styles.body}>
      <Header />
      <div style={styles.section}>
        {/* <img src={ParkImg} alt="メイン画像" style={styles.main} /> */}
        <ParkBasicInfoSection data={detailnfo} />
        <PlaysetInfoSection data={detailnfo} />
        <ParkOtherInfoSection other={detailnfo.other} />

        <section>
          {/* <img
            src={ParkImgOther}
            alt="公園その他写真"
            style={styles.otherImg}
          />
          <img
            src={ParkImgOther2}
            alt="公園その他写真"
            style={styles.otherImg}
          /> */}
        </section>
      </div>
    </div>
  );
};

const styles = {
  body: {
    width: "100vw",
    height: "100vh",
    position: "relative",
    marginTop: 60,
  },

  section: {
    width: "90%",
    top: 60,
    padding: "10px",
    // position: "absolute",
  },
  main: {
    width: "100%",
    height: "25%",
  },

  otherImg: {
    width: "95%",
    height: "25%",
    display: "block",
    margin: "auto",
    padding: "5px",
  },
};
