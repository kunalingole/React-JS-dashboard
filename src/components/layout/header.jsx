import React,{ Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});
const Header = ({user}) =>{
  const classes = useStyles();
  return (
     <div className={classes.root}> 

        {!user && <AppBar position="static" color="primary"> 
           <Container>
            <ul className="nav justify-content-center ulList">
            {user &&  <Fragment>
              <NavLink className="nav-item" to='/'> Stream  List </NavLink>
              <NavLink className="nav-item" to='/stream/new'> Stream Create </NavLink>
              <NavLink className="nav-item" to='/logout'>Logout</NavLink>
              <NavLink className="nav-item" to='/dashboard'>Dashboard</NavLink>
             </Fragment>
             }
            
            {!user && <Fragment> 
             <NavLink className="nav-item" to='/register'>Register</NavLink>
             <NavLink className="nav-item" to='/login'>Login</NavLink>
             </Fragment> }
            </ul>
          </Container>
            </AppBar> }
      </div>
  )
}

export default Header;
