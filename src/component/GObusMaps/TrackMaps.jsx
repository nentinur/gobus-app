import React, { useState, useEffect } from "react";
import L from "leaflet";
import Leaflet from "leaflet";
import { Marker, Popup, useMap, MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function TrackMaps(props) {
  return (
    <MapContainer
      center={[-6.9316648, 107.7229107]}
      zoom={20}
      style={{ height: "400px", margin: "10px", zIndex: 0 }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Track />
    </MapContainer>
  );
}

export function Track(props) {
  const map = useMap();
  const [position, setPosition] = useState(null);

  const bus = localStorage.getItem("bus");
  const dataBus = JSON.parse(bus);
  useEffect(() => {
    setInterval(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());

        axios
          .post("http://localhost:3100/posisi/update", {
            id: dataBus.no_bus,
            latitude: e.latlng.lat,
            longitude: e.latlng.lng,
          })
          .then((res) => {})
          .catch((err) => console.error(err));
      });
    }, 3000);
  }, [map]);

  console.log(position);
  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
