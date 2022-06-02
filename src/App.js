import "./App.css";
import { Home } from "./screens/Home";
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

import { Playset } from "./screens/Playset";
import { Area } from "./screens/Area";
import { Age } from "./screens/Age";
import { ParkName } from "./screens/ParkName";
import { ParkList } from "./screens/ParkList";
import { ParkDetailInfo } from "./screens/ParkDetailInfo";

function App() {
  return (
    <div className="park-app">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/Home">Home</Link>
        <br></br>
        <Link to="/Playset">Playset</Link>
      </nav>
      <Outlet />

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="Home" element={<Home />} />
          <Route path="Playset" element={<Playset />} />
          <Route path="Area" element={<Area />} />
          <Route path="Age" element={<Age />} />
          <Route path="ParkName" element={<ParkName />} />
          <Route path="ParkList" element={<ParkList />} />
          <Route path="ParkDetail" element={<ParkDetailInfo />} />
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
      </BrowserRouter> */}
    </div>
  );
}

export default App;
