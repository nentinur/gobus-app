import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const paperStyle = {
    padding: 20,
    width: 280,
    margin: "20px auto",
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <Paper elevation={10} style={paperStyle}>
      <Grid align="center">
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <h2>Login</h2>
      </Grid>
      <TextField
        style={{ marginBottom: 5 }}
        label="Nama"
        placeholder="Masukkan Nama"
        fullWidth
        required
      />
      <TextField
        style={{ marginBottom: 5 }}
        label="No Telpon"
        placeholder="masukkan No Telpon"
        fullWidth
        required
      />
      <TextField
        style={{ marginBottom: 5 }}
        label="Password"
        placeholder="Masukkan Password"
        type="password"
        fullWidth
        required
      />
      <Button
        style={{ marginBottom: 5 }}
        type="submit"
        color="primary"
        variant="contained"
        fullWidth
      >
        Daftar
      </Button>
      <Typography>
        Sudah punya akun?<Button onClick={handleClick}>Login</Button>
      </Typography>
    </Paper>
  );
};
