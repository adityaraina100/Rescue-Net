import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import MapComponent from "./Pages/MapComponent";
import Agencies from "./Pages/Agencies";
import Login from "./Pages/Login";
import teams from "./teams";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="agencies" element={<Agencies />} />
          <Route path="gmaps" element={<MapComponent teams={teams} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
