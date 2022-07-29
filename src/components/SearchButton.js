import React from "react";

export const SearchButton = ({ onClick, isSearch }) => {
  // console.log("props.isSearch:", isSearch);
  return (
    <button
      style={isSearch ? styles.searchButtonTrue : styles.searchButtonFalse}
      onClick={onClick}
    >
      さがす
    </button>
  );
};

const styles = {
  searchButtonTrue: {
    width: "221px",
    height: "67px",
    margin: "20px",
    backgroundColor: "#d4dfbb",
    borderRadius: "30px",
    border: "none",
    fontSize: "18px",
    position: "fixed",
    bottom: 30,
  },
  searchButtonFalse: {
    width: "221px",
    height: "67px",
    margin: "20px",
    backgroundColor: "#gray",
    borderRadius: "30px",
    border: "none",
    fontSize: "18px",
    position: "fixed",
    bottom: 30,
  },
};
