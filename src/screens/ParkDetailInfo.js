import React, { useEffect, useState } from "react";
import { ParkBasicInfoSection } from "../components/ParkBasicInfoSection";
import { Header } from "../components/Header";
import { PlaysetInfoSection } from "../components/PlaysetInfoSection";
import { ParkOtherInfoSection } from "../components/ParkOtherInfoSection";
import { useLocation } from "react-router-dom";
import { storage } from "../firebase/firebase";
import { ref, getDownloadURL } from "firebase/storage";

export const ParkDetailInfo = () => {
  const [image, setImage] = useState(null);

  const location = useLocation();
  const detailnfo = location.state.info;

  const parkId = detailnfo.id;
  console.log("parkId:", parkId);

  const getImageFunc = () => {
    const gsReference = ref(
      storage,
      // "gs://park-app-2022.appspot.com/Vm2xdwSaPduEmsn0AcrO_main.jpg"
      `gs://park-app-2022.appspot.com/${parkId}_main.jpg`
    );
    getDownloadURL(gsReference)
      .then((url) => {
        // console.log("URL:", url);
        setImage(url);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getImageFunc();
  }, []);

  // console.log("image:", image);
  return (
    <div style={styles.body}>
      <Header />
      <div style={styles.section}>
        {/* {image && <img src={image} alt="メイン画像" style={styles.mainImage} />} */}
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
    // top: 60,
    padding: "0px 10px 0px  10px",
    // position: "absolute",
  },
  mainImage: {
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
