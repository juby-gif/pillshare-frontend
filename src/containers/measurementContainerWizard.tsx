import React from 'react';
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import TrendingUp from '@material-ui/icons/TrendingUp';
import Favorite from '@material-ui/icons/Favorite';
import AvTimer from '@material-ui/icons/AvTimer';
import Assessment from '@material-ui/icons/Assessment';
import TouchApp from '@material-ui/icons/TouchApp';
import VisibilityIcon from '@material-ui/icons/Visibility';
import StepConnector from '@material-ui/core/StepConnector';
import { StepIconProps } from '@material-ui/core/StepIcon';

import MeasurementComponentWizard from '../components/measurementComponentWizard';
import HeartRateContainer from './measurementContainers/heartRateContainer';
import BloodPressureContainer from './measurementContainers/bloodPressureContainer';
import BodyTemperatureContainer from './measurementContainers/bodyTemperatureContainer';
import GlucoseContainer from './measurementContainers/glucoseContainer';
import OxygenSaturationContainer from './measurementContainers/oxygenSaturationContainer';
import ReviewContainer from './measurementContainers/reviewContainer'
import { BODYTEMPERATURE, HEARTRATEDATA, OXYGENSATURATION, GLUCOSE, BLOODPRESSUREDATA, PILLSHARE_USER_TOKEN, LOGGED_IN_USER_ID } from '../constants';
import { postTimeSeriesData } from '../API/measurementAPI'

interface BodyTemperatureProps {
  reading ?: number;
  time ?: string;
  instrumentID?: number;

}

interface BloodPressureProps {
  diastoleReading ?: number;
  systoleReading ?: number;
  time ?: string;
  instrumentID?: number;

}

interface GlucoseProps {
  reading ?: number;
  time ?: string;
  instrumentID?: number;

}
interface HeartRateProps {
  reading ?: number;
  time ?: string;
  instrumentID?: number;

}
interface OxygenSaturationProps {
  reading ?: number;
  time ?: string;
  instrumentID?: number;

}
interface ServerResponse {
data: ServerData;
}

interface ServerData {
  heartRate ?: HeartRateProps;
  bloodPressure ?: BloodPressureProps;
  bodyTemperature ?: BodyTemperatureProps;
  glucose ?: GlucoseProps;
  oxygenSaturation ?: OxygenSaturationProps;
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
    1: <Favorite />,
    2: <TrendingUp />,
    3: <AvTimer />,
    4: <Assessment />,
    5: <TouchApp />,
    6: <VisibilityIcon />,
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
  return ['Heart Rate Measure', 'Blood Pressure Measure', 'Body Temperature Measure', 'Glucose Measure', 'Oxygen Saturation Measure', 'Review and Submit'];
}



    /* *
        *  Get length of the object
        *------------------------------------------------------------
    */
