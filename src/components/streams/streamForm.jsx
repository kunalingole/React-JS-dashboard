import React, {Component } from 'react';
import { Field, reduxForm} from 'redux-form';
import Joi from "joi-browser";

import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

class StreamForm extends Component {  
    
  // check box 
  renderCheckbox = ({ input, label }) => {
    return (
     <Checkbox
         label={label}
         checked={input.value ? true : false}
         onCheck={input.onChange}
         />
      )
  }
   // ratio
  renderRadioGroup = ({ input, ...rest }) => {
   return (
      <RadioGroup
         {...input}
         {...rest}
         valueSelected={input.value}
         onChange={(event, value) => input.onChange(value)}
      />
   )
 }
 // select
  renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => {
    return (
      <Select
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
        {...custom}
        />
     )
  }
   
  // input
 inputRender = ({input,label, name, meta}) => {
        return(
         <div className="form-group">
            <label>{label} </label>
            <TextField
                variant="outlined"
                {...input }
                required
                fullWidth
                label={label}
               />

            { this.renderError(meta) }
         </div>
        )
   }

   renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => {
      return (
         <TextField
            hintText={label}
            floatingLabelText={label}
            errorText={touched && error}
            {...input}
            {...custom}
           />
       )
     }
   renderError({ error,touched }) {
      if(touched && error ){
         return (
            <div> {error}</div>
         );
      }
    }
   onSubmit = (fromProps) => {
      this.props.onSubmit(fromProps);
   
   }
   render(){
      return (
         <Container component="main" maxWidth="xs"> 
           <Grid item xs={12} > 
            <form className="formCustom" onSubmit={this.props.handleSubmit(this.onSubmit)} noValidate> 
              <Field  className="formControl" label="Please Enter Title"  name="title" component={this.inputRender}/>
              <Field  label="Please Enter description"  name="description" component={this.inputRender}/>
              <Button type="submit" fullWidth variant="contained"  color="primary">Submit</Button>
           </form>
           </Grid>
       </Container>
     )
  }
}

const validate= (fromValue)=>{
  const schema = {
      title: Joi.string()
           .required()
           .label("Title"),
       description: Joi.string()
           .required()
           .label("Description")
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
    form:'streamForm',
    validate:validate
})(StreamForm);

