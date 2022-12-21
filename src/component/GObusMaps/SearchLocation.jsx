import React, { useEffect } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";

export const SearchLocation = () => {
  const map = useMap();
  useEffect(() => {
    L.Control.geicoder({
      defaultMarkGeocode: false,
    })
      .on("markgeocode", function (e) {
        var bbox = e.geocode.bbox;
        var poly = L.polygon([
          bbox.getSouthEast(),
          bbox.getNorthEast(),
          bbox.getNorthWest(),
          bbox.getSouthWest(),
        ]).addTo(map);
        map.fitBounds(poly.getBounds());
      })
      .addTo(map);
  }, []);
  return null;
};
