import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import MoreIcon from "@mui/icons-material/MoreVert";
import UploadButtons from "../buttons/upload-button";
import UploadPicture from "../buttons/UploadMenu";
import SaveButton from "../buttons/save-button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "start",
  color: theme.palette.text.secondary,
}));

export default function GridStyles() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <Box sx={{ width: "60%" }}>
        <h1> Styles</h1>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sx={{ margin: "1px" }}>
            <Item>
              <h2>Hochgeladen</h2>
              <div>&nbsp;</div>

              <Item
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {" "}
                Nein
                <UploadPicture />
              </Item>
            </Item>
          </Grid>

          <Grid item xs={12} sx={{ margin: "1px" }}>
            <Item>
              <h2>Pfad</h2>
              <div>&nbsp;</div>
              <Item>styles.css</Item>
            </Item>
          </Grid>
          <Grid item xs={12} sx={{ margin: "1px" }}>
            <Item>
              <h2>Warnungen</h2>
              <div>&nbsp;</div>
            </Item>
          </Grid>
          <Grid item xs={12} sx={{ margin: "1px" }}></Grid>
        </Grid>

        <Item
          sx={{
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "flex-end",
          }}
        ></Item>
        <Item
          sx={{
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <SaveButton />
        </Item>
      </Box>
    </div>
  );
}
