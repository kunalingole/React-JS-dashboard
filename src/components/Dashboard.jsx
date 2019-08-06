import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
 const Dashboard =()=>{

  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(true);
  }

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }
 
  return (
    <Grid item xs={12}>
      <Paper>
       <h3> Order</h3>
       <Button onClick={handleClick}>Open simple snackbar</Button>

       <Snackbar
        className="success"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
         open={open}
         autoHideDuration={6000}
         onClose={handleClose}
         variant="success"
         ContentProps={{
          'aria-describedby': 'message-id',
        }}
         message={<span id="message-id">Note archived</span>}
         action={[
          <Button key="undo" color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>,
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
           
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </Paper>
   </Grid>
  );
}

export default Dashboard;