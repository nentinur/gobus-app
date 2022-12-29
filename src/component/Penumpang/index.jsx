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
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      aria-label="contacts"
    >
      {/* {data?.map((dataPesanan) => ( 
          key={dataPesanan.id_pesanan} value={dataPesanan.id_pesanan}*/}
      <ListItem>
        <ListItemButton
        //   selected={pesanan === dataPesanan.id_pesanan}
        //   onClick={(event) => handleClick(event, dataPesanan.id_pesanan)}
        >
          <ListItemText primary={data.nama} secondary={data.kontak} />
          <IconButton color="primary" href="http://wa.me/6287745677969">
            <WhatsAppIcon />
          </IconButton>
        </ListItemButton>
      </ListItem>
      {/* ))} */}
    </List>
  );
};
