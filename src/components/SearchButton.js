import React from "react";

export const SearchButton = ({ onClick, isSearch }) => {
  console.log("props.isSearch:", isSearch);
  return (
    <div
      style={
        isSearch === true ? styles.searchButtonTrue : styles.searchButtonFalse
      }
      onClick={onClick}
    >
      さがす
    </div>
  );
};

const styles = {
  searchButtonTrue: {
    width: "220px",
    height: "100px",
    margin: "30px",
    backgroundColor: "#e4af9b",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderRadius: "30px",
    // width: "221px",
    // height: "67px",
    // margin: "20px",
    // backgroundColor: "#e4af9b",

    // // backgroundColor: "#d4dfbb",
    // borderRadius: "30px",
    // border: "none",
    // fontSize: "18px",
    // position: "fixed",
    // bottom: 30,
  },
  searchButtonFalse: {
    width: "220px",
    height: "100px",
    margin: "30px",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderRadius: "30px",
    // width: "221px",
    // height: "67px",
    // margin: "20px",
    // backgroundColor: "#gray",
    // borderRadius: "30px",
    // border: "none",
    // fontSize: "18px",
    // position: "fixed",
    // bottom: 30,
  },
};
