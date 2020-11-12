import React, { Component } from 'react';
import LoginComponent from '../components/loginComponent';


interface IProps {

}
interface StateProps {

}

export default class LoginContainer extends Component<IProps,StateProps> {
constructor(props : IProps){
    super(props);
    this.state = {

    }
}
render(){
    return(
        <LoginComponent />
    );
}
}