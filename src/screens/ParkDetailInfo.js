import React from "react";
import { ParkBasicInfoSection } from "../components/ParkBasicInfoSection";
import { ParkDetailsHeader } from "../components/ParkDetailsHeader";
import { PlaysetInfoSection } from "../components/PlaysetInfoSection";
import { ParkOtherInfoSection } from "../components/ParkOtherInfoSection";
import { useLocation } from "react-router-dom";

export const ParkDetailInfo = () => {
  const location = useLocation();
  console.log("location:", location.state.info);
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
      <ParkDetailsHeader />
      <div>
        {/* <img src={ParkImg} alt="メイン画像" style={styles.main} /> */}
        <ParkBasicInfoSection />
        <PlaysetInfoSection />
        <ParkOtherInfoSection />

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
    display: "flex",
    padding: "10px",
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
