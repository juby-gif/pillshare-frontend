import React, { Component } from 'react';

import UserProfileComponent from '../components/userProfileComponent';
import { getUserProfileAPI, updateUserProfileAPI } from '../API/userProfileAPI';
import { 
        LOGGED_IN_USER, 
        LOGGED_IN_USER_ID,
        LOGGED_IN_USER_NAME,
        USER_INFORMATION_DATA, 
        USER_CONTACT_INFORMATION_DATA, 
        USER_HEALTH_INFORMATION_DATA,
        USER_IMAGE,
        FIRST_USER,
       } from '../constants';


interface IProps {
imageList:ImageType[];
}

interface ServerData {
  firstName?: string,
  middleName?: string,
  lastName?: string,
  username?: string,
  email?: string,
  weight?: string;
  height?: string;
  bodyMassIndexValue?:string;
  age?:number,
  gender?:string,
  dob?:string,
  address?:string,
  city?:string,
  province?:string,
  country?:string,
  zip?:string,
  phone?:string,
  BMI?:string,
  bloodGroup?:string,
  underlyingHealthIssues?:string,
  otherHealthIssues?:string,
  images:ImageType[];
}

interface ServerResponse {
    data: ServerData[];
}
interface StateProps {
    firstName?: string,
    middleName?: string,
    lastName?: string,
    username?: string,
    email?: string,
    weight?: string;
    height?: string;
    bodyMassIndexValue?:string;
    age?:number,
    gender?:string,
    dob?:string,
    address?:string,
    city?:string,
    province?:string,
    country?:string,
    zip?:string,
    phone?:string,
    bmi?:string,
    bloodGroup?:string,
    underlyingHealthIssues?:string,
    otherHealthIssues?:string,
    message?:string,
    userUpdate: boolean;
    userShow:boolean;
    contactShow:boolean;
    healthShow:boolean;
    medicalShow:boolean;
    images:ImageType[];
    debuggMode:boolean;
    modalfirstShow:boolean;
    saveMode:boolean;
    userInfoValidated:boolean;
    contactValidated:boolean;
    healthValidated:boolean;
    firstUser?:boolean;
    bmiStatus:boolean;
    isLoading:boolean;
    errorMode:boolean;
}
interface ImageType{
dataURL?: string;
file?: File;
[key: string]: any;
}

interface SaveDataProps {
  firstName?: string,
  middleName?: string,
  lastName?: string,
  username?: string,
  email?: string,
  weight?: string;
  height?: string;
  age?:number,
  gender?:string,
  dob?:string,
  address?:string,
  city?:string,
  province?:string,
  country?:string,
  zip?:string,
  phone?:string,
  bodyMassIndexValue?:string;
  BMI?:string,
  bloodGroup?:string,
  underlyingHealthIssues?:string,
  otherHealthIssues?:string,
  images:ImageType[];
}

