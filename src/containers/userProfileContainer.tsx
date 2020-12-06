import React, { Component } from 'react';

import UserProfileComponent from '../components/userProfileComponent';
import { getUserProfileAPI } from '../API/userProfileAPI';
import { LOGGED_IN_USER, LOGGED_IN_USER_DETAILS } from '../constants';


interface IProps {

}

interface ServerData {
  firstName: string,
  middleName: string,
  lastName: string,
  username: string,
  email: string,
  weight: string;
  height: string;
  bodyMassIndexValue:string;
  age:number,
  gender:string,
  dob:string,
  address:string,
  city:string,
  province:string,
  country:string,
  zip:string,
  phone:string,
  BMI:string,
  bloodGroup:string,
  underlyingHealthIssues:string[],
  otherHealthIssues:string[],
}

interface ServerResponse {
    data: ServerData[];
}
interface StateProps {
    firstName: string,
    middleName: string,
    lastName: string,
    username: string,
    email: string,
    weight: string;
    height: string;
    bodyMassIndexValue:string;
    age:number,
    gender:string,
    dob:string,
    address:string,
    city:string,
    province:string,
    country:string,
    zip:string,
    phone:string,
    bmi:string,
    bloodGroup:string,
    underlyingHealthIssues:string[],
    otherHealthIssues:string[],
    userUpdate: boolean;
    userShow:boolean;
    contactShow:boolean;
    healthShow:boolean;
    medicalShow:boolean;
}
export default class UserProfileContainer extends Component<IProps,StateProps> {
    constructor(props:IProps){
        super(props);
        this.state = {
          userShow: false,
          contactShow: false,
          healthShow: false,
          medicalShow: false,
          firstName: "",
          middleName: "",
          lastName: "",
          username: "",
          email: "",
          weight: "",
          height: "",
          bodyMassIndexValue: "",
          age:0,
          gender:"",
          dob:"",
          address:"",
          city:"",
          province:"",
          country:"",
          zip:"",
          phone:"",
          bmi:"",
          bloodGroup:"",
          underlyingHealthIssues:[],
          otherHealthIssues:[],
          userUpdate: true,

        }
        this.onWeightChange = this.onWeightChange.bind(this);
        this.onHeightChange = this.onHeightChange.bind(this);
        this.onBodyMassIndexCalculation = this.onBodyMassIndexCalculation.bind(this);
        this.onSuccessCallBack = this.onSuccessCallBack.bind(this);
        this.onFailureCallBack = this.onFailureCallBack.bind(this);

        // User Information Update 
        this.onUserInfoClick = this.onUserInfoClick.bind(this);
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onMiddleNameChange = this.onMiddleNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onDOBChange = this.onDOBChange.bind(this);
        this.onUserInfoSaveClick = this.onUserInfoSaveClick.bind(this);
        this.onUserInfoBackClick = this.onUserInfoBackClick.bind(this);

        // Contact Information Update
        this.onContactInfoClick = this.onContactInfoClick.bind(this);
        // this.onFirstNameChange = this.onFirstNameChange.bind(this);
        // this.onMiddleNameChange = this.onMiddleNameChange.bind(this);
        // this.onLastNameChange = this.onLastNameChange.bind(this);
        // this.onUsernameChange = this.onUsernameChange.bind(this);
        // this.onEmailChange = this.onEmailChange.bind(this);
        // this.onDOBChange = this.onDOBChange.bind(this);
        this.onContactInfoSaveClick = this.onContactInfoSaveClick.bind(this);
        this.onContactInfoBackClick = this.onContactInfoBackClick.bind(this);

        // Health Information Update
        this.onHealthInfoClick = this.onHealthInfoClick.bind(this);
        // this.onFirstNameChange = this.onFirstNameChange.bind(this);
        // this.onMiddleNameChange = this.onMiddleNameChange.bind(this);
        // this.onLastNameChange = this.onLastNameChange.bind(this);
        // this.onUsernameChange = this.onUsernameChange.bind(this);
        // this.onEmailChange = this.onEmailChange.bind(this);
        // this.onDOBChange = this.onDOBChange.bind(this);
        this.onHealthInfoSaveClick = this.onHealthInfoSaveClick.bind(this);
        this.onHealthInfoBackClick = this.onHealthInfoBackClick.bind(this);

        // Medical Information Update
        this.onMedicalInfoClick = this.onMedicalInfoClick.bind(this);
        // this.onFirstNameChange = this.onFirstNameChange.bind(this);
        // this.onMiddleNameChange = this.onMiddleNameChange.bind(this);
        // this.onLastNameChange = this.onLastNameChange.bind(this);
        // this.onUsernameChange = this.onUsernameChange.bind(this);
        // this.onEmailChange = this.onEmailChange.bind(this);
        // this.onDOBChange = this.onDOBChange.bind(this);
        this.onMedicalInfoSaveClick = this.onMedicalInfoSaveClick.bind(this);
        this.onMedicalInfoBackClick = this.onMedicalInfoBackClick.bind(this);
    }


