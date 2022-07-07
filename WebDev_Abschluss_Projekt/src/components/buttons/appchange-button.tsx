import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import CodeIcon from "@mui/icons-material/Code";

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" endIcon={<CodeIcon />}>
        App ändern
      </Button>
    </Stack>
  );
}