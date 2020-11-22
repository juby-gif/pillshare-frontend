import React, { Component } from 'react';
import { RouteComponentProps  } from 'react-router';

import LoginComponent from '../components/loginComponent';
import { PILLSHARE_USER_TOKEN } from '../constants';
import { postLogin } from "../API/loginAPI";
import '../App.css';


interface IProps {

}
interface StateProps {
username : string;
password : string;
response : string;
message : string;
validated : boolean;
}

interface ResponseProps {
    message : string;
    token : string;
}
export default class LoginContainer extends Component<IProps & RouteComponentProps,StateProps> {

    /*   *
        *  Initializer
        *------------------------------------------------------------
    */
    constructor(props:IProps & RouteComponentProps){
        super(props);
        this.state={
            username:"",
            password:"",
            response:"",
            message:"",
            validated:false,
    }
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onLoginClick = this.onLoginClick.bind(this);
    this.onRegisterClick = this.onRegisterClick.bind(this);
    this.onSuccessCallBack = this.onSuccessCallBack.bind(this);
    this.onFailureCallBack = this.onFailureCallBack.bind(this);
    }

    /* *
        *  Utility
        *------------------------------------------------------------
    */
    //Nothing

    /* *
        *  Component Life-cycle Management
        *------------------------------------------------------------
    */
    //Nothing

    /* *
        *  API callback functions
        *------------------------------------------------------------
    */
    onLoginAPIProcessCall = (username:string,password:string):void => {
        const { onSuccessCallBack,onFailureCallBack } = this;
        const postData = {
            username: username,
            password: password,
        };
    postLogin(postData, onSuccessCallBack, onFailureCallBack);
    }

    /* *
        *  Event handling functions
        *------------------------------------------------------------
    */
    onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            message:""
        })
        this.setState({
            username:event.currentTarget.value,
        })
    }

    onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            message:"",
        })
        this.setState({
            password:event.currentTarget.value,
        })
    }

    onLoginClick = (event: React.SyntheticEvent): void => {
        event.preventDefault();
        const {username,password} = this.state;
        this.onLoginAPIProcessCall(username,password);
    }

    onRegisterClick = (event: React.SyntheticEvent): void => {
        event.preventDefault();
        this.props.history.push("/register")
    }

    onSuccessCallBack = (responseData: ResponseProps): void => {
        // For debugging purpose only
        // console.log("Message => ",responseData.message,"Token => ",responseData.token);
        sessionStorage.setItem(PILLSHARE_USER_TOKEN,responseData.token)
        this.props.history.push("/dashboard");

    }
    
    onFailureCallBack = (responseData: ResponseProps): void => {
        alert(responseData.message);
    }

    /* *
        *  Main render function
        *------------------------------------------------------------
    */
    render(){
        const {username,password,response,message,validated} = this.state;
        const {onUsernameChange,onPasswordChange,onLoginClick,onRegisterClick} = this;
        return(
            <div>
                <LoginComponent
                username={username}
                password={password}
                response={response}
                message={message}
                validated={validated}
                onUsernameChange={onUsernameChange}
                onPasswordChange={onPasswordChange}
                onLoginClick={onLoginClick}
                onRegisterClick={onRegisterClick}
                />
            </div>
            );
        }
}
