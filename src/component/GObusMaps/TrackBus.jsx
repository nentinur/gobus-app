import React, { useState, useEffect } from "react";
import Leaflet from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  LayerGroup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function TrackBus(props) {
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
      <TrackMaps no_bus={props.no_bus} />
      <CurrrentPosition />
    </MapContainer>
  );
}

function TrackMaps(props) {
  const map = useMap();
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  // mengambil data posisi bus setiap 3 detik
  useEffect(() => {
    setInterval(() => {
      axios
        .get("http://localhost:3100/posisi", {
          params: {
            id: props.no_bus,
          },
        })
        .then(function (response) {
          console.log("get: ", response.data);
          setLat(parseFloat(response.data.lat));
          setLng(parseFloat(response.data.lng));
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }, 3000);
  }, []);

  return (
    <Marker position={[lat, lng]}>
      <Popup>bus</Popup>
    </Marker>
  );
}

// mengambil posisi terkini
const CurrrentPosition = () => {
  const map = useMap();
  const [position, setPosition] = useState(null);
  useEffect(() => {
    setInterval(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      });
    }, 3000);
  }, [map]);

  console.log(position);
  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
};