    componentDidMount(){
      const { onSuccessCallBack,onFailureCallBack } = this;
      const user_id:string|null = JSON.parse(sessionStorage.getItem(LOGGED_IN_USER) || '{}').user_id;

    /* *
        *  API callback functions
        *------------------------------------------------------------
    */
      getUserProfileAPI(user_id,onSuccessCallBack,onFailureCallBack);
    }

    onWeightChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        weight:event.currentTarget.value,
      })
    }

    onHeightChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        height:event.currentTarget.value,
      })
    }

    


    onBodyMassIndexCalculation = (event:React.SyntheticEvent):void => {
      const { weight,height } = this.state;
      if(parseInt(height)!==0||isNaN(parseInt(height))!){
        const bodyMassIndexValue = ((parseInt(weight) / parseInt(height) / parseInt(height)) * 10000).toFixed(2);
        this.setState({
          bodyMassIndexValue:bodyMassIndexValue
        })
      }
    }

    onSuccessCallBack = (responseData: ServerResponse): void => {
      // For debugging purpose only
      // console.log(responseData.data);
      if(responseData.data !== null || responseData.data !== undefined){
        localStorage.setItem(LOGGED_IN_USER_DETAILS,JSON.stringify(responseData.data));
        for (let datum of responseData.data){
          this.setState({
            firstName: datum.firstName,
            middleName: datum.middleName,
            lastName: datum.lastName,
            username: datum.username,
            email: datum.email,
            weight: datum.weight,
            height: datum.height,
            age:datum.age,
            gender:datum.gender,
            dob:datum.dob,
            address:datum.address,
            city:datum.city,
            province:datum.province,
            country:datum.country,
            zip:datum.zip,
            phone:datum.phone,
            bmi:datum.BMI,
            bloodGroup:datum.bloodGroup,
            underlyingHealthIssues:datum.underlyingHealthIssues,
            otherHealthIssues:datum.otherHealthIssues,
          })
          return;
        }
      }
      
    }
      
    onFailureCallBack = (error: ServerResponse): void => {
        alert(error);
    }

    // User Information Update
    onUserInfoClick = (event: React.SyntheticEvent):void => {
      this.setState({
        userShow:true,
      })
    }
    onFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
      this.setState({
          firstName:event.currentTarget.value,
      })
  }
    onMiddleNameChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        this.setState({
            middleName:event.currentTarget.value,
        })
    }
    onLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        this.setState({
            lastName:event.currentTarget.value,
        })
    }
    onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        this.setState({
            username:event.currentTarget.value,
        })
    }
    onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        this.setState({
            email:event.currentTarget.value,
        })
    }
    onDOBChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        this.setState({
            dob:event.currentTarget.value,
        })
    }
    onAgeChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        this.setState({
            age:parseInt(event.currentTarget.value),
        })
    }
    onUserInfoSaveClick = (event : React.SyntheticEvent) : void => {
        event.preventDefault();
        const { username,firstName,lastName,middleName,email,age,dob } = this.state;
        console.log(username,firstName,lastName,middleName,email,age,dob)
        this.setState({
            userShow:false,
        })
    }
    onUserInfoBackClick = (event : React.SyntheticEvent) : void => {
        event.preventDefault();
        this.setState({
            userShow:false,
        })
    }

    // Contact Information Update
    onContactInfoClick = (event: React.SyntheticEvent):void => {
      this.setState({
        contactShow:true,
      })
    }
    onAddressChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
      this.setState({
          address:event.currentTarget.value,
      })
    }
    onCityChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
      this.setState({
          city:event.currentTarget.value,
      })
    }
    onProvinceChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
      this.setState({
          province:event.currentTarget.value,
      })
    }
    onCountryChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
      this.setState({
          country:event.currentTarget.value,
      })
    }
    onZipChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
      this.setState({
          zip:event.currentTarget.value,
      })
    }
    onPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
      this.setState({
          phone:event.currentTarget.value,
      })
    }
    onContactInfoSaveClick = (event : React.SyntheticEvent) : void => {
      event.preventDefault();
      const { username,firstName,lastName,middleName,email,age,dob } = this.state;
      console.log(username,firstName,lastName,middleName,email,age,dob)
      this.setState({
        contactShow:false,
      })
    }
    onContactInfoBackClick = (event : React.SyntheticEvent) : void => {
      event.preventDefault();
      this.setState({
        contactShow:false,
      })
    }

    // Health Information Update
    onHealthInfoClick = (event: React.SyntheticEvent):void => {
      this.setState({
        healthShow:true,
      })
    }
    onHealthInfoSaveClick = (event : React.SyntheticEvent) : void => {
      event.preventDefault();
      const { username,firstName,lastName,middleName,email,age,dob } = this.state;
      console.log(username,firstName,lastName,middleName,email,age,dob)
      this.setState({
        healthShow:false,
      })
    }
    onHealthInfoBackClick = (event : React.SyntheticEvent) : void => {
      event.preventDefault();
      this.setState({
        healthShow:false,
      })
    }
    // Medical Information Update
    onMedicalInfoClick = (event: React.SyntheticEvent):void => {
      this.setState({
        medicalShow:true,
      })
    }
    onMedicalInfoSaveClick = (event : React.SyntheticEvent) : void => {
      event.preventDefault();
      const { username,firstName,lastName,middleName,email,age,dob } = this.state;
      console.log(username,firstName,lastName,middleName,email,age,dob)
      this.setState({
        medicalShow:false,
      })
    }
    onMedicalInfoBackClick = (event : React.SyntheticEvent) : void => {
      event.preventDefault();
      this.setState({
        medicalShow:false,
      })
    }
  render () {
      const { onWeightChange,
              onHeightChange,
              onBodyMassIndexCalculation,

              // User Information Update
              onUserInfoClick,
              onUsernameChange,
              onFirstNameChange,
              onMiddleNameChange,
              onLastNameChange,
              onEmailChange,
              onDOBChange,
              onAgeChange,
              onUserInfoSaveClick,
              onUserInfoBackClick,

              // Contact Information Update
              onContactInfoClick,
              onAddressChange,
              onCityChange,
              onProvinceChange,
              onCountryChange,
              onZipChange,
              onPhoneChange,
              onContactInfoSaveClick,
              onContactInfoBackClick,

              // Health Information Update
              onHealthInfoClick,
              onHealthInfoSaveClick,
              onHealthInfoBackClick,

              // Medical Information Update
              onMedicalInfoClick,
              onMedicalInfoSaveClick,
              onMedicalInfoBackClick,


            } = this;
      const { firstName,
              middleName,
              lastName,
              username,
              email,
              weight,
              height,
              age,
              gender,
              dob,
              address,
              city,
              province,
              country,
              zip,
              phone,
              bmi,
              bloodGroup,
              underlyingHealthIssues,
              otherHealthIssues,
              userShow,
              contactShow,
              healthShow,
              medicalShow,
             } = this.state;
        return(
            <UserProfileComponent 
            userShow = {userShow}
            contactShow = {contactShow}
            healthShow = {healthShow}
            medicalShow = {medicalShow}
            
            onWeightChange = {onWeightChange}
            onHeightChange = {onHeightChange}
            onBodyMassIndexCalculation = {onBodyMassIndexCalculation}
            
            // User Information Update
            firstName = {firstName}
            middleName = {middleName}
            lastName = {lastName}
            username = {username}
            email = {email}
            age = {age}
            gender = {gender}
            dob = {dob}
            onUserInfoClick={onUserInfoClick}
            onUsernameChange = {onUsernameChange}
            onFirstNameChange ={onFirstNameChange}
            onMiddleNameChange = {onMiddleNameChange}
            onLastNameChange = {onLastNameChange}
            onEmailChange ={onEmailChange}
            onDOBChange = {onDOBChange}
            onAgeChange = {onAgeChange}
            onUserInfoSaveClick = {onUserInfoSaveClick}
            onUserInfoBackClick = {onUserInfoBackClick}

            // Contact Information Update
            address = {address}
            city = {city}
            province = {province}
            country = {country}
            zip = {zip}
            phone = {phone}
            onAddressChange = {onAddressChange}
            onCityChange = {onCityChange}
            onProvinceChange = {onProvinceChange}
            onCountryChange = {onCountryChange}
            onZipChange = {onZipChange}
            onPhoneChange = {onPhoneChange} 
            onContactInfoClick = {onContactInfoClick}
            onContactInfoSaveClick = {onContactInfoSaveClick}
            onContactInfoBackClick = {onContactInfoBackClick}

            // Health Information Update
            weight = {weight}
            height = {height}
            bmi = {bmi}
            bloodGroup = {bloodGroup}
            underlyingHealthIssues = {underlyingHealthIssues}
            otherHealthIssues = {otherHealthIssues}
            onHealthInfoClick={onHealthInfoClick}
            onHealthInfoSaveClick = {onHealthInfoSaveClick}
            onHealthInfoBackClick = {onHealthInfoBackClick}

            // Medical Information Update 
            onMedicalInfoClick={onMedicalInfoClick}
            onMedicalInfoSaveClick = {onMedicalInfoSaveClick}
            onMedicalInfoBackClick = {onMedicalInfoBackClick}
            />
        );
    }
}