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
        <br></br>
        <Link to="/Age">Age</Link>
        <br></br>
        <Link to="/Area">Area</Link>
        <br></br>
        <Link to="/ParkName">ParkName</Link>
        <br></br>
        <Link to="/ParkList">ParkList</Link>
        <br></br>
        <Link to="/ParkDetail">ParkDetail</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
