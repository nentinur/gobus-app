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
  IconButton,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
  q: "",
  format: "json",
  addressdetails: "addressdetails",
};

export const SearchLocation = (props) => {
  const { selectPosition, setSelectPosition } = props;
  const [searchLoc, setSearchLoc] = useState("");
  const [listPlace, setListPlace] = useState([]);
  return (
    <div>
      <TextField
        sx={{ margin: 1 }}
        id="outlined"
        label="Titik Naik"
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <LocationOn />
              </IconButton>
            </InputAdornment>
          ),
        }}
        value={searchLoc}
        onChange={(event) => {
          // Search
          setSearchLoc(event.target.value);
          const params = {
            q: searchLoc,
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
      />
      <div>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {listPlace.map((item) => {
            return (
              <div key={item?.place_id}>
                <ListItem
                  button
                  onClick={() => {
                    setSelectPosition(item?.display_name);
                  }}
                >
                  <ListItemIcon>
                    <LocationOn />
                  </ListItemIcon>
                  <ListItemText primary={item?.display_name} />
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
      </div>
    </div>
  );
};
