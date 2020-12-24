import React from 'react';
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HelpIcon from '@material-ui/icons/Help';
import AssessmentIcon from '@material-ui/icons/Assessment';
import StepConnector from '@material-ui/core/StepConnector';
import { StepIconProps } from '@material-ui/core/StepIcon';

import PillDescriptionContainer from './pillAdditionContainers/pillDescriptionContainer';
import PillReasonContainer from './pillAdditionContainers/pillReasonContainer';
import PillDurationContainer from './pillAdditionContainers/pillDurationContainer';
import PillAdditionComponentWizard from '../components/pillAdditionComponentWizard';


interface IProps {

}
// interface ServerResponse {
//   data: ServerData[];
// }

// interface ServerData {
 
// }

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
    1: <AssignmentIcon />,
    2: <AccessTimeIcon />,
    3: <HelpIcon />,
    4: <AssessmentIcon />,
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
  return ['Pill Description', 'Duration', 'Reason', 'Review and Submit'];
}



    /* *
        *  Get length of the object
        *------------------------------------------------------------
    */
// const lengthChecker = (data:HeartRateProps | BloodPressureProps | BodyTemperatureProps | GlucoseProps | OxygenSaturationProps | null) => {
//   let count:number = 0;
//   for (let datum in data){
//     if (data.hasOwnProperty(datum)) count++;
//   }
//   if(count !== 0) { return count; }
//   else {return 0};
// }


    /* *
        *  API callback functions
        *------------------------------------------------------------
    */
  // const onTimeSeriesAPICall = async (data:HeartRateProps | BloodPressureProps | BodyTemperatureProps | GlucoseProps | OxygenSaturationProps | null,name:string) :Promise<void> =>{
  //   postTimeSeriesData(data,name,onSuccessCallBack,onFailureCallBack)
  // }

    /* *
        *  Process API Calls
        *------------------------------------------------------------
    */
  // const onTimeSeriesDataProcessAPI =( 
  //                                     token:string | null,
  //                                     user_id:string | null,
  //                                     heartRateData:HeartRateProps | null,
  //                                     bloodPressureData:BloodPressureProps | null,
  //                                     bodyTemperatureData:BodyTemperatureProps | null,
  //                                     glucoseData:GlucoseProps | null,
  //                                     oxygenSaturationData:OxygenSaturationProps | null,
  //                                   ) => {

  // if (lengthChecker(heartRateData) > 2) {
  //   onTimeSeriesAPICall(heartRateData,"heart_rate_measurements");
  // }
  
  // if (lengthChecker(bloodPressureData) > 2) {
  //   onTimeSeriesAPICall(bloodPressureData,"blood_pressure_measurements");
  // }

  // if (lengthChecker(bodyTemperatureData) > 2) {
  //   onTimeSeriesAPICall(bodyTemperatureData,"body_temperature_measurements");
  // }

  // if (lengthChecker(glucoseData) > 2) {
  //   onTimeSeriesAPICall(glucoseData,"glucose_measurements");
  // }

  // if (lengthChecker(oxygenSaturationData) > 2) {
  //   onTimeSeriesAPICall(oxygenSaturationData,"oxygen_saturation_measurements");
  // }
  // }
  
  //   /* *
  //       *  Server Response Process Calls
  //       *------------------------------------------------------------
  //   */

  // const onSuccessCallBack = (responseData : ServerResponse) => {
  //   console.log(responseData)
  // }
  // const onFailureCallBack = (responseData:ServerResponse) => {
  //   console.log(responseData)
  // }

  


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
        return <PillDescriptionContainer />;
      case 1:
        return <PillDurationContainer />;
      case 2:
        return <PillReasonContainer />;
      default:
        return '404'; // To be redirected to 404-Page
    }
  }
      const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      // console.log(localStorage.getItem(HEARTRATEDATA) )
      // TODO ADD VALIDATION
      if(activeStep === steps.length - 1 ){
        // let token: string | null = localStorage.getItem(PILLSHARE_USER_TOKEN)|| '{}';
        // let user_id: string | null = JSON.parse(localStorage.getItem(LOGGED_IN_USER_ID) || '');
        // let heartRateData: HeartRateProps | null = JSON.parse(localStorage.getItem(HEARTRATEDATA)|| '{}');
        // let bloodPressureData: BloodPressureProps | null = JSON.parse(localStorage.getItem(BLOODPRESSUREDATA)|| '{}');
        // let bodyTemperatureData: BodyTemperatureProps | null = JSON.parse(localStorage.getItem(BODYTEMPERATURE)|| '{}');
        // let glucoseData: GlucoseProps | null = JSON.parse(localStorage.getItem(GLUCOSE)|| '{}');
        // let oxygenSaturationData: OxygenSaturationProps | null = JSON.parse(localStorage.getItem(OXYGENSATURATION)|| '{}');
        // onTimeSeriesDataProcessAPI(token,user_id,heartRateData,bloodPressureData,bodyTemperatureData,glucoseData,oxygenSaturationData);
        // localStorage.removeItem(HEARTRATEDATA);
        // localStorage.removeItem(BLOODPRESSUREDATA);
        // localStorage.removeItem(BODYTEMPERATURE);
        // localStorage.removeItem(GLUCOSE);
        // localStorage.removeItem(OXYGENSATURATION);
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
      <PillAdditionComponentWizard
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
