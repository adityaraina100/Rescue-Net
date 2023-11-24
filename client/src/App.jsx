import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import MapComponent from "./Pages/MapComponent";
function App() {
  const center = [32.74326, 74.87312];
  const zoom = 10;

  const hospitalsData = [
    { name: "Hospital 1", lat: 32.73083452929607, lng: 74.84070266602133 },
    // { name: 'Hospital 2', lat: HOSPITAL2_LAT, lng: HOSPITAL2_LNG },
    // Add more hospital data as needed
  ];

  const policeStationsData = [
    { name: "Police Station 1", lat: 32.72793739936562, lng: 74.8569400669532 },
    // { name: 'Police Station 2', lat: 32.73595177523826,  lng: 74.86157492384343 },
    // Add more police station data as needed
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="gmaps"
            element={
              <MapComponent
                center={center}
                zoom={zoom}
                hospitalsData={hospitalsData}
                policeStationsData={policeStationsData}
              />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
