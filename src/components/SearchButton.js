import React from "react";

export const SearchButton = ({ onClick }) => {
  return (
    <button style={styles.searchButton} onClick={onClick}>
      さがす
    </button>
  );
};

const styles = {
  searchButton: {
    width: "55%",
    height: "70px",
    margin: "20px",
    backgroundColor: "#d4dfbb",
    borderRadius: "30px",
    border: "none",
    fontSize: "18px",
    position: "fixed",
    bottom: 30,
  },
};
