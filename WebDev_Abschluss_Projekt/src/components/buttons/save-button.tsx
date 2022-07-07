import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SaveIcon from '@mui/icons-material/Save';


export default function IconButtons() {
  return (
    <div style={{ background: '#AAACAB', borderRadius: '50%' }}>
    <Stack direction="row" spacing={1}>
      <IconButton color="primary" aria-label="add to shopping cart" size="large"> 
        <SaveIcon />
      </IconButton>
    </Stack>
    </div>
  );
}