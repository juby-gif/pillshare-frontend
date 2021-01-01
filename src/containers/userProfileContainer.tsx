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
          contactShow: false,
          healthShow: false,
          medicalShow: false,
          debuggMode:false,
          modalfirstShow:false,
          saveMode:false,
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
      this.setState({
        modalfirstShow:true,
      })
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

    onPatchRequestSuccessCallBack = (responseData: ServerResponse): void => {

      // For debugging purpose only
      // console.log(responseData);
      setTimeout(() => {this.setState({
        saveMode:false,
      })},4000)
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
          console.log(username,firstName,lastName,middleName,email,age,gender,dob)
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
        console.log(imageList);
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
          bodyMassIndexValue:bodyMassIndexValue
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
      const user_id:string|null = JSON.parse(sessionStorage.getItem(LOGGED_IN_USER) || '{}').user_id;
      const userInformation = JSON.parse(localStorage.getItem(USER_INFORMATION_DATA) || '{}');
      const userContactInformation = JSON.parse(localStorage.getItem(USER_CONTACT_INFORMATION_DATA) || '{}');
      const userHealthInformation = JSON.parse(localStorage.getItem(USER_HEALTH_INFORMATION_DATA) || '{}');
      const images = JSON.parse(localStorage.getItem(USER_IMAGE) || '{}');
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
      setTimeout(() => {this.setState({
        saveMode:true,
        firstUser:false,
      })},1200);
      updateUserProfileAPI(user_id,onPatchRequestSuccessCallBack,onFailureCallBack,data);
      localStorage.setItem(FIRST_USER,"false");
      localStorage.removeItem(USER_INFORMATION_DATA);
      localStorage.removeItem(USER_CONTACT_INFORMATION_DATA);
      localStorage.removeItem(USER_HEALTH_INFORMATION_DATA);
      setTimeout(() => {this.reload()},5000);
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
              saveMode,
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
              firstUser
             } = this.state;
        return(
            <UserProfileComponent 
            userShow = {userShow}
            modalfirstShow = {modalfirstShow}
            contactShow = {contactShow}
            healthShow = {healthShow}
            medicalShow = {medicalShow}
            saveMode = {saveMode}
            firstUser = {firstUser}
            userInfoValidated = {userInfoValidated}
            contactValidated = {contactValidated}
            healthValidated = {healthValidated}
            
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