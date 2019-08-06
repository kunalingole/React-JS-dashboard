import React, {Component } from 'react';
import { connect } from 'react-redux';
import  { createrStream } from '../../actions/stream.actions';
import StreamForm from './streamForm';
import Container from '@material-ui/core/Container';
import LayoutContainer from '../layout/layoutContainer';

class StreamCreate extends Component {
 
   onSubmit = (fromProps) =>{
      this.props.createrStream(fromProps);
   
   }
   render(){
      return (
        <LayoutContainer> 
         <Container component="main" maxWidth="xs">
          <h3> Create Stream  </h3>
          <StreamForm onSubmit={this.onSubmit}/>
        </Container>
        </LayoutContainer> 
     )
  }
}


export default connect(null,{createrStream})(StreamCreate)