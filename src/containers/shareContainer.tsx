import React, { Component } from 'react';

import '../App.css'
import ShareComponent from '../components/shareComponent';
import { LOGGED_IN_USER_ID } from '../constants';
import { getSharableLinkAPI } from '../API/sharableLinkAPI';


interface IProps {

}

interface BodyTemperatureProps {
    reading ?: number;
    date ?: string;
    time ?: string;
    instrumentID: number;
    user_id: string | null;
  
  }
  
  interface BloodPressureProps {
    diastoleReading ?: number;
    systoleReading ?: number;
    date ?: string;
    time ?: string;
    instrumentID: number;
    user_id: string | null;
  
  }
  
  interface GlucoseProps {
    reading ?: number;
    date ?: string;
    time ?: string;
    instrumentID: number;
    user_id: string | null;
  
  }
  interface HeartRateProps {
    reading ?: number;
    date ?: string;
    time ?: string;
    instrumentID: number;
    user_id: string | null;
  
  }
  interface OxygenSaturationProps {
    reading ?: number;
    date ?: string;
    time ?: string;
    instrumentID: number;
    user_id: string | null;
  
  }
  
  interface ServerResponse {
    data: ServerData[];
  }
  
  interface ServerData {
    token ?: string;
    user_id ?: string;
    authCode?:string;
    heartRateData ?: HeartRateProps | null;
    bloodPressureData ?: BloodPressureProps | null;
    bodyTemperatureData ?: BodyTemperatureProps | null;
    glucoseData ?: GlucoseProps | null;
    oxygenSaturationData ?: OxygenSaturationProps | null;
  }

interface StateProps {
validated : boolean;
modalShow : boolean;
payload ?: string;
}
export default class ShareContainer extends Component<IProps,StateProps> {

    /*   *
        *  Initializer
        *------------------------------------------------------------
    */
    constructor(props:IProps){
        super(props);
        this.state={
            validated:false,
            modalShow:false,
            payload:"",
    }
    this.onAgreementChange = this.onAgreementChange.bind(this);
    this.onModalClickShow = this.onModalClickShow.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
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
   onSharableLinkProcessAPI = () => {
    const { onSuccessCallBack,onFailureCallBack } = this;
    const user_id:string|undefined = JSON.parse(localStorage.getItem(LOGGED_IN_USER_ID) || '');
    getSharableLinkAPI(user_id,onSuccessCallBack,onFailureCallBack);
    }
        

    /* *
        *  Event handling functions
        *------------------------------------------------------------
    */

   onAgreementChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            validated:event.currentTarget.checked,
        })
    }

    onModalClickShow = (event: React.SyntheticEvent): void =>{
        event.preventDefault();
        this.onSharableLinkProcessAPI();
        this.setState({
            modalShow:true,
        })
    }

    onBackClick = (event: React.SyntheticEvent): void =>{
        event.preventDefault();
        this.setState({
            modalShow:false,
        })
    }

    onSuccessCallBack = (responseData: string): void => {
        this.setState({
            payload:responseData,
        })

    }

    onFailureCallBack = (responseData: ServerResponse): void => {
        alert(responseData);
    }

    /* *
        *  Main render function
        *------------------------------------------------------------
    */
    render(){
        const {validated,modalShow,payload} = this.state;
        const {onAgreementChange,onModalClickShow,onBackClick} = this;
        // console.log(process.env.REACT_APP_API_DOMAIN)
        // console.log("REACT_APP_WWW_PROTOCOL:", process.env.REACT_APP_WWW_PROTOCOL);
        // console.log("REACT_APP_WWW_DOMAIN:", process.env.REACT_APP_WWW_DOMAIN);
        // console.log("REACT_APP_API_PROTOCOL:", process.env.REACT_APP_API_PROTOCOL);
        return(
            <div>
                <ShareComponent
                    validated={validated}
                    modalShow={modalShow}
                    payload={payload}
                    onModalClickShow={onModalClickShow}
                    onAgreementChange={onAgreementChange}
                    onBackClick={onBackClick}
                />
            </div>
            );
        }
}
