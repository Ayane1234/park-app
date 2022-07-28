import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { SearchButton } from "../components/SearchButton";

export const ParkName = () => {
  const [parkName, setParkName] = useState("");
  const [input, setInput] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const navigate = useNavigate();
  console.log("parkName:", parkName);

  useEffect(() => {
    setParkName(input);
  }, [input]);

  useEffect(() => {
    if (!parkName) {
      setIsSearch(false);
    } else {
      setIsSearch(true);
    }
  }, [parkName]);

  const toParkList = () => {
    if (parkName === "") {
      return;
    } else {
      navigate("/ParkList", {
        state: { dataFilter: parkName, screenName: "公園名絞り込み" },
      });
    }
  };

  const handeChange = (event) => setInput(event.target.value);
  return (
    <div style={styles.body}>
      <Header />
      <section style={styles.section}>
        <input
          style={styles.input}
          value={input}
          onChange={handeChange}
          placeholder="公園名を入力"
        ></input>
        <div style={styles.attention}>
          ひらがな　または　漢字で入力してください
        </div>
      </section>

      <SearchButton isSearch={isSearch} onClick={() => toParkList()} />
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
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  section: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  attention: {
    padding: "10px",
    width: "222px",
    fontSize: "15px",
    color: "gray",
  },
  input: {
    width: "222px",
    height: "100px",
    border: "none",
    textAlign: "center",
    fontSize: "20px",
  },
};
