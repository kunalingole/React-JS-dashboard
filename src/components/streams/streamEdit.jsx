import React, {Component } from 'react';
import { connect } from 'react-redux';

import _ from  'lodash';
import  { fetchStream, editStream } from '../../actions/stream.actions' ;
import StreamForm  from './streamForm';

class  StreamEdit extends Component  {
   componentDidMount(){
       this.props.fetchStream(this.props.match.params.id);
   }

   onSubmit = (fromProps) =>{
     this.props.editStream(this.props.match.params.id, fromProps);
      console.log(fromProps);
   }
   
  render(){
    
   if(!this.props.stream){
      return (
         <div> <h1> Loadingng..</h1> </div>
      )
    }
     return(
       <div>
          <h2>Edit Stream</h2>
         
           <StreamForm 
            initialValues={_.pick(this.props.stream,'title','description')}
            onSubmit={this.onSubmit}/>
       </div>
     )
  }

}

const mapStateToProps = (state,ownProps) => {
   return {
      stream: state.streams[ownProps.match.params.id]
   }

}



export default connect(mapStateToProps,{fetchStream,editStream})(StreamEdit);