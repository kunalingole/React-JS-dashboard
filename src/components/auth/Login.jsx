import React from 'react';
import { Field, reduxForm, reset} from 'redux-form';
import Joi from "joi-browser";

import { NavLink } from 'react-router-dom';

import Form from '../common/form';
import { connect } from 'react-redux';
import  { login } from '../../actions/user.actions';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


 class Login extends Form {
    onSubmit =async (fromProps, dispatch) => {
      // dispatch(reset('loginForm'));
      await this.props.login(fromProps);
       //this.props.history.push('/stream/new')
       window.location = '/app/dashboard'
    }
  
   render(){
      return (
        <Container component="main" maxWidth="xs"> 
         <Grid item xs={12} > 
           
         <Typography className="from-title" component="h1" variant="h5"> Sign in </Typography>

         <form className="formCustom" onSubmit={this.props.handleSubmit(this.onSubmit)} noValidate> 
            <Field  className="formControl" label="Please Enter Email"  name="email" component={this.inputRender}/>
            <Field  label="Please Enter Password"  name="password" component={this.inputRender}/>
            <Button type="submit" fullWidth variant="contained"  color="primary">Submit</Button>
           </form>
         </Grid>
         <br></br>
         <Grid container>
            <Grid item xs>
              <NavLink to="/forgot-password" variant="body2">Forgot password? </NavLink>
           </Grid>
            <Grid item>
              <NavLink to="/register" variant="body2"> Don't have an account? Sign Up</NavLink>
           </Grid>
          </Grid>
         </Container>
     )
   }
 }

const validate= (fromValue)=> {
  const schema = {
     email: Joi.string()
           .required()
           .label("Email"),
      password: Joi.string()
           .required()
           .label("Password")
    };

   const options = { abortEarly: false };
    const { error } = Joi.validate(fromValue, schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) { 
        errors[item.path[0]] = item.message;
    }
    return errors;
}
const mapStateToProps = (state) => {
  return {
    user:state.user
  };
}

const LoginMap = connect(mapStateToProps, { login })(Login)


export default  reduxForm({
    form:'loginForm',
    validate:validate
})(LoginMap);