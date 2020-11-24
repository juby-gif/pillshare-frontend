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
import { HEARTRATEDATA } from '../constants';


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

function getStepContent(step: number) {
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

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if(activeStep === steps.length){
      localStorage.removeItem(HEARTRATEDATA);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


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
  );}

  