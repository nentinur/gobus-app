import * as React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  IconButton,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import axios from "axios";
import { useState, useEffect } from "react";

export const Penumpang = () => {
  const bus = localStorage.getItem("bus");
  const dataBus = JSON.parse(bus);

  // mengambil data pesanan user dari API
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3100/pesanan/pesanan-jadwal", {
        params: {
          id: dataBus.id_jadwal,
        },
      })
      .then(function (response) {
        setData(response.data);
        console.log("ini response.data: ", response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  console.log("ini data: ", data);

  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      aria-label="contacts"
    >
      {data?.map((dataPesanan) => (
        <ListItem key={dataPesanan.id_pesanan} value={dataPesanan.id_pesanan}>
          <ListItemButton>
            <ListItemText
              primary={dataPesanan.nama}
              secondary={dataPesanan.kontak}
            />
            <IconButton color="primary" href="http://wa.me/6287745677969">
              <WhatsAppIcon />
            </IconButton>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
