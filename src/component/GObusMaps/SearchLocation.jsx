import { LocationOn } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  Divider,
  TextField,
  ListItemIcon,
} from "@mui/material";
import React, { useState } from "react";
const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
  q: "",
  format: "json",
  addressdetails: "addressdetails",
};

export const SearchLocation1 = (props) => {
  const { selectPosition, setSelectPosition } = props;
  const [searchLoc1, setSearchLoc1] = useState("");
  const [listPlace, setListPlace] = useState([]);
  return (
    <div>
      <TextField
        id="standard-search"
        label="Titik Naik"
        type="search"
        variant="standard"
        size="small"
        value={searchLoc1}
        onChange={(event) => {
          setSearchLoc1(event.target.value);
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          // Search
          const params = {
            q: searchLoc1,
            format: "json",
            addressdetails: 1,
            polygon_geojson: 0,
          };
          const queryString = new URLSearchParams(params).toString();
          const requestOptions = {
            method: "GET",
            redirect: "follow",
          };
          fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
            .then((response) => response.text())
            .then((result) => {
              console.log(JSON.parse(result));
              setListPlace(JSON.parse(result));
            })
            .catch((err) => console.log("err: ", err));
        }}
      >
        Search
      </Button>
      <div>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {listPlace?.map((item) => (
            <div key={item?.osm_id}>
              <ListItem
                button
                onClick={() => {
                  setSelectPosition(item);
                }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <LocationOn />
                  </ListItemIcon>
                  <ListItemText primary={item?.display_name} />
                </ListItemButton>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </div>
    </div>
  );
};

export const SearchLocation2 = () => {
  const [searchLoc2, setSearchLoc2] = useState("");
  const [listPlace, setListPlace] = useState([]);
  const { selectPosition, setSelectPosition } = props;
  return (
    <div>
      <TextField
        id="standard-search"
        label="Titik Naik"
        type="search"
        variant="standard"
        size="small"
        value={searchLoc2}
        onChange={(event) => {
          setSearchLoc2(event.target.value);
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          // Search
          const params = {
            q: searchLoc2,
            format: "json",
            addressdetails: 1,
            polygon_geojson: 0,
          };
          const queryString = new URLSearchParams(params).toString();
          const requestOptions = {
            method: "GET",
            redirect: "follow",
          };
          fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
            .then((response) => response.text())
            .then((result) => {
              console.log(JSON.parse(result));
              setListPlace(JSON.parse(result));
            })
            .catch((err) => console.log("err: ", err));
        }}
      >
        Search
      </Button>
      <div>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {listPlace?.map((item) => (
            <div key={item?.osm_id}>
              <ListItem
                button
                onClick={() => {
                  setSelectPosition(item);
                }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <LocationOn />
                  </ListItemIcon>
                  <ListItemText primary={item?.display_name} />
                </ListItemButton>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </div>
    </div>
  );
};
