import React from "react";
import {
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Dialog,
  AppBar,
  Toolbar,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const EditProfile = () => {
  // post data yang diubah
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3100/user", {
        nama: values.nama,
        kontak: values.kontak,
        pass: values.pass,
      })
      .then(function (response) {
        console.log(response);
        // jika pendaftaran berhasil, tampilkan dialog
        if (response.status === 200) {
          setOpen(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // show password
  const handlePassVisibilty = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };

  // state untuk menampung value form login
  const [values, setValues] = useState({
    nama: "",
    kontak: "",
    pass: "",
  });
  console.log(values);

  // menutup dialog
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      {/* Dialog ubah profil */}
      <Button
        sx={{ margin: 1 }}
        startIcon={<EditIcon />}
        variant="outlined"
        size="small"
        onClick={handleClickOpen}
      >
        Ubah Profil
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Edit Profile
            </Typography>
            <Button
              type="submit"
              autoFocus
              color="inherit"
              onClick={handleSubmit}
            >
              save
            </Button>
          </Toolbar>
        </AppBar>
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ mt: 2 }}
            type="text"
            fullWidth
            label="Nama"
            placeholder="nama"
            variant="outlined"
            required
            onChange={(e) => setValues({ ...values, nama: e.target.value })}
          />
          <TextField
            sx={{ mt: 2 }}
            type="text"
            fullWidth
            label="No. Telpon"
            placeholder="kontak"
            variant="outlined"
            required
            onChange={(e) => setValues({ ...values, kontak: e.target.value })}
          />
          <TextField
            sx={{ mt: 2 }}
            type={values.showPass ? "text" : "password"}
            fullWidth
            label="Password"
            placeholder="Password"
            variant="outlined"
            required
            onChange={(e) => setValues({ ...values, pass: e.target.value })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handlePassVisibilty}
                    aria-label="toggle password"
                    edge="end"
                  >
                    {values.showPass ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>
      </Dialog>
    </div>
  );
};