const lengthChecker = (data:HeartRateProps|BloodPressureProps|BodyTemperatureProps|GlucoseProps|OxygenSaturationProps) => {
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
  const onTimeSeriesAPICall = async (heartRateData:HeartRateProps,bloodPressureData:BloodPressureProps,bodyTemperatureData:BodyTemperatureProps,glucoseData:GlucoseProps,oxygenSaturationData:OxygenSaturationProps) :Promise<void> =>{
    postTimeSeriesData(heartRateData,bloodPressureData,bodyTemperatureData,glucoseData,oxygenSaturationData,onSuccessCallBack,onFailureCallBack)
  }

    /* *
        *  Process API Calls
        *------------------------------------------------------------
    */
  const onTimeSeriesDataProcessAPI =( 
                                      heartRateData:HeartRateProps,
                                      bloodPressureData:BloodPressureProps,
                                      bodyTemperatureData:BodyTemperatureProps,
                                      glucoseData:GlucoseProps,
                                      oxygenSaturationData:OxygenSaturationProps,
                                    ) => {

  if (lengthChecker(heartRateData) > 2 && lengthChecker(bloodPressureData) > 2 && lengthChecker(bodyTemperatureData) > 2 && lengthChecker(glucoseData) > 2 && lengthChecker(oxygenSaturationData) > 2) {
    onTimeSeriesAPICall(heartRateData,bloodPressureData,bodyTemperatureData,glucoseData,oxygenSaturationData);
  }
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

  


export default function CustomizedSteppers() {

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
        return <HeartRateContainer />;
      case 1:
        return <BloodPressureContainer />;
      case 2:
        return <BodyTemperatureContainer />;
      case 3:
        return <GlucoseContainer />;
      case 4:
        return <OxygenSaturationContainer />;
      case 5:
        return <ReviewContainer />;
      default:
        return '404'; // To be redirected to 404-Page
    }
  }
      const handleNext = () => {
      // console.log(localStorage.getItem(HEARTRATEDATA) )
      // TODO ADD VALIDATION

      if(activeStep === 0 ){
        let heartData: HeartRateProps = JSON.parse(localStorage.getItem(HEARTRATEDATA)||'{}');
        if(lengthChecker(heartData) === 3){
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
        else {
          setActiveStep((prevActiveStep) => prevActiveStep)
        }
      } else if(activeStep === 1 ){
        let bloodPressureData : BloodPressureProps = JSON.parse(localStorage.getItem(BLOODPRESSUREDATA)||'{}');
        if(lengthChecker(bloodPressureData) === 4){
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
        else {
          setActiveStep((prevActiveStep) => prevActiveStep)
        }
      } else if(activeStep === 2 ){
        let bodyTemperatureData : BodyTemperatureProps = JSON.parse(localStorage.getItem(BODYTEMPERATURE)||'{}');
        if(lengthChecker(bodyTemperatureData) === 3){
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
        else {
          setActiveStep((prevActiveStep) => prevActiveStep)
        }
      } else if(activeStep === 3 ){
        let glucoseData : GlucoseProps = JSON.parse(localStorage.getItem(GLUCOSE)||'{}');
        if(lengthChecker(glucoseData) === 3){
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
        else {
          setActiveStep((prevActiveStep) => prevActiveStep)
        }
      } else if(activeStep === 4 ){
        let oxygenSaturationData : OxygenSaturationProps = JSON.parse(localStorage.getItem(OXYGENSATURATION)||'{}');
        if(lengthChecker(oxygenSaturationData) === 3){
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
        else {
          setActiveStep((prevActiveStep) => prevActiveStep)
        }
      } else if(activeStep === 5 ){
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
      if(activeStep === steps.length - 1 ){
        let heartRateData: HeartRateProps= JSON.parse(localStorage.getItem(HEARTRATEDATA)|| '{}');
        heartRateData.time = new Date(heartRateData.time?heartRateData.time:0).toISOString();
        let bloodPressureData: BloodPressureProps = JSON.parse(localStorage.getItem(BLOODPRESSUREDATA)|| '{}');
        bloodPressureData.time = new Date(bloodPressureData.time?bloodPressureData.time:0).toISOString();
        let bodyTemperatureData: BodyTemperatureProps = JSON.parse(localStorage.getItem(BODYTEMPERATURE)|| '{}');
        bodyTemperatureData.time = new Date(bodyTemperatureData.time?bodyTemperatureData.time:0).toISOString();
        let glucoseData: GlucoseProps = JSON.parse(localStorage.getItem(GLUCOSE)|| '{}');
        glucoseData.time = new Date(glucoseData.time?glucoseData.time:0).toISOString();
        let oxygenSaturationData: OxygenSaturationProps = JSON.parse(localStorage.getItem(OXYGENSATURATION)|| '{}');
        oxygenSaturationData.time = new Date(oxygenSaturationData.time?oxygenSaturationData.time:0).toISOString();
        onTimeSeriesDataProcessAPI(heartRateData,bloodPressureData,bodyTemperatureData,glucoseData,oxygenSaturationData);
        localStorage.removeItem(HEARTRATEDATA);
        localStorage.removeItem(BLOODPRESSUREDATA);
        localStorage.removeItem(BODYTEMPERATURE);
        localStorage.removeItem(GLUCOSE);
        localStorage.removeItem(OXYGENSATURATION);
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
      <MeasurementComponentWizard 
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
