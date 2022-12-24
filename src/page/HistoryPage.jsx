import * as React from "react";
import { Paper, Typography } from "@mui/material";
import GObusAppBar from "../component/Navigation/GObusAppBar";
import { useNavigate } from "react-router-dom";
import History from "../component/History";
import { useEffect } from "react";
import { LoginButton } from "../component/Login/LoginButton";

export default function HistoryPage() {
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
          <Typography sx={{ padding: 2 }} variant="h6">
            Riwayat Perjalanan
          </Typography>
          <History />
        </Paper>
      </div>
    );
  }
}
