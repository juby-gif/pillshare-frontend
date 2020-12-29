import React from 'react';
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import Assessment from '@material-ui/icons/Assessment';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import StepConnector from '@material-ui/core/StepConnector';
import { StepIconProps } from '@material-ui/core/StepIcon';

import AttitudeChangeContainer from './healthCheckContainers/attitudeChangeContainer';
import FeelCheckContainer from './healthCheckContainers/feelCheckContainer';
import SymptomsCheckContainer from './healthCheckContainers/symptomsCheckContainer';
import HealthCheckReviewContainer from './healthCheckContainers/healthCheckReviewContainer';
import HealthCheckComponentWizard from '../components/healthCheckComponentWizard';
import  { ATTITUDE_CHECK, SYMPTOMS_CHECK, FEEL_CHECK, LOGGED_IN_USER_ID }  from '../constants';
import { postHealthCheckData } from '../API/healthCheckAPI';


interface IProps {

}
interface ServerResponse {
  data: ServerData[];
}

interface FeelProps {
  healthCheck ?: string;
}

interface SymptomsProps{
  date : string;
  time : string;
  intensity ?: number;
  values ?: string[] | number[] | boolean[];
}

interface AttitudeProps{
  anxietyCheck ?: boolean;
  depressionCheck ?: boolean;
  irritabilityCheck ?: boolean;
  peacefulCheck ?: boolean;
  happyCheck ?: boolean;
  othersCheck ?: boolean;
  othersValue ?: string;
}

interface ServerData {
  user_id ?: string;
  date ?: string;
  time ?: string;
  intensity ?: number;
  values ?: string[] | number[] | boolean[];
  anxietyCheck ?: boolean;
  depressionCheck ?: boolean;
  irritabilityCheck ?: boolean;
  peacefulCheck ?: boolean;
  happyCheck ?: boolean;
  othersCheck ?: boolean;
  othersValue ?: string;
  healthCheck ?: string;
}


const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

