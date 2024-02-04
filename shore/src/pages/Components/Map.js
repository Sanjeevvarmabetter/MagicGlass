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
    { position: [42.546245, 42.546245], content: ' QWERTYUIOPASDFGHJKLZXCVBNM ' },
    { position: [23.424076, 23.424076], content: ' QWERTYUIOPASDFGHJKLZXCVBNM ' },
    { position: [33.93911, 33.93911], content: ' QWERTYUIOPASDFGHJKLZXCVBNM ' },
    { position: [17.060816, 17.060816], content: ' QWERTYUIOPASDFGHJKLZXCVBNM ' },
    { position: [18.220554, 18.220554], content: ' QWERTYUIOPASDFGHJKLZXCVBNM ' },
    { position: [41.153332, 41.153332], content: ' QWERTYUIOPASDFGHJKLZXCVBNM ' },
    { position: [40.069099, 40.069099], content: ' QWERTYUIOPASDFGHJKLZXCVBNM ' },
    { position: [12.226079, 12.226079], content: ' QWERTYUIOPASDFGHJKLZXCVBNM ' },
    { position: [-11.202692, -11.202692], content: ' QWERTYUIOPASDFGHJKLZXCVBNM ' },
    { position: [-75.250973, -75.250973], content: ' QWERTYUIOPASDFGHJKLZXCVBNM ' },
    { position: [-38.416097, -38.416097], content: ' QWERTYUIOPASDFGHJKLZXCVBNM ' },
    { position: [-14.270972, -14.270972], content: ' QWERTYUIOPASDFGHJKLZXCVBNM ' },
    { position: [47.516231, 47.516231], content: ' QWERTYUIOPASDFGHJKLZXCVBNM ' },
    { position: [-25.274398, -25.274398], content: ' QWERTYUIOPASDFGHJKLZXCVBNM ' },
    { position: [12.52111, 12.52111], content: ' QWERTYUIOPASDFGHJKLZXCVBNM ' },
    { position: [40.143105, 40.143105], content: ' QWERTYUIOPASDFGHJKLZXCVBNM ' },
    { position: [43.915886, 43.915886], content: ' QWERTYUIOPASDFGHJKLZXCVBNM ' },
    { position: [13.193887, 13.193887], content: ' QWERTYUIOPASDFGHJKLZXCVBNM ' },
    { position: [23.684994, 23.684994], content: ' QWERTYUIOPASDFGHJKLZXCVBNM ' },
    { position: [50.503887, 50.503887], content: ' QWERTYUIOPASDFGHJKLZXCVBNM ' },
    { position: [12.238333, 12.238333], content: ' QWERTYUIOPASDFGHJKLZXCVBNM ' },
    { position: [42.733883, 42.733883], content: ' QWERTYUIOPASDFGHJKLZXCVBNM ' },
    { position: [25.930414, 25.930414], content: ' QWERTYUIOPASDFGHJKLZXCVBNM ' },
    
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
