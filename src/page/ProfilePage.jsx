import React from "react";
import GObusAppBar from "../component/Navigation/GObusAppBar";
import Profile from "../component/Profile";
import History from "../component/History";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Paper,
  Typography,
  Avatar,
  Card,
  CardHeader,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { LoginButton } from "../component/Login/LoginButton";
import { useState } from "react";

export const ProfilePage = () => {
  return (
    <div>
      <GObusAppBar />
      <IsLogin />
    </div>
  );
};

const IsLogin = () => {
  const [login, setLogin] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleLogout = () => {
    setLogin(false);
  };
  if (login == false) {
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
              action={
                <IconButton
                  color="primary"
                  aria-label="logout"
                  onClick={handleClickOpen}
                >
                  <LogoutIcon />
                </IconButton>
              }
              title="Pengguna"
              subheader="@pengguna_01"
            />
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
        <Paper elevation={3} sx={{ margin: 3 }}>
          <Typography sx={{ padding: 2 }} variant="h6">
            Riwayat Perjalanan
          </Typography>
          <History />
        </Paper>
      </div>
    );
  }
};
