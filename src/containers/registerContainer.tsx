import React, { Component } from 'react';
import RegisterComponent from '../components/registerComponent';

interface IProps {

}

interface StateProps {

}
export default class RegisterContainer extends Component<IProps,StateProps>{
    constructor(props : IProps){
        super(props);
        this.state ={
            
        }
    }
    render(){
        return(
            <RegisterComponent />
        );
        }
}