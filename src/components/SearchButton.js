import React from "react";

export const SearchButton = ({ onClick, isSearch }) => {
  return (
    <div
      style={isSearch ? styles.searchButtonTrue : styles.searchButtonFalse}
      onClick={onClick}
    >
      さがす
    </div>
  );
};

const styles = {
  searchButtonTrue: {
    width: "220px",
    height: "60px",
    margin: "20px",
    backgroundColor: "#D4DFBB",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    borderRadius: "30px",
    fontSize: "18px",
    bottom: 10,
  },
  searchButtonFalse: {
    width: "220px",
    height: "60px",
    margin: "20px",
    backgroundColor: "#dcdcdc",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    borderRadius: "30px",
    fontSize: "18px",
    bottom: "1%",
  },
};
