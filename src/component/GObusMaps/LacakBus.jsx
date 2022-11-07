import { LeafletTrackingMarker } from "react-leaflet-tracking-marker";
import { useEffect, useState } from " react";
import { MapContainer, TileLayer } from "react-leaflet";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";

function AirplaneMarker({ data }) {
  const { latitude, longitude } = data;
  const [prevPos, setPrevPos] = useState([latitude, longitude]);

  useEffect(() => {
    if (prevPos[1] !== longitude && prevPos[0] !== latitude)
      setPrevPos([latitude, longitude]);
  }, [latitude, longitude, prevPos]);

  return (
    <LeafletTrackingMarker
      icon={<DirectionsBusIcon />}
      position={[latitude, longitude]}
      previousPosition={prevPos}
      duration={1000}
    />
  );
}

const dataStory = [
  {
    lat: 53.22376666666667,
    lng: 50.745841666666664,
  },
  {
    lat: 53.22376666666667,
    lng: 50.745841666666664,
  },
  {
    lat: 53.223728333333334,
    lng: 50.74598666666667,
  },
  {
    lat: 53.223705,
    lng: 50.746021666666664,
  },
  {
    lat: 53.22365166666667,
    lng: 50.746075,
  },
];

let cursor = 0;

export default function LacakBus() {
  const [currentTrack, setCurrentTrack] = useState({});

  useEffect(() => {
    setCurrentTrack(dataStory[cursor]);

    const interval = setInterval(() => {
      if (cursor === dataStory.length - 1) {
        cursor = 0;
        setCurrentTrack(dataStory[cursor]);
        return;
      }

      cursor += 1;
      setCurrentTrack(dataStory[cursor]);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <MapContainer
        style={{ height: "calc(100vh - 52px)" }}
        center={[53.22376666666667, 50.745841666666664]}
        zoom={17}
        minZoom={5}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <AirplaneMarker data={currentTrack ?? {}} />
      </MapContainer>
    </div>
  );
}
