import React from "react";
import GObusAppBar from "../Home/GObusAppBar";
import DirectionsBus from "@mui/icons-material/DirectionsBus";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Paper,
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { LoginButton } from "../Login/LoginButton";
import { useNavigate } from "react-router-dom";
import { EditBus } from "./EditBus";
import { useState, useEffect } from "react";
import axios from "axios";

export const ProfilePageDriver = () => {
  return (
    <div>
      <GObusAppBar />
      <IsLogin />
    </div>
  );
};

const IsLogin = () => {
  const [open, setOpen] = React.useState(false);

  const bus = localStorage.getItem("bus");
  const user = localStorage.getItem("user");
  const login = localStorage.getItem("login");
  const dataUser = JSON.parse(user);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const navigate = useNavigate();
  const handleClickEdit = () => {
    navigate("edit");
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleLogout = () => {
    setOpen(false);
    localStorage.setItem("login", false);
  };

  const [data, setData] = useState([]);
  axios
    .get("http://localhost:3100/bus/jadwal", {
      params: {
        id_jadwal: bus.id_jadwal,
      },
    })
    .then(function (response) {
      // handle success
      console.log(response.data);
      setData(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  if (login == "false") {
    return (
      <Paper elevation={3} sx={{ margin: 3 }}>
        <LoginButton />
      </Paper>
    );
  } else {
    return (
      <div>
        <Paper elevation={3} sx={{ margin: 3 }}>
          <Card sx={{ maxWidth: "100%" }}>
            <CardHeader
              avatar={<Avatar>P</Avatar>}
              title={dataUser.nama}
              subheader={dataUser.kontak}
            />
            <CardContent>
              <Button
                sx={{ margin: 1 }}
                startIcon={<LogoutIcon />}
                variant="outlined"
                size="small"
                onClick={handleClickEdit}
              >
                Edit Profil
              </Button>
              <Button
                sx={{ margin: 1 }}
                startIcon={<LogoutIcon />}
                variant="outlined"
                size="small"
                onClick={handleClickOpen}
              >
                Logout
              </Button>
            </CardContent>
          </Card>
        </Paper>
        <Paper elevation={3} sx={{ margin: 3 }}>
          <Card sx={{ maxWidth: "100%" }}>
            <CardHeader
              avatar={
                <Avatar>
                  <DirectionsBus />
                </Avatar>
              }
              title={"No bus"}
              subheader={"Jurusan - Jam"}
            />
            <CardContent>
              <EditBus />
            </CardContent>
          </Card>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">Keluar</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Yakin mau keluar?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Batal</Button>
              <Button onClick={handleLogout} autoFocus>
                Ya
              </Button>
            </DialogActions>
          </Dialog>
        </Paper>
      </div>
    );
  }
};
