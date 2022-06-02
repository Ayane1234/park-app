import React from "react";
import { Header2 } from "../components/Header2";
import { useNavigate } from "react-router-dom";
import { ParkInfoCard } from "../components/ParkInfoCard";

export const ParkList = () => {
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
      <section style={styles.parkListSection}>
        {datas.map((data) => {
          return (
            <ParkInfoCard
              data={data}
              onClick={() => {
                navigate("/ParkDetail");
              }}
            />
          );
        })}
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
    justifyContent: "center",
    paddingTop: 60,
  },
  parkListSection: {
    width: "90%",
    height: "95%",
  },
};
