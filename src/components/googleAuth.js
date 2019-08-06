import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { singIn, signOut } from '../actions';

class GoogleAuth extends  Component{

    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId:'fsdfsdfsfsdf',
                scope:'email'
                
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChnage(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChnage)
            })
        })
    }

     onAuthChnage = (isSignedIn) => {
         if(isSignedIn){
             this.props.singIn(this.auth.currentUser.get.getId())
         } else {
             this.props.signOut();
         }
     }

    onSignInClick = () => {
         this.auth.singIn();
     }
     onSignOutClick = () => {
        this.auth.singOut();
    }

    renderAuthButton =() => {
      if(this.props.isSignedIn===null){
        return null ;
      } 
      else if (this.props.isSignedIn) {
            return (
                <button  className="btn btn-primary" onClick={this.onSignOutClick}>  Sign Out </button>
            )
      }
      else {
        return (
           
            <button className="btn btn-primary" onClick={this.onSignInClick}>  Sign With Google </button>
        )
      }
    }

    render(){
        return <div>{  this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) =>{
 return {
     auth:state.auth
 }
}

export default connect(mapStateToProps,{ singIn:singIn, signOut: signOut})(GoogleAuth) ;

