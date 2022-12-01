import GObusAppBar from "../component/Navigation/GObusAppBar";
import Profile from "../component/Profile";
import History from "../component/History";

import { Paper, Typography } from "@mui/material";
import { LoginButton } from "../component/Login/LoginButton";

export const ProfilePage = () => {
  return (
    <div>
      <GObusAppBar />
      <Paper elevation={3} sx={{ margin: 3 }}>
        <LoginButton />
      </Paper>
      <Paper elevation={3} sx={{ margin: 3 }}>
        <Profile />
      </Paper>
      <Paper elevation={3} sx={{ margin: 3 }}>
        <Typography sx={{ padding: 2 }} variant="h6">
          Riwayat Perjalanan
        </Typography>
        <History />
      </Paper>
    </div>
  );
};
