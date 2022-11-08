import * as React from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import DirectionsBus from "@mui/icons-material/DirectionsBus";
import { ListItem, ListItemButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { ListBus, jurusanBus } from "../../Data";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Booking } from "./Booking";

export const FilterBus = () => {
  const [jurusan, setJurusan] = React.useState("");
  const PilihJurusan = (event) => {
    setJurusan(event.target.value);
  };
  const [jam, setJam] = React.useState("");
  const PilihJam = (event) => {
    setJam(event.target.value);
  };
  const dataJurusan = ListBus.filter((bus) => bus.jurusan === jurusan);
  return (
    <div>
      <TextField
        id="pilih-jurusan"
        select
        label="Pilih Jurusan Bus"
        value={jurusan}
        onChange={PilihJurusan}
      >
        {jurusanBus.map((option) => (
          <MenuItem key={option.label} value={option.label}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <FilteredBus dataJurusan={dataJurusan} />
      <Booking />
    </div>
  );
};

const FilteredBus = (props) => {
  console.log("propertinya filteredbus nih ges: " + JSON.stringify(props));
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {props.dataJurusan?.map((ListBus) => (
          <ListItemButton>
            <ListItemAvatar>
              <Avatar>
                <DirectionsBus />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={"Jurusan: " + ListBus.jurusan}
              secondary={
                "Jam: " +
                ListBus.keberangkatan +
                " | Kursi Kosong: " +
                ListBus.kursiKosong.length
              }
            />
          </ListItemButton>
        ))}
      </List>
    </div>
  );
};

const PilihKursi = (props) => {
  console.log("pilih kursi : " + JSON.stringify(props));
  const [pilih, setPilih] = React.useState();
  // const pilihanKursi = () => {
  //   setPilih(pilihan);
  // };
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {props.kursi[0].kursiKosong?.map((hasilListBus) => (
        <Grid item xs={2} sm={4} md={4} key={hasilListBus}>
          {console.log(hasilListBus)}
          <Button
            variant="outlined"
            onClick={() => {
              setPilih(hasilListBus);
            }}
          >
            {hasilListBus}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};
