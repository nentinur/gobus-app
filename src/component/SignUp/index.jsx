import React from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const SignUp = () => {
  // mengirimkan value form login
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://localhost:3100/user", {
        nama: values.nama,
        kontak: values.kontak,
        pass: values.pass,
      })
      .then(function (response) {
        console.log(response);
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

  //untuk pindah ke halaman sign up
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  // state untuk menampung value form login
  const [values, setValues] = useState({
    nama: "",
    kontak: "",
    pass: "",
    showPass: false,
  });
  console.log(values);

  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Paper sx={{ padding: 5 }}>
          <form onSubmit={handleSubmit}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <TextField
                  type="text"
                  fullWidth
                  label="Nama"
                  placeholder="nama"
                  variant="outlined"
                  required
                  onChange={(e) =>
                    setValues({ ...values, nama: e.target.value })
                  }
                />
              </Grid>
              <Grid item>
                <TextField
                  type="text"
                  fullWidth
                  label="No. Telpon"
                  placeholder="kontak"
                  variant="outlined"
                  required
                  onChange={(e) =>
                    setValues({ ...values, kontak: e.target.value })
                  }
                />
              </Grid>
              <Grid item>
                <TextField
                  type={values.showPass ? "text" : "password"}
                  fullWidth
                  label="Password"
                  placeholder="Password"
                  variant="outlined"
                  required
                  onChange={(e) =>
                    setValues({ ...values, pass: e.target.value })
                  }
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
              </Grid>

              <Grid item>
                <Button type="submit" fullWidth variant="contained">
                  Daftar
                </Button>
              </Grid>
              <Grid item>
                <Typography>
                  Sudah punya akun?
                  <Button onClick={handleClick}>Login</Button>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};
