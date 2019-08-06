import React from 'react';

class Logout extends React.Component {
    componentDidMount(){
        localStorage.removeItem('user')
        this.props.history.push('/login')
    }

    render(){
        return null;
    }
}
export default Logout;