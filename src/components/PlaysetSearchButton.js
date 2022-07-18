import React from "react";

export const PlaysetSearchButton = React.forwardRef((props, ref) => (
  <div style={styles.PlaysetSearchButton} onClick={props.onClick}>
    <p style={styles.text} ref={ref}>
      {props.text1}
      <br></br>
      {props.text2}
    </p>
  </div>
));

// {
//   return (
//     <div style={styles.PlaysetSearchButton} onClick={onClick} >
//       <p style={styles.text}>
//         {text1}
//         <br></br>
//         {text2}
//       </p>
//     </div>
//   );
// };

const styles = {
  PlaysetSearchButton: {
    width: "100px",
    height: "100px",
    margin: "0px 10px 0 10px ",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderRadius: "30px",
  },
  text: {
    position: "absolute",
    textAlign: "center",
  },
};
