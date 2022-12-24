import * as React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import DirectionsIcon from "@mui/icons-material/Directions";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const History = () => {
  const user = localStorage.getItem("user");
  const dataUser = JSON.parse(user);

  // mengambil data pesanan user dari API
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3100/pesanan/pesanan-user", {
        params: {
          id_user: dataUser.id_user,
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

  const [pesanan, setPesanan] = useState();
  const navigate = useNavigate();
  const handleClick = (event, index) => {
    setPesanan(index);
    navigate("detail", { state: { id: index } });
  };

  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      aria-label="contacts"
    >
      {data?.map((dataPesanan) => (
        <ListItem key={dataPesanan.id_pesanan} value={dataPesanan.id_pesanan}>
          <ListItemButton
            selected={pesanan === dataPesanan.id_pesanan}
            onClick={(event) => handleClick(event, dataPesanan.id_pesanan)}
          >
            <ListItemText
              primary={dataPesanan.jurusan}
              secondary={dataPesanan.to_char}
            />
            <ListItemIcon>
              <DirectionsIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
export default History;
