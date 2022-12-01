import * as React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
} from "@mui/material";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";

const GObusAppBar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit">
              <DirectionsBusIcon />
              <Typography variant="h6">Gobus</Typography>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
export default GObusAppBar;
