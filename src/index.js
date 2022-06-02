import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Home } from "./screens/Home";
import { Playset } from "./screens/Playset";
import { Area } from "./screens/Area";
import { Age } from "./screens/Age";
import { ParkName } from "./screens/ParkName";
import { ParkList } from "./screens/ParkList";
import { ParkDetailInfo } from "./screens/ParkDetailInfo";
import { BrowserRouter, Link, Switch, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {/* <React.StrictMode> */}
      <Route path="/" element={<App />} />
      <Route path="Home" element={<Home />} />
      <Route path="Playset" element={<Playset />} />
      {/* </React.StrictMode> */}
      <Route
        path="*"
        element={
          <main
            style={{
              padding: "1rem",
            }}
          >
            <p>There's nothing here!</p>
          </main>
        }
      ></Route>
    </Routes>
  </BrowserRouter>
);
