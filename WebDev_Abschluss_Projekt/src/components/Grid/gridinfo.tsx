import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import IconLabelButtons from '../buttons/appchange-button';
import TextField from '@mui/material/TextField';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'start',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (

    <div style={{ 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",}}>

    <Box sx={{ width: '60%' }}>
    <h1>Theme Information</h1>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sx={{ margin: '1px' }}>
          <Item><h2>Theme Name</h2><div>
        <TextField
         required
         id="standard-required"
         label="Required"
         defaultValue="Input Name"
         variant="standard"
        /> </div></Item>
        </Grid>
        <Grid item xs={12} sx={{ margin: '1px' }}>
          <Item><h2>Bildschirmauflösung Gerät</h2><div>&nbsp;</div><div>480 x 272 (px)</div>
          
          
          </Item>
        </Grid>
        <Grid item xs={12} sx={{ margin: '1px' }}>
          <Item><h2>App</h2><div>&nbsp;</div><div>G7 Access App </div></Item>
        </Grid>
        <Grid item xs={12} sx={{ margin: '1px' }}>
          <Item><div>&nbsp;</div><IconLabelButtons /><div>&nbsp;</div></Item>
        </Grid>
      </Grid>
      
    </Box>
    </div>
  );
}
