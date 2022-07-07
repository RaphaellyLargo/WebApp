import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import IconLabelButtons from "../buttons/appchange-button";
import TextField from "@mui/material/TextField";
import UploadButtons from "../buttons/upload-button";
import SaveButton from "../buttons/save-button";
import BildschirmschonerButton from "../buttons/Bildschirmschoner-button";
import BildschirmschonerButtonTwo from "../buttons/Bildschirmschoner-buttontwo";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "start",
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
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
        <h1>Bildschirmschoner</h1>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sx={{ margin: "1px" }}>
            <Item>
              <h2>Upload</h2>
              <BildschirmschonerButton />
              <div>&nbsp;</div>
              <BildschirmschonerButtonTwo />
              <div>&nbsp;</div>
              <p>Keine Dateien</p>
            </Item>
          </Grid>
        </Grid>
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
