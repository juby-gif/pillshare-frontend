import React, { Component } from 'react';

import UserProfileComponent from '../components/userProfileComponent';
import { getUserProfileAPI, updateUserProfileAPI }  from '../API/userProfileAPI';
import  LocalStorageService from '../localStorageService';
import { 
        LOGGED_IN_USER, 
        LOGGED_IN_USER_ID,
        LOGGED_IN_USER_NAME,
        USER_INFORMATION_DATA, 
        USER_CONTACT_INFORMATION_DATA, 
        USER_HEALTH_INFORMATION_DATA,
        USER_IMAGE,
        FIRST_USER,
        USER_DATA,
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
  age?:string,
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
  // images:ImageType[];
}

interface ServerResponse {
    data: ServerData;
}

interface ServerPatchData {
  message: string;
  length: number;
}
interface ServerPatchResponse {
  data:ServerPatchData;
}

interface ServerPatchErrData {
  message:string;
  length:number;
}
interface ServerPatchErrResponse {
  data: ServerPatchErrData
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
    age?:string,
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
  age?:string,
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
  // images:ImageType[];
}

// const localStorageService:any = LocalStorageService.getService()
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

    /* *
        *  API callback functions
        *------------------------------------------------------------
    */
      getUserProfileAPI(onSuccessCallBack,onFailureCallBack);
      setTimeout(() =>{this.setState({
        modalfirstShow:true,
      })},5000)
    }


    onSuccessCallBack = (responseData: ServerResponse): void => {
      // For debugging purpose only
      console.log(responseData.data);
      if (this.lengthChecker(responseData) <20){
        localStorage.setItem(FIRST_USER,"true");
      }
      if(this.lengthChecker(responseData) > 0 && responseData.data !== null && responseData.data !== undefined){
        const firstName:string|undefined = responseData.data.firstName !== "" ?responseData.data.firstName:undefined;
        const middleName:string|undefined = responseData.data.middleName !== "" ?responseData.data.middleName:undefined;
        const lastName:string|undefined = responseData.data.lastName !== "" ?responseData.data.lastName:undefined;
        const username:string|undefined = responseData.data.username !== "" ?responseData.data.username:undefined;
        const email:string|undefined =  responseData.data.email !== "" ?responseData.data.email:undefined;
        const weight:string|undefined =  responseData.data.weight !== "" ?responseData.data.weight:undefined;
        const height:string|undefined =  responseData.data.height !== "" ?responseData.data.height:undefined;
        const age:string|undefined = responseData.data.age !== "" ?responseData.data.age:undefined;
        const gender:string|undefined = responseData.data.gender !== "" ?responseData.data.gender:undefined;
        const dob:string|undefined = responseData.data.dob !== "" ?responseData.data.dob:undefined;
        const address:string|undefined = responseData.data.address !== "" ?responseData.data.address:undefined;
        const city:string|undefined = responseData.data.city !== "" ?responseData.data.city:undefined;
        const province:string|undefined = responseData.data.province !== "" ?responseData.data.province:undefined;
        const country:string|undefined = responseData.data.country !== "" ?responseData.data.country:undefined;
        const bodyMassIndexValue:string|undefined = responseData.data.bodyMassIndexValue !== "" ?responseData.data.bodyMassIndexValue:undefined;
        const zip:string|undefined = responseData.data.zip !== "" ?responseData.data.zip:undefined;
        const phone:string|undefined = responseData.data.phone !== "" ?responseData.data.phone:undefined;
        const bmi:string|undefined = responseData.data.bmi !== "" ?responseData.data.bmi:undefined;
        const bloodGroup:string|undefined = responseData.data.bloodGroup !== "" ?responseData.data.bloodGroup:undefined;
        const underlyingHealthIssues:string|undefined = responseData.data.underlyingHealthIssues !== "" ?responseData.data.underlyingHealthIssues:undefined;
        const otherHealthIssues:string|undefined = responseData.data.otherHealthIssues !== "" ?responseData.data.otherHealthIssues:undefined;

const userData:ServerData = {
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            username: username,
            email: email,
            weight: weight,
            height: height,
            age:age,
            gender:gender,
            dob:dob,
            address:address,
            city:city,
            province:province,
            country:country,
            bodyMassIndexValue:bodyMassIndexValue,
            zip:zip,
            phone:phone,
            bmi:bmi,
            bloodGroup:bloodGroup,
            underlyingHealthIssues:underlyingHealthIssues,
            otherHealthIssues:otherHealthIssues,
}
        localStorage.setItem(USER_DATA,JSON.stringify(userData))
        this.setState({
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            username: username,
            email: email,
            weight: weight,
            height: height,
            age:age,
            gender:gender,
            dob:dob,
            address:address,
            city:city,
            province:province,
            country:country,
            bodyMassIndexValue:bodyMassIndexValue,
            zip:zip,
            phone:phone,
            bmi:bmi,
            bloodGroup:bloodGroup,
            underlyingHealthIssues:underlyingHealthIssues,
            otherHealthIssues:otherHealthIssues,
            // images:responseData.data.images !== [] ?responseData.data.images:[],
            debuggMode:false,
          })
       
        }
    }

    onFailureCallBack = (error: ServerPatchResponse): void => {
      console.error(error.data.message);
  }

    lengthChecker = (data:ServerResponse | null) => {
      let count:number = 0;
      for (let datum in data?.data){
        if (data?.data.hasOwnProperty(datum)) count++;
      }
      if(count !== 0) { return count; }
      else {return 0};
    }

    onPatchRequestSuccessCallBack = (responseData: ServerPatchResponse): void => {

      // For debugging purpose only
      console.log(responseData.data.message);
      if(responseData.data.length >=20){
        if(this.state.firstUser){
          setTimeout(() => {this.setState({
            saveMode:true,
            message:"Congratulations! You have successfully unlocked all the features.",
            firstUser:false,
          })},2200);
        }else{
        setTimeout(() => {this.setState({
          saveMode:true,
          message:responseData.data.message,
        })},2200);
      }
      localStorage.setItem(FIRST_USER,"false");
      localStorage.removeItem(USER_DATA)
      }else{
        setTimeout(() => {this.setState({
          errorMode:true,
          message:responseData.data.message,
        })},2200);
      }
      setTimeout(() => {this.setState({
        saveMode:false,
        errorMode:false,
        isLoading:false,
        message:undefined,
      })},6000)
      // setTimeout(() => {this.reload()},7000);
    }
      
    onPatchFailureCallBack = (error: ServerPatchErrData): void => {
      setTimeout(() => {this.setState({
        errorMode:true,
        message:error.message,
        isLoading:false,
      })},2200);
      setTimeout(() => {this.setState({
        errorMode:false,
      })},7200);
    }

    // User Information Update
    onUserInfoClick = (event: React.SyntheticEvent):void => {
      this.setState({
        userShow:true,
      })
    }
    onFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined && event.currentTarget.value !== null ) {
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
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined && event.currentTarget.value !== null ) {
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
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined && event.currentTarget.value !== null ) {
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
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined && event.currentTarget.value !== null ) {
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
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined && event.currentTarget.value !== null ) {
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
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined && event.currentTarget.value !== null ) {
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
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined && event.currentTarget.value !== null ) {
        this.setState({
          age:event.currentTarget.value,
        })
      } else {
        this.setState({
          age:undefined,
        })
      } 
    }
    onMaleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined && event.currentTarget.value !== null ) {
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
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined && event.currentTarget.value !== null ) {
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
       
        if(username !== undefined && firstName !== undefined && lastName !== undefined && email !== undefined && age !== undefined && dob !== undefined && gender !== undefined){
          LocalStorageService.updateField(USER_DATA,"username",username)
          LocalStorageService.updateField(USER_DATA,"firstName",firstName)
          LocalStorageService.updateField(USER_DATA,"lastName",lastName)
          LocalStorageService.updateField(USER_DATA,"middleName",middleName)
          LocalStorageService.updateField(USER_DATA,"email",email)
          LocalStorageService.updateField(USER_DATA,"age",age)
          LocalStorageService.updateField(USER_DATA,"dob",dob)
          LocalStorageService.updateField(USER_DATA,"gender",gender)
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
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined && event.currentTarget.value !== null ) {
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
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined && event.currentTarget.value !== null ) {
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
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined && event.currentTarget.value !== null ) {
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
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined && event.currentTarget.value !== null ) {
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
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined && event.currentTarget.value !== null ) {
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
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined && event.currentTarget.value !== null ) {
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
      
      LocalStorageService.updateField(USER_DATA,"address",address)
      LocalStorageService.updateField(USER_DATA,"city",city)
      LocalStorageService.updateField(USER_DATA,"province",province)
      LocalStorageService.updateField(USER_DATA,"country",country)
      LocalStorageService.updateField(USER_DATA,"zip",zip)
      LocalStorageService.updateField(USER_DATA,"phone",phone)
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
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined && event.currentTarget.value !== null ) {
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
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined && event.currentTarget.value !== null ) {
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
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined && event.currentTarget.value !== null ) {
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
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined && event.currentTarget.value !== null ) {
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
      if(event.currentTarget.value !== "" && event.currentTarget.value !== undefined && event.currentTarget.value !== null ) {
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
      
      LocalStorageService.updateField(USER_DATA,"weight",weight)
      LocalStorageService.updateField(USER_DATA,"height",height)
      LocalStorageService.updateField(USER_DATA,"bmi",bmi_value)
      LocalStorageService.updateField(USER_DATA,"bloodGroup",bloodGroup)
      LocalStorageService.updateField(USER_DATA,"underlyingHealthIssues",underlyingHealthIssues)
      LocalStorageService.updateField(USER_DATA,"otherHealthIssues",otherHealthIssues)
      LocalStorageService.updateField(USER_DATA,"bodyMassIndexValue",bodyMassIndexValue)
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
      const { onPatchRequestSuccessCallBack, onPatchFailureCallBack } = this;
      const userData:any = JSON.parse(localStorage.getItem(USER_DATA) || '{}');
      // const images:ImageType[] = localStorage.getItem(USER_IMAGE) === "undefined"?[]:JSON.parse(localStorage.getItem(USER_IMAGE)||'[]');
      const data:SaveDataProps = {
        firstName: userData.firstName,
        middleName: userData.middleName,
        lastName: userData.lastName,
        username: userData.username,
        email: userData.email,
        age:userData.age,
        gender:userData.gender,
        dob:userData.dob,
        address:userData.address,
        city:userData.city,
        province:userData.province,
        country:userData.country,
        zip:userData.zip,
        phone:userData.phone,
        bodyMassIndexValue:bodyMassIndexValue,
        weight: userData.weight,
        height: userData.height,
        BMI:userData.bmi,
        bloodGroup:userData.bloodGroup,
        underlyingHealthIssues:userData.underlyingHealthIssues,
        otherHealthIssues:userData.otherHealthIssues,
        // images:images,
      }
      this.setState({
        isLoading:true,
      })
      
      updateUserProfileAPI(onPatchRequestSuccessCallBack,onPatchFailureCallBack,data);
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