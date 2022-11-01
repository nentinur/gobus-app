import * as React from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import DirectionsBus from "@mui/icons-material/DirectionsBus";
import { ListBus } from "../../Data";
import { ListItem, ListItemButton } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function FolderList(data) {
  console.log("aaaaaaaaaaaaaaa" + JSON.stringify(data));
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {data.map((ListBus) => (
            <ListItemButton onClick={handleClickOpen}>
              <ListItemAvatar>
                <Avatar>
                  <DirectionsBus />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={"Jurusan: " + ListBus.jurusan}
                secondary={"Kursi Kosong: " + ListBus.kursiKosong}
              />
            </ListItemButton>
          ))}
        </List>
      </div>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Booking Kursi</DialogTitle>
          <DialogContent>
            <PilihKursi />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Batal</Button>
            <Button onClick={handleClose}>Booking</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

const PilihKursi = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {ListBus[0].kursiKosong.map((hasilListBus) => (
        <Grid item xs={2} sm={4} md={4} key={hasilListBus}>
          <Button>{hasilListBus}</Button>
        </Grid>
      ))}
    </Grid>
  );
};
