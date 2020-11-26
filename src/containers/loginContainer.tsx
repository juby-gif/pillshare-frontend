import React, { Component } from 'react';
import { RouteComponentProps  } from 'react-router';

import LoginComponent from '../components/loginComponent';
import { LOGGED_IN_USER, PILLSHARE_USER_TOKEN, USER_TOKEN } from '../constants';
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
    token ?: string;
}

interface ServerResponse {
  data: ServerData[];
}

interface ServerData {
  username: string;
  password: string;
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
        
        const axios = require('axios').default;
        axios({
            method: 'get',
            url: 'http://localhost:3001/users',
            
          })
          .then(function (response:ServerResponse) {

            //For Debugging purpose only
            // console.log(response.data)
            
            let userArray: ServerData[] = response.data;
            if (userArray !== null || userArray !== undefined || userArray !== []){
        
            for (let userObj of userArray){
                if(userObj.username === username){
                    if(userObj.password === password){
                        sessionStorage.setItem(LOGGED_IN_USER,JSON.stringify(userObj));
                        const responseData = {
                            message : "Successfully logged-in",
                            token : USER_TOKEN,
                        }
                        onSuccessCallBack(responseData);
                        return;
                    } else {
                        const responseData = {
                            message : "Incorrect Password",
                        }
                        onFailureCallBack(responseData);
                        return;
                    }
                }
            }
            const responseData = {
                message : "You are not a registered User",
            }
            onFailureCallBack(responseData);
            }
          })
          .catch(function (error:ServerResponse) {
            console.log(error);
          });
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
        localStorage.setItem(PILLSHARE_USER_TOKEN,responseData.token || '{}')
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
