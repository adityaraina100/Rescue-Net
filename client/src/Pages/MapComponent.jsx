/* eslint-disable react/prop-types */

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ center, zoom, hospitalsData, policeStationsData }) => {
  return (
    <div className="flex items-center justify-center">
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "1000px", width: "1000px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        {hospitalsData.map((hospital, index) => (
          <Marker key={index} position={[hospital.lat, hospital.lng]}>
            <Popup>{hospital.name}</Popup>
          </Marker>
        ))}
        {policeStationsData.map((policeStation, index) => (
          <Marker key={index} position={[policeStation.lat, policeStation.lng]}>
            <Popup>{policeStation.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
