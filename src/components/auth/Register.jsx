import React from 'react';
import { Field, reduxForm,reset} from 'redux-form';
import Joi from "joi-browser";

import { NavLink } from 'react-router-dom';

import Form from '../common/form';
import { connect } from 'react-redux';
import  { login } from '../../actions/user.actions';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

 class Register extends Form {
    onSubmit = (fromProps,dispatch) => {
       dispatch(reset('loginForm'));
    }
  
   render(){
      return (
        <Container component="main" maxWidth="xs"> 
         <Grid item xs={12} > 

        <Typography component="h1" className="from-title" variant="h5"> Sign up </Typography>
          <form className="formCustom" onSubmit={this.props.handleSubmit(this.onSubmit)} noValidate> 
             <Field  className="formControl" label="Please Enter First Name"  name="firstName" component={this.inputRender}/>
             <Field  className="formControl" label="Please Enter Last Name"  name="lastName" component={this.inputRender}/>
             <Field  className="formControl" label="Please Enter Email"  name="email" component={this.inputRender}/>
             <Field  label="Please Enter Password"  name="password" component={this.inputRender}/>

             <Button type="submit" fullWidth variant="contained"  color="primary">Submit</Button>
           </form>

         </Grid>
           <Grid container justify="flex-end">
            <Grid item>
              <NavLink to="/login" >
                  Already have an account? Sign in
              </NavLink>
            </Grid>
          </Grid>
         </Container>
      )
   }
 }

const validate= (fromValue)=> {
  const schema = {
    firstName: Joi.string()
           .required()
           .label("First Name"),
    lastName: Joi.string()
           .required()
           .label("Last Name"),
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

export default  reduxForm({
    form:'registerForm',
    validate:validate
})(Register);