import React,{ Component} from 'react';

import { connect } from 'react-redux';
import { fetchStreams}  from '../../actions/stream.actions';

import { NavLink } from 'react-router-dom';

class  StreamList extends Component {

componentDidMount(){
   this.props.fetchStreams()
}
renderAdmin (stream){
  if(stream.userId === this.props.currentUserId){
      return (
         <div>
            <NavLink to={`/stream/edit/${stream.id}`} className="btn btn-info  custom-btn">Edit</NavLink> 
             <input type="button" value="Delete" className="btn btn-danger custom-btn"/>
         </div>
      )
   }
}

renderList =() =>{
   return this.props.stream.map( stream => {
    return (
      <li className="ul-list d-flex " key={ stream.id }> 
         <div className=" d-flex col-md-12" >  
          <div className="col-md-4 d-flex"> {stream.title}</div>
          <div className="col-md-4 d-flex"> {stream.description}</div>   
          <div className="col-md-4 d-flex"> 
           { this.renderAdmin(stream) } 
           </div>   
         </div>  
        </li> 
      )
     })
  }

 renderCreate(){
   if(this.props.isSignedIn){
      return (
         <div className="col-md-12 text-align-right"> 
            <NavLink to="/stream/new"  className="btn btn-primary custom-btn"> Create Stream</NavLink> 
        </div>
      )
   }
 }

 render(){
    return(
       <div className="d-flex justify-content-center">  
          <div className="col-md-9">
            { this.renderCreate() }
           <ul className="col-md-12">{ this.renderList() } </ul> 
          </div>
      </div>
    )
 }
}

const mapStateToProps= (state) => {
  return {
     stream: Object.values(state.streams),
     currentUserId:"123kfwefw",
     isSignedIn:true
  }
}
export default connect(mapStateToProps,{fetchStreams})(StreamList)  ;