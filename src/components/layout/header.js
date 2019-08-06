import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});
const Header = () =>{
  const classes = useStyles();
  return (
     <div className={classes.root}> 
        <AppBar position="static" color="primary"> 
           <Container>
            <ul className="nav justify-content-center ulList">
             <NavLink className="nav-item" to='/'> Stream  List </NavLink>
             <NavLink className="nav-item" to='/register'>Register</NavLink>
             <NavLink className="nav-item" to='/stream/new'> Stream Create </NavLink>
            </ul>
          </Container>
          </AppBar>
      </div>
  )
}

export default Header;