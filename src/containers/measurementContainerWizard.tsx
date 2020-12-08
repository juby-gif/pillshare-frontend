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
import { BODYTEMPERATURE, HEARTRATEDATA, OXYGENSATURATION, GLUCOSE, BLOODPRESSUREDATA, PILLSHARE_USER_TOKEN, LOGGED_IN_USER } from '../constants';
import { postTimeSeriesData } from '../API/measurementAPI'

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
  token : string;
  user_id : string;
  heartRateData ?: HeartRateProps | null;
  bloodPressureData ?: BloodPressureProps | null;
  bodyTemperatureData ?: BodyTemperatureProps | null;
  glucoseData ?: GlucoseProps | null;
  oxygenSaturationData ?: OxygenSaturationProps | null;
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

function ColorlibStepIcon(props: StepIconProps) {
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

const onSaveData = (reading?:number,date?:string,time?:string,instrumentID?:number,systoleReading?:number,diastoleReading?:number):void =>{
  console.log("Reading=> ",reading," Date=> ",date," Time=> ",time," Systole Reading=> ",systoleReading," Diastole Reading=> ",diastoleReading," Instrument ID=> ",instrumentID);
  console.log("lslslls")
}

function getStepContent(step: number) {
  // console.log()
  switch (step) {
    case 0:
      return <HeartRateContainer onSaveData={onSaveData} />;
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

    /* *
        *  Get length of the object
        *------------------------------------------------------------
    */
const lengthChecker = (data:HeartRateProps | BloodPressureProps | BodyTemperatureProps | GlucoseProps | OxygenSaturationProps | null) => {
  let count:number = 0;
  for (let datum in data){
    if (data.hasOwnProperty(datum)) count++;
  }
  if(count === 0) { return 0; }
}


    /* *
        *  API callback functions
        *------------------------------------------------------------
    */
  const onTimeSeriesAPICall = async (data:HeartRateProps | BloodPressureProps | BodyTemperatureProps | GlucoseProps | OxygenSaturationProps | null,name:string) :Promise<void> =>{
    postTimeSeriesData(data,name,onSuccessCallBack,onFailureCallBack)
  }

    /* *
        *  Process API Calls
        *------------------------------------------------------------
    */
  const onTimeSeriesDataProcessAPI =( 
                                      token:string | null,
                                      user_id:string | null,
                                      heartRateData:HeartRateProps | null,
                                      bloodPressureData:BloodPressureProps | null,
                                      bodyTemperatureData:BodyTemperatureProps | null,
                                      glucoseData:GlucoseProps | null,
                                      oxygenSaturationData:OxygenSaturationProps | null,
                                    ) => {

  if (lengthChecker(heartRateData) !== 0) {
    onTimeSeriesAPICall(heartRateData,"heart_rate_measurements");
  }
  if (lengthChecker(bloodPressureData) !== 0) {
    onTimeSeriesAPICall(bloodPressureData,"blood_pressure_measurements");
  }
  if (lengthChecker(bodyTemperatureData) !== 0) {
    onTimeSeriesAPICall(bodyTemperatureData,"body_temperature_measurements");
  }
  if (lengthChecker(glucoseData) !== 0) {
    onTimeSeriesAPICall(glucoseData,"glucose_measurements");
  }
  if (lengthChecker(oxygenSaturationData) !== 0) {
    onTimeSeriesAPICall(oxygenSaturationData,"oxygen_saturation_measurements");
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
      
      const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      onSaveData();

      // TODO ADD SAVE FUNCTIONALITY
      // TODO ADD VALIDATION
      if(activeStep === steps.length - 1 ){
        let token: string | null = localStorage.getItem(PILLSHARE_USER_TOKEN)|| '{}';
        let user_id: string | null = JSON.parse(sessionStorage.getItem(LOGGED_IN_USER) || '{}').user_id;
        let heartRateData: HeartRateProps | null = JSON.parse(localStorage.getItem(HEARTRATEDATA)|| '{}');
        let bloodPressureData: BloodPressureProps | null = JSON.parse(localStorage.getItem(BLOODPRESSUREDATA)|| '{}');
        let bodyTemperatureData: BodyTemperatureProps | null = JSON.parse(localStorage.getItem(BODYTEMPERATURE)|| '{}');
        let glucoseData: GlucoseProps | null = JSON.parse(localStorage.getItem(GLUCOSE)|| '{}');
        let oxygenSaturationData: OxygenSaturationProps | null = JSON.parse(localStorage.getItem(OXYGENSATURATION)|| '{}');
        onTimeSeriesDataProcessAPI(token,user_id,heartRateData,bloodPressureData,bodyTemperatureData,glucoseData,oxygenSaturationData);
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
