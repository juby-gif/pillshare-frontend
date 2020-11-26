import React, { Component } from 'react';
import { RouteComponentProps  } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

import '../App.css'
import RegisterComponent from '../components/registerComponent';


interface IProps {

}
interface StateProps {
firstName : string;
middleName : string;
lastName : string;
username : string;
email : string;
password : string;
retypePassword : string;
checkedStatus : boolean;
response : string;
message : string;
validated : boolean;
}

interface ServerResponse {
    data: ServerData[];
  }
  
interface ServerData {
    firstName : string;
    middleName : string;
    lastName : string;
    username : string;
    email : string;
    password : string;
    retypePassword : string;
    checkedStatus : boolean;
    uuid:string;
}

interface ResponseProps {
    message : string;
}
export default class RegisterContainer extends Component<IProps & RouteComponentProps,StateProps> {

    /*   *
        *  Initializer
        *------------------------------------------------------------
    */
    constructor(props:IProps & RouteComponentProps){
        super(props);
        this.state={
            firstName : "",
            middleName : "",
            lastName : "",
            username : "",
            email : "",
            password : "",
            retypePassword : "",
            checkedStatus: false,
            response : "",
            message : "",
            validated:false,
    }
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onMiddleNameChange = this.onMiddleNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onRetypePasswordChange = this.onRetypePasswordChange.bind(this);
    this.onSignInClick = this.onSignInClick.bind(this);
    this.onSuccessCallBack = this.onSuccessCallBack.bind(this);
    this.onFailureCallBack = this.onFailureCallBack.bind(this);
    this.onChangeCheck = this.onChangeCheck.bind(this);
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
    onRegisterAPIProcessCall = async (
                    firstName:string,
                    middleName:string,
                    LastName:string,
                    username:string,
                    email:string,
                    password:string,
                    checkedStatus:boolean,
                    uuid:string
                    ):Promise<void> => {
        const { onSuccessCallBack,onFailureCallBack } = this;
        const postData = {
            firstName: firstName,
            middleName: middleName,
            lastName: LastName,
            username: username,
            email: email,
            password: password,
            checkedStatus: checkedStatus,
            user_id : uuid, 
            };
        
        const axios = require('axios').default;
        await axios({
            method: 'post',
            url: 'http://localhost:3001/users',
            data: postData,
            headers: {'Content-Type':'application/json'}
            
          })
          .then(function (response:ServerResponse) {
              if(response.data !== [] || response.data !== undefined || response.data !== null){
                const responseData : ResponseProps = {
                    message:"You are successfully registered"
                }
                onSuccessCallBack(responseData);
              } else {
                const responseData : ResponseProps = {
                    message:"Registration Failed"
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

    onFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            message:""
        })
        this.setState({
            firstName:event.currentTarget.value,
        })
    }

    onMiddleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            message:""
        })
        this.setState({
            middleName:event.currentTarget.value,
        })
    }

    onLastNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            message:""
        })
        this.setState({
            lastName:event.currentTarget.value,
        })
    }

    onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            message:""
        })
        this.setState({
            username:event.currentTarget.value,
        })
    }

    onEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            message:""
        })
        this.setState({
            email:event.currentTarget.value,
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

    onRetypePasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            message:"",
        })
        this.setState({
            retypePassword:event.currentTarget.value,
        })
    }

    onChangeCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            message:"",
        })
       
        this.setState({
            checkedStatus:event.currentTarget.checked,
        })
    }

    onRegisterClick = (event: React.SyntheticEvent): void => {
        event.preventDefault();
        const {firstName,middleName,lastName,username,email,password,retypePassword,checkedStatus} = this.state;
        if(firstName !== "" && lastName !== "" && username !== "" && password !==""){

            if( password === retypePassword ){
                const uuid:string = uuidv4();
                this.onRegisterAPIProcessCall(firstName,middleName,lastName,username,email,password,checkedStatus,uuid);
            } else {
                console.error("Your Password does not match");
            }
        } else {
            alert (" Please enter all the required fields")
        }
        
    }

    onSignInClick = (event: React.SyntheticEvent): void => {
        event.preventDefault();
        this.props.history.push("/login")
    }

    onSuccessCallBack = (responseData: ResponseProps): void => {
        // For debugging purpose only
        // console.log("Message => ",responseData.message,"Token => ",responseData.token);
        alert(responseData.message)
        this.props.history.push("/login");

    }
    
    onFailureCallBack = (responseData: ResponseProps): void => {
        alert(responseData.message);
    }

    /* *
        *  Main render function
        *------------------------------------------------------------
    */
    render(){
        const {firstName,middleName,lastName,username,email,password,retypePassword,checkedStatus,response,message,validated} = this.state;
        const {onFirstNameChange,onMiddleNameChange,onLastNameChange,onUsernameChange,onEmailChange,onPasswordChange,onRetypePasswordChange,onChangeCheck,onRegisterClick,onSignInClick} = this;
        return(
            <div>
                <RegisterComponent
                    firstName={firstName}
                    middleName={middleName}
                    lastName={lastName}
                    username={username}
                    email={email}
                    password={password}
                    retypePassword={retypePassword}
                    checkedStatus={checkedStatus}
                    response={response}
                    message={message}
                    validated={validated}
                    onFirstNameChange={onFirstNameChange}
                    onMiddleNameChange={onMiddleNameChange}
                    onLastNameChange={onLastNameChange}
                    onEmailChange={onEmailChange}
                    onUsernameChange={onUsernameChange}
                    onPasswordChange={onPasswordChange}
                    onRetypePasswordChange={onRetypePasswordChange}
                    onChangeCheck={onChangeCheck}
                    onSignInClick={onSignInClick}
                    onRegisterClick={onRegisterClick}
                />
            </div>
            );
        }
}
