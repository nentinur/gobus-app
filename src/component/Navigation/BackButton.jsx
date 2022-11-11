import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => navigate(-1)}
            aria-label="close"
          >
            <ArrowBackIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};
