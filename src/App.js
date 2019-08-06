import React,{Component,Fragment} from 'react';
import './App.css';
import { Switch}  from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { MainRoute } from './components/routes/routeMap';

class App extends Component {
  state = {
    user : null
  }

  componentDidMount(){
    try{
        const jwt = localStorage.getItem('user')
        const user = jwtDecode(jwt);
     this.setState({user})
    }catch(ex){

    }
  }
  render(){
  const { user } = this.state;

   return (
     <Fragment>
        <div>
          <Switch> 
           <MainRoute/>
          </Switch>
          </div>   
      </Fragment>
    );
  }
}

export default App;
