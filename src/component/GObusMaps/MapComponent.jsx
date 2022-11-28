import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import RoutingMachine from "./RouteMaps";

const Maps = (props) => {
  return (
    <MapContainer
      doubleClickZoom={false}
      id="map"
      zoom={14}
      center={[33.5024, 36.2988]}
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"
      />
      <RoutingMachine />
    </MapContainer>
  );
};

export default Maps;
