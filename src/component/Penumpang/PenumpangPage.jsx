import * as React from "react";
import { Paper, Typography } from "@mui/material";
import GObusAppBar from "../Home/GObusAppBar";
import { Penumpang } from ".";
import { LoginButton } from "../Login/LoginButton";

export default function PenumpangPage() {
  const login = localStorage.getItem("login");
  if (login == "false") {
    return (
      <Paper elevation={3} sx={{ margin: 3 }}>
        <LoginButton />
      </Paper>
    );
  } else {
    return (
      <div>
        <GObusAppBar />
        <Paper elevation={3} sx={{ margin: 3 }}>
          <Typography sx={{ px: 3, paddingTop: 2 }} variant="h6">
            Jurusan - jam
          </Typography>
          <Penumpang />
        </Paper>
      </div>
    );
  }
}
