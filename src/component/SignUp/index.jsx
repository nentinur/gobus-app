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

export const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Login</h2>
        </Grid>
        <TextField
          style={{ marginBottom: 5 }}
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
        />
        <TextField
          style={{ marginBottom: 5 }}
          label="Password"
          placeholder="Enter password"
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
          Login
        </Button>
        <Typography>
          Belum punya akun?<Link href="#">Daftar</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};
