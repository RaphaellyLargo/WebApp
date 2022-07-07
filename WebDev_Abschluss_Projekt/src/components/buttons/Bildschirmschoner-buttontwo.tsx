import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

export default function BildschirmschonerButtonTwo() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" startIcon={<InsertPhotoIcon />}>
        Ohne Bearbeitung Hochladen
      </Button>
    </Stack>
  );
}