const ColorlibStepIcon = (props: StepIconProps) => {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <LocalHospitalIcon />,
    2: <HowToRegIcon />,
    3: <InsertChartIcon />,
    4: <Assessment />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

function getSteps() {
  return ['Symptoms Check', 'Attitude Check', 'Overall Health', 'Review and Submit'];
}



    /* *
        *  Get length of the object
        *------------------------------------------------------------
    */
    const lengthChecker = (data:ServerData) => {
      let count:number = 0;
      for (let datum in data){
        if (data.hasOwnProperty(datum)) count++;
      }
      if(count !== 0) { return count; }
      else {return 0};
    }


    /* *
        *  API callback functions
        *------------------------------------------------------------
    */
    const onHealthCheckAPICall = async (data:ServerData) :Promise<void> =>{
    postHealthCheckData(data,onSuccessCallBack,onFailureCallBack)
console.log(data);
  }

    /* *
        *  Process API Calls
        *------------------------------------------------------------
    */
    const onHealthCheckProcessAPI =( 
                                      user_id:string | undefined,
                                      symptomsData:SymptomsProps | undefined,
                                      attitudeData:AttitudeProps | undefined,
                                      feelData:FeelProps | undefined,
                                    ) => {
      let anxietyCheck:boolean|undefined;
      let depressionCheck:boolean|undefined;
      let irritabilityCheck:boolean|undefined;
      let peacefulCheck:boolean|undefined;
      let happyCheck:boolean|undefined;
      let othersCheck:boolean|undefined;

      if(attitudeData?.anxietyCheck === undefined || attitudeData?.anxietyCheck === false){
        anxietyCheck = false;
      } else{
        anxietyCheck = true;
      }

      if(attitudeData?.depressionCheck === undefined || attitudeData?.depressionCheck === false){
        depressionCheck = false;
      } else{
        depressionCheck = true;
      }

      if(attitudeData?.irritabilityCheck === undefined || attitudeData?.irritabilityCheck === false){
        irritabilityCheck = false;
      } else{
        irritabilityCheck = true;
      }

      if(attitudeData?.peacefulCheck === undefined || attitudeData?.peacefulCheck === false){
        peacefulCheck = false;
      } else{
        peacefulCheck = true;
      }

      if(attitudeData?.happyCheck === undefined || attitudeData?.happyCheck === false){
        happyCheck = false;
      } else{
        happyCheck = true;
      }

      if(attitudeData?.othersCheck === undefined || attitudeData?.othersCheck === false){
        othersCheck = false;
      } else{
        othersCheck = true;
      }

      let data: ServerData = {
        user_id: user_id,
        date : symptomsData?.date,
        time : symptomsData?.time,
        values : symptomsData?.values,
        anxietyCheck : anxietyCheck,
        depressionCheck : depressionCheck,
        irritabilityCheck : irritabilityCheck,
        peacefulCheck : peacefulCheck,
        happyCheck : happyCheck,
        othersCheck : othersCheck,
        othersValue : attitudeData?.othersValue,
        healthCheck : feelData?.healthCheck,

      }
      onHealthCheckAPICall(data);
      }
  
    /* *
        *  Server Response Process Calls
        *------------------------------------------------------------
    */

    const onSuccessCallBack = (responseData : ServerResponse) => {
      console.log(responseData)
    }
    const onFailureCallBack = (responseData:ServerResponse) => {
      console.log(responseData)
    }

  


const CustomizedSteppers = (props:IProps):JSX.Element => {

    /*   *
        *  Initializer
        *------------------------------------------------------------
    */
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

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
        *  Event handling functions
        *------------------------------------------------------------
    */
  
    const getStepContent = (step: number):JSX.Element|string => {
      // console.log()
      switch (step) {
        case 0:
          return <SymptomsCheckContainer />;
        case 1:
          return <AttitudeChangeContainer />;
        case 2:
          return <FeelCheckContainer />;
        case 3:
        return <HealthCheckReviewContainer />;
        default:
          return '404'; // To be redirected to 404-Page
      }
    }
    const handleNext = () => {
      // console.log(localStorage.getItem(HEARTRATEDATA) )
      // TODO ADD VALIDATION

      if(activeStep === 0 ){
        let symptomsData: SymptomsProps = JSON.parse(localStorage.getItem(SYMPTOMS_CHECK)||'{}')
        if(lengthChecker(symptomsData) === 3){
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
        else {
          setActiveStep((prevActiveStep) => prevActiveStep)
        }
      } else if(activeStep === 1 ){
        let attitudeCheckData : AttitudeProps = JSON.parse(localStorage.getItem(ATTITUDE_CHECK)||'{}');
        if(lengthChecker(attitudeCheckData) > 0 ){
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
        else {
          setActiveStep((prevActiveStep) => prevActiveStep)
        }
      } else if(activeStep === 2 ){
        let feelData : FeelProps = JSON.parse(localStorage.getItem(FEEL_CHECK)||'{}');
        if(lengthChecker(feelData) === 1){
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
        else {
          setActiveStep((prevActiveStep) => prevActiveStep)
        }
      } else if(activeStep === 3 ){
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
      if(activeStep === steps.length - 1 ){
        // let token: string | undefined = localStorage.getItem(PILLSHARE_USER_TOKEN)|| '{}';
        let user_id: string | undefined = JSON.parse(localStorage.getItem(LOGGED_IN_USER_ID) || '');
        let symptomsData: SymptomsProps | undefined = JSON.parse(localStorage.getItem(SYMPTOMS_CHECK)|| '{}');
        let attitudeData: AttitudeProps | undefined = JSON.parse(localStorage.getItem(ATTITUDE_CHECK)|| '{}');
        let feelData: FeelProps | undefined = JSON.parse(localStorage.getItem(FEEL_CHECK)|| '{}');
        onHealthCheckProcessAPI(user_id, symptomsData, attitudeData, feelData);
        localStorage.removeItem(SYMPTOMS_CHECK);
        localStorage.removeItem(ATTITUDE_CHECK);
        localStorage.removeItem(FEEL_CHECK);
      }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    /* *
        *  Main render function
        *------------------------------------------------------------
    */  
    return (
      <HealthCheckComponentWizard
        classes = {classes}
        activeStep = {activeStep}
        steps = {steps}
        handleNext = {handleNext}
        handleBack = {handleBack}
        getStepContent = {getStepContent}
        ColorlibConnector = {ColorlibConnector}
        ColorlibStepIcon = {ColorlibStepIcon}

      />
    );
}
export default CustomizedSteppers;
