import React from "react";
import GObusAppBar from "../component/Navigation/GObusAppBar";
import EditIcon from "@mui/icons-material/Edit";
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
import { LoginButton } from "../component/Login/LoginButton";
import { EditProfile } from "../component/Profile/EditProfile";
import { Navigate, useNavigate } from "react-router-dom";

export const ProfilePage = () => {
  return (
    <div>
      <GObusAppBar />
      <IsLogin />
    </div>
  );
};

const IsLogin = () => {
  const [open, setOpen] = React.useState(false);

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