export default class UserProfileContainer extends Component<IProps,StateProps> {
  reload=()=>window.location.reload();
    constructor(props:IProps){
        super(props);
        this.state = {
          userShow: false,
          bmiStatus: false,
          contactShow: false,
          healthShow: false,
          medicalShow: false,
          debuggMode:false,
          modalfirstShow:false,
          isLoading:false,
          saveMode:false,
          errorMode:false,
          userInfoValidated:false,
          contactValidated:false,
          healthValidated:false,
          firstName: undefined,
          middleName: undefined,
          lastName: undefined,
          username: undefined,
          email: undefined,
          weight: undefined,
          height: undefined,
          bodyMassIndexValue: undefined,
          age:undefined,
          gender:undefined,
          dob:undefined,
          address:undefined,
          city:undefined,
          province:undefined,
          country:undefined,
          zip:undefined,
          phone:undefined,
          bmi:undefined,
          bloodGroup:undefined,
          underlyingHealthIssues:undefined,
          otherHealthIssues:undefined,
          userUpdate: true,
          message:undefined,
          images: [],
          firstUser:JSON.parse(localStorage.getItem(FIRST_USER)||"false"),

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
        this.onMaleChange = this.onMaleChange.bind(this);
        this.onFemaleChange = this.onFemaleChange.bind(this);
        this.onUserInfoSaveClick = this.onUserInfoSaveClick.bind(this);
        this.onUserInfoBackClick = this.onUserInfoBackClick.bind(this);
        this.onImageChange = this.onImageChange.bind(this);

        // Contact Information Update
        this.onContactInfoClick = this.onContactInfoClick.bind(this);
        this.onContactInfoSaveClick = this.onContactInfoSaveClick.bind(this);
        this.onContactInfoBackClick = this.onContactInfoBackClick.bind(this);

        // Health Information Update
        this.onOtherHealthIssuesChange = this.onOtherHealthIssuesChange.bind(this);
        this.onUnderlyingHealthIssueChange = this.onUnderlyingHealthIssueChange.bind(this);
        this.onBloodGroupChange = this.onBloodGroupChange.bind(this);
        this.onHealthInfoClick = this.onHealthInfoClick.bind(this);
        this.onHealthInfoSaveClick = this.onHealthInfoSaveClick.bind(this);
        this.onHealthInfoBackClick = this.onHealthInfoBackClick.bind(this);

        // Medical Information Update
        this.onMedicalInfoClick = this.onMedicalInfoClick.bind(this);
        this.onMedicalInfoSaveClick = this.onMedicalInfoSaveClick.bind(this);
        this.onMedicalInfoBackClick = this.onMedicalInfoBackClick.bind(this);

        // Preparing data for API call
        this.onSaveClick = this.onSaveClick.bind(this);
        this.onGetStartedClick = this.onGetStartedClick.bind(this);
    }


    componentDidMount(){
      const { onSuccessCallBack,onFailureCallBack } = this;
      const user_id = JSON.parse(localStorage.getItem(LOGGED_IN_USER_ID)|| '' )

    /* *
        *  API callback functions
        *------------------------------------------------------------
    */
      getUserProfileAPI(user_id,onSuccessCallBack,onFailureCallBack);
      setTimeout(() =>{this.setState({
        modalfirstShow:true,
      })},5000)
    }


    onSuccessCallBack = (responseData: ServerResponse): void => {
      // For debugging purpose only
      // console.log(responseData.data);
      if(responseData.data.length > 0 && responseData.data !== null && responseData.data !== undefined){
        localStorage.setItem(LOGGED_IN_USER,JSON.stringify(responseData.data));
        for (let datum of responseData.data){
          localStorage.setItem(LOGGED_IN_USER_NAME,JSON.stringify({firstName:datum.firstName,lastName:datum.lastName}));
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
            bodyMassIndexValue:datum.bodyMassIndexValue,
            zip:datum.zip,
            phone:datum.phone,
            bmi:datum.BMI,
            bloodGroup:datum.bloodGroup,
            underlyingHealthIssues:datum.underlyingHealthIssues,
            otherHealthIssues:datum.otherHealthIssues,
            images:datum.images,
            debuggMode:false,
          })
          return;
        }
      }
      
    }

    lengthChecker = (data:ServerData[] | null) => {
      let count:number = 0;
      for (let datum in data){
        if (data.hasOwnProperty(datum)) count++;
      }
      if(count !== 0) { return count; }
      else {return 0};
    }

    onPatchRequestSuccessCallBack = (responseData: ServerResponse): void => {

      // For debugging purpose only
      // console.log(responseData);
      if(this.lengthChecker(responseData.data) >25){
        if(this.state.firstUser){
          setTimeout(() => {this.setState({
            saveMode:true,
            message:"Congratulations! You have successfully unlocked all the features.",
            firstUser:false,
          })},2200);
        }else{
        setTimeout(() => {this.setState({
          saveMode:true,
          message:"You have successfully saved your data!",
        })},2200);
      }
      localStorage.setItem(FIRST_USER,"false");
      }else{
        setTimeout(() => {this.setState({
          errorMode:true,
          message:"Sorry, you have to complete the required fields before moving forward",
        })},2200);
      }
      setTimeout(() => {this.setState({
        saveMode:false,
        errorMode:false,
        isLoading:false,
        message:undefined,
      })},6000)
      setTimeout(() => {this.reload()},7000);
    }
      
    onFailureCallBack = (error: ServerResponse): void => {
        console.error(error);
    }

    // User Information Update
    onUserInfoClick = (event: React.SyntheticEvent):void => {
      this.setState({
        userShow:true,
      })
    }
    onFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined ) {
        this.setState({
          firstName:event.currentTarget.value,
        })
      } else {
        this.setState({
          firstName:undefined,
        })
      } 
    }
    onMiddleNameChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined ) {
        this.setState({
          middleName:event.currentTarget.value,
        })
      } else {
        this.setState({
          middleName:undefined,
        })
      } 
    }
    onLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined ) {
        this.setState({
          lastName:event.currentTarget.value,
        })
      } else {
        this.setState({
          lastName:undefined,
        })
      } 
    }
    onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined ) {
        this.setState({
          username:event.currentTarget.value,
        })
      } else {
        this.setState({
          username:undefined,
        })
      } 
    }
    onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined ) {
        this.setState({
          email:event.currentTarget.value,
        })
      } else {
        this.setState({
          email:undefined,
        })
      } 
    }
    onDOBChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined ) {
        this.setState({
          dob:event.currentTarget.value,
        })
      } else {
        this.setState({
          dob:undefined,
        })
      } 
    }
    onAgeChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
      if(event.currentTarget.valueAsNumber !== 0 && !isNaN(event.currentTarget.valueAsNumber) && event.currentTarget.valueAsNumber !== undefined ) {
        this.setState({
          age:event.currentTarget.valueAsNumber,
        })
      } else {
        this.setState({
          age:undefined,
        })
      } 
    }
    onMaleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined ) {
        this.setState({
          gender:event.currentTarget.value,
        })
      } else {
        this.setState({
          gender:undefined,
        })
      } 
    }
    onFemaleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined ) {
        this.setState({
          gender:event.currentTarget.value,
        })
      } else {
        this.setState({
          gender:undefined,
        })
      } 
    }

    onUserInfoSaveClick = (event : React.SyntheticEvent) : void => {
        event.preventDefault();
        const { username,firstName,lastName,middleName,email,age,dob,gender} = this.state;
        
        const userInfoData:any = {
          username:username,
          firstName:firstName,
          lastName:lastName,
          middleName:middleName?middleName:"",
          email:email,
          age:age,
          dob:dob,
          gender:gender,
        }
        if(username !== undefined && firstName !== undefined && lastName !== undefined && email !== undefined && age !== undefined && dob !== undefined && gender !== undefined){
          localStorage.setItem(USER_INFORMATION_DATA,JSON.stringify(userInfoData));
          this.setState({
              userShow:false,
              userInfoValidated:false,
          })
        } else{
        this.setState({
          userInfoValidated:true,
        })
    }
  }
    onUserInfoBackClick = (event : React.SyntheticEvent) : void => {
        event.preventDefault();
        this.setState({
            userShow:false,
        })
    }
    onImageChange = (imageList?: ImageType[]) => {
        localStorage.setItem(USER_IMAGE,JSON.stringify(imageList));
          this.setState({
            images:imageList as ImageType[],
          })
        
      }

    // Contact Information Update
    onContactInfoClick = (event: React.SyntheticEvent):void => {
      event.preventDefault();
      this.setState({
        contactShow:true,
      })
    }
    onAddressChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined ) {
        this.setState({
          address:event.currentTarget.value,
        })
      } else {
        this.setState({
          address:undefined,
        })
      } 
    }
    onCityChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined ) {
        this.setState({
          city:event.currentTarget.value,
        })
      } else {
        this.setState({
          city:undefined,
        })
      } 
    }
    onProvinceChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined ) {
        this.setState({
          province:event.currentTarget.value,
        })
      } else {
        this.setState({
          province:undefined,
        })
      } 
    }
    onCountryChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined ) {
        this.setState({
          country:event.currentTarget.value,
        })
      } else {
        this.setState({
          country:undefined,
        })
      } 
    }
    onZipChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined ) {
        this.setState({
          zip:event.currentTarget.value,
        })
      } else {
        this.setState({
          zip:undefined,
        })
      } 
    }
    onPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined ) {
        this.setState({
          phone:event.currentTarget.value,
        })
      } else {
        this.setState({
          phone:undefined,
        })
      } 
    }
    onContactInfoSaveClick = (event : React.SyntheticEvent) : void => {
      event.preventDefault();
      const { address,city,province,country,zip,phone } = this.state;
      if(address !== undefined && city !== undefined && province !== undefined && country !== undefined && zip !== undefined && phone !== undefined){
      localStorage.setItem(USER_CONTACT_INFORMATION_DATA,JSON.stringify({
        address:address,
        city:city,
        province:province,
        country:country,
        zip:zip,
        phone:phone,
      }))
      this.setState({
        contactShow:false,
        contactValidated:false,
      })
    } else {
      this.setState({
        contactValidated:true,
      })
    }
    }
    onContactInfoBackClick = (event : React.SyntheticEvent) : void => {
      event.preventDefault();
      event.preventDefault();
      this.setState({
        contactShow:false,
      })
    }

    // Health Information Update
    onHealthInfoClick = (event: React.SyntheticEvent):void => {
      event.preventDefault();
      this.setState({
        healthShow:true,
      })
    }
    onWeightChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined ) {
        this.setState({
          weight:event.currentTarget.value,
          bmiStatus:false,
        })
      } else {
        this.setState({
          weight:undefined,
        })
      } 
    }
    onHeightChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined ) {
        this.setState({
          height:event.currentTarget.value,
          bmiStatus:false,
        })
      } else {
        this.setState({
          height:undefined,
        })
      } 
    }
    onBodyMassIndexCalculation = (event:React.SyntheticEvent):void => {
      const { weight,height } = this.state;
      if(parseInt(height?height:"0")!==0||isNaN(parseInt(height?height:"0"))!){
        const bodyMassIndexValue = ((parseInt(weight?weight:"0") / parseInt(height?height:"0") / parseInt(height?height:"0")) * 10000).toFixed(2);
        this.setState({
          bodyMassIndexValue:bodyMassIndexValue,
          bmiStatus:true,
        })
      }
    }

    onBloodGroupChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined ) {
        this.setState({
          bloodGroup:event.currentTarget.value,
        })
      } else {
        this.setState({
          bloodGroup:undefined,
        })
      } 
    }

    onUnderlyingHealthIssueChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined ) {
        this.setState({
          underlyingHealthIssues:event.currentTarget.value,
        })
      } else {
        this.setState({
          underlyingHealthIssues:undefined
        })
      } 
    }

    onOtherHealthIssuesChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined ) {
        this.setState({
          otherHealthIssues:event.currentTarget.value,
        })
      } else {
        this.setState({
          otherHealthIssues:undefined,
        })
      } 
    }
    onHealthInfoSaveClick = (event : React.SyntheticEvent) : void => {
      event.preventDefault();
      const { weight,height,bloodGroup,underlyingHealthIssues,otherHealthIssues,bodyMassIndexValue } = this.state;
      let bmi_value = "";
      if( parseInt(bodyMassIndexValue?bodyMassIndexValue:"0")<18.5){
        bmi_value = "Underweight";

      }else if ( parseInt(bodyMassIndexValue?bodyMassIndexValue:"0")>=18.5 && parseInt(bodyMassIndexValue?bodyMassIndexValue:"0")<=24.9 ){
        bmi_value = "Normal";
      }else if( parseInt(bodyMassIndexValue?bodyMassIndexValue:"0")>=25.0 && parseInt(bodyMassIndexValue?bodyMassIndexValue:"0")<=29.9 ){
        bmi_value = "Overweight";
      }else if( parseInt(bodyMassIndexValue?bodyMassIndexValue:"0")>=30.0 ){
        bmi_value = "Obesity";
      }

      if (weight !== undefined && height !== undefined && bmi_value !== undefined && bloodGroup !== undefined && underlyingHealthIssues !== undefined && otherHealthIssues !== undefined && bodyMassIndexValue !== undefined){
      localStorage.setItem(USER_HEALTH_INFORMATION_DATA,JSON.stringify({
        weight:weight,
        height:height,
        bmi:bmi_value,
        bloodGroup:bloodGroup,
        underlyingHealthIssues:underlyingHealthIssues,
        otherHealthIssues:otherHealthIssues,
        bodyMassIndexValue:bodyMassIndexValue,
      }))
      this.setState({
        healthShow:false,
        bmi:bmi_value,
        healthValidated:false,
      })
    } else {
      this.setState({
        healthValidated:true,
      })
    }
  }

    onHealthInfoBackClick = (event : React.SyntheticEvent) : void => {
      event.preventDefault();
      this.setState({
        healthShow:false,
      })
    }
    // Medical Information Update
    onMedicalInfoClick = (event: React.SyntheticEvent):void => {
      event.preventDefault();
      this.setState({
        medicalShow:true,
        debuggMode:true,
      })
    }
    onMedicalInfoSaveClick = (event : React.SyntheticEvent) : void => {
      event.preventDefault();
      // For reloading the page to reflect the latest changes
      this.reload();

      this.setState({
        medicalShow:false,
        debuggMode:false,
      })
    }
    onMedicalInfoBackClick = (event : React.SyntheticEvent) : void => {
      event.preventDefault();
      this.setState({
        medicalShow:false,
        debuggMode:false,
      })
    }

    onGetStartedClick = (event : React.SyntheticEvent) : void =>{
      this.setState({
        modalfirstShow:false,
      })
    }
    onSaveClick = (event : React.SyntheticEvent) : void =>{
      
      const { bodyMassIndexValue } = this.state
      const { onPatchRequestSuccessCallBack,onFailureCallBack } = this;
      const user_id:string|undefined = JSON.parse(sessionStorage.getItem(LOGGED_IN_USER) || '{}').user_id;
      const userInformation:any = JSON.parse(localStorage.getItem(USER_INFORMATION_DATA) || '{}');
      const userContactInformation:any = JSON.parse(localStorage.getItem(USER_CONTACT_INFORMATION_DATA) || '{}');
      const userHealthInformation:any = JSON.parse(localStorage.getItem(USER_HEALTH_INFORMATION_DATA) || '{}');
      const images:ImageType[] = localStorage.getItem(USER_IMAGE) === "undefined"?[]:JSON.parse(localStorage.getItem(USER_IMAGE)||'[]');
      const data:SaveDataProps = {
        firstName: userInformation.firstName,
        middleName: userInformation.middleName,
        lastName: userInformation.lastName,
        username: userInformation.username,
        email: userInformation.email,
        age:userInformation.age,
        gender:userInformation.gender,
        dob:userInformation.dob,
        address:userContactInformation.address,
        city:userContactInformation.city,
        province:userContactInformation.province,
        country:userContactInformation.country,
        zip:userContactInformation.zip,
        phone:userContactInformation.phone,
        bodyMassIndexValue:bodyMassIndexValue,
        weight: userHealthInformation.weight,
        height: userHealthInformation.height,
        BMI:userHealthInformation.bmi,
        bloodGroup:userHealthInformation.bloodGroup,
        underlyingHealthIssues:userHealthInformation.underlyingHealthIssues,
        otherHealthIssues:userHealthInformation.otherHealthIssues,
        images:images,
      }
      this.setState({
        isLoading:true,
      })
      
      updateUserProfileAPI(user_id,onPatchRequestSuccessCallBack,onFailureCallBack,data);
      localStorage.removeItem(USER_INFORMATION_DATA);
      localStorage.removeItem(USER_CONTACT_INFORMATION_DATA);
      localStorage.removeItem(USER_HEALTH_INFORMATION_DATA);
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
              onImageChange,
              onMaleChange,
              onFemaleChange,

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
              onUnderlyingHealthIssueChange,
              onOtherHealthIssuesChange,
              onHealthInfoClick,
              onHealthInfoSaveClick,
              onHealthInfoBackClick,
              onBloodGroupChange,

              // Medical Information Update
              onMedicalInfoClick,
              onMedicalInfoSaveClick,
              onMedicalInfoBackClick,

              // Save 
              onSaveClick,
              onGetStartedClick,


            } = this;
      const { 
              message,
              firstName,
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
              saveMode,
              errorMode,
              bmiStatus,
              contactShow,
              healthShow,
              medicalShow,
              modalfirstShow,
              bodyMassIndexValue,
              images,
              debuggMode,
              userInfoValidated,
              contactValidated,
              healthValidated,
              isLoading,
              firstUser
             } = this.state;
        return(
            <UserProfileComponent 
            userShow = {userShow}
            isLoading = {isLoading}
            bmiStatus ={bmiStatus}
            modalfirstShow = {modalfirstShow}
            contactShow = {contactShow}
            healthShow = {healthShow}
            medicalShow = {medicalShow}
            saveMode = {saveMode}
            errorMode = {errorMode}
            firstUser = {firstUser}
            userInfoValidated = {userInfoValidated}
            contactValidated = {contactValidated}
            healthValidated = {healthValidated}
            message = {message}
            
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
            images = {images}
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
            onImageChange = {onImageChange}
            onMaleChange = {onMaleChange}
            onFemaleChange = {onFemaleChange}

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
            bodyMassIndexValue = {bodyMassIndexValue}
            onHealthInfoClick={onHealthInfoClick}
            onHealthInfoSaveClick = {onHealthInfoSaveClick}
            onHealthInfoBackClick = {onHealthInfoBackClick}
            onOtherHealthIssuesChange = {onOtherHealthIssuesChange}
            onUnderlyingHealthIssueChange = {onUnderlyingHealthIssueChange}
            onBloodGroupChange = {onBloodGroupChange}

            // Medical Information Update
            debuggMode={debuggMode} 
            onMedicalInfoClick={onMedicalInfoClick}
            onMedicalInfoSaveClick = {onMedicalInfoSaveClick}
            onMedicalInfoBackClick = {onMedicalInfoBackClick}

            //Save function
            onSaveClick = {onSaveClick}
            onGetStartedClick = {onGetStartedClick}
            />
        );
    }
}