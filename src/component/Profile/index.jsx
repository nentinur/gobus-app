import * as React from "react";
import { Avatar, Card, CardHeader, Button } from "@mui/material";

const Profile = () => {
  return (
    <div>
      <Card sx={{ maxWidth: "100%" }}>
        <CardHeader
          avatar={<Avatar>P</Avatar>}
          action={
            <Button variant="contained" size="small">
              Logout
            </Button>
          }
          title="Pengguna"
          subheader="@pengguna_01"
        />
      </Card>
    </div>
  );
};
export default Profile;
