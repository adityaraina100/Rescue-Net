/* eslint-disable react/prop-types */

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const MapComponent = ({ teams }) => {
  const center = [32.72706861138063, 74.85678459334625];
  const zoom = 14;
  const customMarkerIcon = () =>
    new L.Icon({
      iconUrl:
        "https://img.freepik.com/free-vector/illustration-business-people_53876-5879.jpg?w=740&t=st=1702220044~exp=1702220644~hmac=05cffa987b0acf8785ec4fda3d98db766dcffda42c186eee44fd6b2b86a447a6",
      iconSize: [25, 25],
      iconAnchor: [16, 16],
      popupAnchor: [0, -32],
    });

  return (
    <div className="flex flex-col p-6">
      <h1 className="text-3xl text-white font-semibold mb-4 ">
        Explore our registered <span className="text-red-500"> teams</span> on
        the map
      </h1>
      <div className="flex items-center justify-center">
        <MapContainer
          center={center}
          zoom={zoom}
          style={{ height: "600px", width: "1400px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />
          {teams.map((hospital, index) => (
            <Marker
              key={index}
              position={[hospital.lat, hospital.lng]}
              icon={customMarkerIcon()}
            >
              <Popup>{hospital.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
