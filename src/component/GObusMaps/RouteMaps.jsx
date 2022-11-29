import L from "leaflet";
import "leaflet-routing-machine";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

import React from "react";
import Leaflet from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { LocationMarker } from ".";

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
      center={[-6.9316648, 107.7229107]}
      zoom={20}
      style={{ height: "400px", margin: "10px", zIndex: 0 }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <RoutingMachine
        latNaik={props.latNaik}
        lonNaik={props.lonNaik}
        latTurun={props.latTurun}
        lonTurun={props.lonTurun}
      />
    </MapContainer>
  );
}

const RoutingMachine = (props) => {
  let latLng1 = L.latLng(props.latNaik, props.lonNaik);
  let latLng2 = L.latLng(props.latTurun, props.lonTurun);

  let naik = new L.Routing.Waypoint(latLng1);
  let turun = new L.Routing.Waypoint(latLng2);

  const map = useMap();
  useEffect(() => {
    L.Routing.control({
      waypoints: [latLng1, latLng2],
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
      addWaypoints: false,
      fitSelectedRoutes: true,
      showAlternatives: true,
    }).addTo(map);

    // let routeUs = L.Routing.osrmv1();
    // routeUs.route([naik, turun], (err, routes) => {
    //   if (!err) {
    //     let best = 100000000000000;
    //     let bestRoute = 0;
    //     let i;
    //     for (i in routes) {
    //       if (routes[i].summary.totalDistance < best) {
    //         bestRoute = i;
    //         best = routes[i].summary.totalDistance;
    //       }
    //     }
    //     console.log("best route", routes[bestRoute]);
    //     L.Routing.line(routes[bestRoute], {
    //       styles: [
    //         {
    //           color: "green",
    //           weight: "10",
    //         },
    //       ],
    //     }).addTo(map);
    //   }
    // });
  }, []);
  return null;
};
