import React, {Component } from 'react';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';

class Form extends Component {  
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

  // input
 inputRender = ({input,label, name, meta}) => {
        return(
         <div className="form-group">
           
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

   renderError({ error,touched }) {
      if(touched && error ){
         return (
            <div> {error}</div>
         );
      }
    }
}

export default Form;

