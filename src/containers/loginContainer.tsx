import React, { Component } from 'react';
import { RouteComponentProps  } from 'react-router';

import LoginComponent from '../components/loginComponent';
// import { PILLSHARE_USER_TOKEN } from '../constants';
import { postLoginAPI } from '../API/loginAPI';
import '../App.css';
import { FIRST_USER } from '../constants';


interface IProps {

}
interface StateProps {
username : string;
password : string;
response : string;
message : string;
validated : boolean;
error ?: boolean;
variant ?: string;
success ?: boolean;
}

interface ResponseProps {
    length?:number;
    message : string;
    token ?: string;
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
            error:false,
            success:false,
            validated:false,
            variant:"",

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
        postLoginAPI(username,password,onSuccessCallBack,onFailureCallBack);        
    }

    /* *
        *  Event handling functions
        *------------------------------------------------------------
    */
    onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            message:"",
            validated:false,
            error:false,
        })
        this.setState({
            username:event.currentTarget.value,
        })
    }

    onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            message:"",
            validated:false,
            error:false,
        })
        this.setState({
            password:event.currentTarget.value,
        })
    }

    onLoginClick = (event: React.SyntheticEvent): void => {
        event.preventDefault();
        const {username,password} = this.state;
        if(username !== "" && username !== undefined && password !=="" && password !== undefined){
            this.onLoginAPIProcessCall(username,password);
        }
        this.setState({
            validated:true,
        })
    }

    onRegisterClick = (event: React.SyntheticEvent): void => {
        event.preventDefault();
        this.props.history.push("/register")
    }

    onSuccessCallBack = (responseData: ResponseProps): void => {
        // For debugging purpose only
        // console.log("Message => ",responseData.message,"Token => ",responseData.token);


        //For Phase 2
        // localStorage.setItem(PILLSHARE_USER_TOKEN,responseData.token || '{}')


        if((responseData.length?responseData.length:0) >= 18){
            this.setState({
                message:responseData.message,
                variant:"success",
                success:true,
            })
            setTimeout(()=>{this.props.history.push("/dashboard")},4000);
        }else {
            localStorage.setItem(FIRST_USER,"true");
            this.setState({
                message:responseData.message,
                variant:"success",
                success:true,
            })
            setTimeout(()=>{this.props.history.push("/user-profile")},4000);
        }
    }
    
    onFailureCallBack = (responseData: ResponseProps): void => {
        this.setState({
            error:true,
            message:responseData.message,
            variant:"danger",

        })
    }

    /* *
        *  Main render function
        *------------------------------------------------------------
    */
    render(){
        const {username,password,response,message,error,validated,variant,success} = this.state;
        const {onUsernameChange,onPasswordChange,onLoginClick,onRegisterClick} = this;
        return(
            <div>
                <LoginComponent
                username={username}
                password={password}
                response={response}
                message={message}
                validated={validated}
                error={error}
                success={success}
                variant={variant}
                onUsernameChange={onUsernameChange}
                onPasswordChange={onPasswordChange}
                onLoginClick={onLoginClick}
                onRegisterClick={onRegisterClick}
                />
            </div>
            );
        }
}
