import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { SearchButton } from "../components/SearchButton";

export const ParkName = () => {
  const [parkName, setParkName] = useState();
  const [input, setInput] = useState();
  const navigate = useNavigate();
  console.log("input:", input);

  useEffect(() => {
    setParkName(input);
  }, [input]);

  const toParkList = () => {
    navigate("/ParkList", {
      state: { dataFilter: parkName, screenName: "公園名絞り込み" },
    });
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
      </section>

      <SearchButton style={styles.button} onClick={() => toParkList()} />
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

  input: {
    width: "80%",
    height: "10vh",
    border: "none",
    textAlign: "center",
    fontSize: "20px",
  },
};
