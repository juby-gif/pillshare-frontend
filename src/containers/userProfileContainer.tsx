import React, { Component } from 'react';

import UserProfileComponent from '../components/userProfileComponent';
import { getUserProfileAPI } from '../API/userProfileAPI';
import { LOGGED_IN_USER } from '../constants';


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
}
export default class UserProfileContainer extends Component<IProps,StateProps> {
    constructor(props:IProps){
        super(props);
        this.state = {
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

        }
        this.onWeightChange = this.onWeightChange.bind(this);
        this.onHeightChange = this.onHeightChange.bind(this);
        this.onBodyMassIndexCalculation = this.onBodyMassIndexCalculation.bind(this);
        this.onSuccessCallBack = this.onSuccessCallBack.bind(this);
        this.onFailureCallBack = this.onFailureCallBack.bind(this);
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
      
      onFailureCallBack = (error: ServerResponse): void => {
          alert(error);
      }
 
  render () {
      const { onWeightChange,onHeightChange,onBodyMassIndexCalculation } = this;
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
             } = this.state;
        return(
            <UserProfileComponent 
            firstName = {firstName}
            middleName = {middleName}
            lastName = {lastName}
            username = {username}
            email = {email}
            onWeightChange = {onWeightChange}
            onHeightChange = {onHeightChange}
            onBodyMassIndexCalculation = {onBodyMassIndexCalculation}
            weight = {weight}
            height = {height}
            age = {age}
            gender = {gender}
            dob = {dob}
            address = {address}
            city = {city}
            province = {province}
            country = {country}
            zip = {zip}
            phone = {phone}
            bmi = {bmi}
            bloodGroup = {bloodGroup}
            underlyingHealthIssues = {underlyingHealthIssues}
            otherHealthIssues = {otherHealthIssues}
            />
        );
    }
}