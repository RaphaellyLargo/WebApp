import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import UploadFileIcon from "@mui/icons-material/UploadFile";

export default function KundendateiButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" startIcon={<UploadFileIcon />}>
        Neue Kundendatei
      </Button>
    </Stack>
  );
}
