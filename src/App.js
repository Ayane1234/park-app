import "./App.css";
import { Home } from "./screens/Home";
import { BrowserRouter, Link, Switch, Route, Routes } from "react-router-dom";
import { Playset } from "./screens/Playset";
import { Area } from "./screens/Area";

function App() {
  return (
    <div className="park-app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="Home" element={<Home />} />
          <Route path="Playset" element={<Playset />} />
          <Route path="Area" element={<Area />} />
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

      <Home />
    </div>
  );
}

export default App;
