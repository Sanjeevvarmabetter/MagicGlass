import React, { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import customMarkerIcon from "./marker.svg"; // Provide the correct relative path

const SimpleMap = () => {
  const mapRef = useRef(null);
  const [popupContent, setPopupContent] = useState("Default content");

  // Define the marker icon
  const customIcon = L.icon({
    iconUrl: customMarkerIcon,
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
  });

  // Define multiple marker locations
  const markerLocations = [
    { position: [17.6868, 83.2185], content: "valorant tournment available" },
    { position: [17.686, 82.219], content: "cricket competition" },
    // Add more locations as needed
  ];

  const handleMarkerClick = (content) => {
    // Update the popup content based on the marker clicked
    setPopupContent(content);
  };

  return (
    <MapContainer center={[17.6868, 83.2185]} zoom={13} ref={mapRef} style={{ height: "100vh", width: "100vw" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Map over markerLocations array to render multiple markers */}
      {markerLocations.map((location, index) => (
        <Marker key={index} position={location.position} icon={customIcon} eventHandlers={{ click: () => handleMarkerClick(location.content) }}>
          <Popup>{popupContent}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default SimpleMap;
