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
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

 class ForgotPassword extends Form {
    onSubmit = (fromProps,dispatch) => {
       console.log(fromProps);
       dispatch(reset('forgotPassForm'));
    }
  
   render(){
      return (
        <Container component="main" maxWidth="xs"> 
         <Grid item xs={12} > 
           
         <Typography className="from-title" component="h1" variant="h5"> Forgot Password  </Typography>
         <form className="formCustom" onSubmit={this.props.handleSubmit(this.onSubmit)} noValidate> 
            <Field  className="formControl" label="Please Enter Email"  name="email" component={this.inputRender}/>
            <Button type="submit" fullWidth variant="contained"  color="primary">Submit</Button>
           </form>
         </Grid>
         <br></br>
         <Grid container r justify="flex-end">
            <Grid item>
              <NavLink to="/register" variant="body2"> Already have an account? Sign in</NavLink>
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
    form:'forgotPassForm',
    validate:validate
})(ForgotPassword);