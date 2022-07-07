import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import CodeIcon from "@mui/icons-material/Code";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import FolderIcon from "@mui/icons-material/Folder";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }: any) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
          <Divider />
          <ListItem button component={Link} to="/themeinfo">
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={"Theme Information"} />
          </ListItem>

          <ListItem button component={Link} to="/backgroundimg">
            <ListItemIcon>
              <AddAPhotoIcon />
            </ListItemIcon>
            <ListItemText primary={"Hintergrund Bild"} />
          </ListItem>

          <ListItem button component={Link} to="/bildschirmschoner">
            <ListItemIcon>
              <AddToPhotosIcon />
            </ListItemIcon>
            <ListItemText primary={"Bildschirmschoner"} />
          </ListItem>

          <ListItem button component={Link} to="/styles">
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary={"Styles"} />
          </ListItem>

          <ListItem button component={Link} to="/toene">
            <ListItemIcon>
              <MusicNoteIcon />
            </ListItemIcon>
            <ListItemText primary={"Töne"} />
          </ListItem>

          <ListItem button component={Link} to="/kundendateien">
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary={"Kundendateien"} />
          </ListItem>
        </List>
      </Drawer>
      <DrawerHeader />
    </Box>
  );
}


