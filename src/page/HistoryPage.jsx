import * as React from "react";
import { Paper, Typography } from "@mui/material";
import GObusAppBar from "../component/Navigation/GObusAppBar";
import { useNavigate } from "react-router-dom";
import History from "../component/History";

export default function ChatPage() {
  const navigate = useNavigate();
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
