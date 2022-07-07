import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import BorderColorIcon from "@mui/icons-material/BorderColor";

export default function BildschirmschonerButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" startIcon={<BorderColorIcon />}>
        Bearbeiten und Hochladen
      </Button>
    </Stack>
  );
}
