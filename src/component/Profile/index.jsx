import * as React from "react";
import { Avatar, Card, CardHeader, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const Profile = () => {
  return (
    <div>
      <Card sx={{ maxWidth: "100%" }}>
        <CardHeader
          avatar={<Avatar>P</Avatar>}
          action={
            <IconButton color="primary" aria-label="add to shopping cart">
              <LogoutIcon />
            </IconButton>
          }
          title="Pengguna"
          subheader="@pengguna_01"
        />
      </Card>
    </div>
  );
};
export default Profile;
