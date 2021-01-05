import React, { Component } from 'react';
import { RouteComponentProps  } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

import '../App.css'
import { postRegisterAPI } from '../API/registerAPI';
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
passwordErrorAlert : boolean;
passwordSuccessAlert : boolean;
registerSuccess : boolean;
registerFailure : boolean;
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
            passwordErrorAlert:false,
            passwordSuccessAlert:false,
            registerSuccess:false,
            registerFailure:false,
    }
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onMiddleNameChange = this.onMiddleNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onRetypePasswordChange = this.onRetypePasswordChange.bind(this);
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
                    authCode:string,
                    user_id:string,
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
            authCode:authCode,
            user_id:user_id,
            };
            postRegisterAPI(postData,onSuccessCallBack,onFailureCallBack);
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
            validated:false,
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
            validated:false,
        })
    }

    onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            message:""
        })
        this.setState({
            username:event.currentTarget.value,
            validated:false,
        })
    }

    onEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            message:""
        })
        this.setState({
            email:event.currentTarget.value,
            validated:false,
        })
    }

    onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            message:"",
        })
        this.setState({
            password:event.currentTarget.value,
            validated:false,
            passwordErrorAlert:false,
        })
    }

    onRetypePasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            message:"",
        })
        this.setState({
            retypePassword:event.currentTarget.value,
            validated:false,
            passwordErrorAlert:false,
        })
    }

    onChangeCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            message:"",
        })
       
        this.setState({
            checkedStatus:event.currentTarget.checked,
            validated:false,
        })
    }

    onRegisterClick = (event: React.SyntheticEvent): void => {
        event.preventDefault();
        const {firstName,middleName,lastName,username,email,password,retypePassword,checkedStatus} = this.state;
        if(firstName !== "" && lastName !== "" && username !== "" && email !== "" && password !=="" && retypePassword !=="" && checkedStatus !== false){

            if( password === retypePassword ){
                const authCode:string = uuidv4();
                const user_id:string = uuidv4();
                this.setState({
                    passwordSuccessAlert:true,
                })
                setTimeout(()=>{this.onRegisterAPIProcessCall(firstName,middleName,lastName,username,email,password,checkedStatus,authCode,user_id)
                    this.setState({
                        passwordSuccessAlert:false,
                    })
                },2000);
                
            } else {
                this.setState({
                    passwordErrorAlert:true,
                })
            }
        } else {
            // alert (" Please enter all the required fields")
            this.setState({
                validated:true,
            })
        }
        
    }

    onSuccessCallBack = (responseData: ResponseProps): void => {
        // For debugging purpose only
        // console.log("Message => ",responseData.message,"Token => ",responseData.token);
        this.setState({
            registerSuccess:true,
            message:responseData.message,
        })
        alert("HI")
        setTimeout(() =>{
            this.setState({
                registerSuccess:false,
            })
            this.props.history.push("/login");
        },5500)
    }
    
    onFailureCallBack = (responseData: ResponseProps): void => {
        setTimeout(()=>{
        this.setState({
            registerFailure:true,
            message:responseData.message,
        })
        },3000)
        this.setState({
            registerFailure:false,
        })
    }

    /* *
        *  Main render function
        *------------------------------------------------------------
    */
    render(){
        const {firstName,middleName,lastName,username,email,password,retypePassword,checkedStatus,response,message,validated,passwordErrorAlert,passwordSuccessAlert,registerSuccess,registerFailure} = this.state;
        const {onFirstNameChange,onMiddleNameChange,onLastNameChange,onUsernameChange,onEmailChange,onPasswordChange,onRetypePasswordChange,onChangeCheck,onRegisterClick} = this;
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
                    registerSuccess={registerSuccess}
                    registerFailure={registerFailure}
                    passwordErrorAlert={passwordErrorAlert}
                    passwordSuccessAlert={passwordSuccessAlert}
                    onFirstNameChange={onFirstNameChange}
                    onMiddleNameChange={onMiddleNameChange}
                    onLastNameChange={onLastNameChange}
                    onEmailChange={onEmailChange}
                    onUsernameChange={onUsernameChange}
                    onPasswordChange={onPasswordChange}
                    onRetypePasswordChange={onRetypePasswordChange}
                    onChangeCheck={onChangeCheck}
                    onRegisterClick={onRegisterClick}
                />
            </div>
            );
        }
}
