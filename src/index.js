import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Home } from "./screens/Home";
import { Search } from "./screens/Playset";
import { Age } from "./screens/Age";
import { Area } from "./screens/Area";
import { ParkName } from "./screens/ParkName";
import { BrowserRouter, Link, Switch, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {/* <React.StrictMode> */}
      <Route path="/" element={<App />} />
      <Route path="Home" element={<Home />} />
      <Route path="Playset" element={<Search />} />
      <Route path="Age" element={<Age />} />
      <Route path="Area" element={<Area />} />
      <Route path="ParkName" element={<ParkName />} />
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
