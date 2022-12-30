import React from "react";
import L from "leaflet";
import Leaflet from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import { useEffect } from "react";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function Maps(props) {
  return (
    <MapContainer
      center={[-6.9029096, 107.6539107]}
      zoom={15}
      style={{ height: "400px", margin: "10px", zIndex: 0 }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <RoutingMachine latAkhir={props.latAkhir} lonAkhir={props.lonAkhir} />
    </MapContainer>
  );
}

export const RoutingMachine = (props) => {
  console.log(props.latAkhir, props.lonAkhir);
  const map = useMap();
  useEffect(() => {
    map.on("click", function (e) {
      L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
      L.Routing.control({
        waypoints: [
          L.latLng(e.latlng.lat, e.latlng.lng),
          L.latLng(props.latAkhir, props.lonAkhir),
        ],
        lineOptions: {
          styles: [
            {
              color: "blue",
              weight: 4,
              opacity: 0.7,
            },
          ],
        },
        routeWhileDragging: false,
        geocoder: L.Control.Geocoder.nominatim(),
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        showAlternatives: true,
      }).addTo(map);
    });
  }, []);

  // const map = useMap();
  // L.Routing.control({
  //   waypoints: [
  //     L.latLng(props.latNaik, props.lonNaik),
  //     L.latLng(props.latTurun, props.lonTurun),
  //   ],
  //   lineOptions: {
  //     styles: [
  //       {
  //         color: "blue",
  //         weight: 4,
  //         opacity: 0.7,
  //       },
  //     ],
  //   },
  //   fitSelectedRoutes: true,
  //   draggableWaypoints: false,
  //   routeWhileDragging: false,
  //   addWaypoints: false,
  // }).addTo(map);

  return null;
};
