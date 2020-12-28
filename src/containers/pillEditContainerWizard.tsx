import React, { useEffect } from 'react';
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HelpIcon from '@material-ui/icons/Help';
import AssessmentIcon from '@material-ui/icons/Assessment';
import StepConnector from '@material-ui/core/StepConnector';
import { StepIconProps } from '@material-ui/core/StepIcon';
import { useParams } from 'react-router-dom'

import PillDescriptionContainer from './pillEditContainers/pillDescriptionContainer';
import PillReasonContainer from './pillEditContainers/pillReasonContainer';
import PillDurationContainer from './pillEditContainers/pillDurationContainer';
import PillEditComponentWizard from '../components/pillEditComponentWizard';
import PillAdditionReviewContainer from './pillEditContainers/pillEditReviewContainer';
import { LOGGED_IN_USER_ID, PILL_DESCRIPTION, PILL_DURATION, PILL_REASON } from '../constants';
import { patchPillData, getMedicalTableInfoById } from '../API/tableDataAPI';

interface DescriptionProps {
  name ?: string;
  dose ?: string;
  dosage ?: string;
  measure ?: string;
  beforeOrAfter ?: string;
}

interface DurationProps {
  numberOfDays ?: string;
  startDate ?: string;
  endDate ?: string;
  morning ?: string;
  afternoon ?: string;
  evening ?: string;
  night ?: string;
}

interface ReasonProps {
  reason ?: string;
}

interface ParamProps {
  id:string;
}

interface IProps {
  durationData : DurationProps;
  descriptionData : DescriptionProps;
  reasonData : ReasonProps;
}

interface ParamProps {
  id:string;
}

interface ServerResponseProps {
data:ServerDataProps[];
}

interface IntervalProps {
  part: string[];
  time: string[];
}

interface DataProps{
  index?:number;
  before_or_after ?: string;
  dosage ?: string;
  dose ?: string;
  duration ?: string;
  end_date ?: string;
  start_date ?: string;
  missed ?: string[];
  measure ?: string;
  name ?: string;
  reason ?: string;
  taken ?: string[];
  intervals ?: IntervalProps;
  isDeleted ?:boolean;
  id?:number;
}

interface PatchProps {
  index?:number;
  before_or_after ?: string;
  dosage ?: string;
  dose ?: string;
  duration ?: string;
  end_date ?: string;
  start_date ?: string;
  missed ?: string[];
  measure ?: string;
  name ?: string;
  reason ?: string;
  taken ?: string[];
  intervals ?: IntervalProps;
  isDeleted ?:boolean;
  id?:number;
}

interface PatchRequestProps{
  data:PatchProps[];
  }
  

interface ServerDataProps {
  user_id:string|null;
  name?:string;
  dose?:string;
  measure?:string;
  isDeleted:boolean;
  dosage?:string;
  before_or_after?:string;
  duration?:string;
  start_date?:string;
  end_date?:string;
  intervals:IntervalProps,
  reason?:string;
  taken?:string[];
  missed?:string[];
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
const lengthChecker = (data:DescriptionProps | DurationProps | ReasonProps | null) => {
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
  const postPillAPICall = async (user_id:string|null,id:string, data:ServerDataProps) :Promise<void> =>{
    patchPillData(user_id,id,data,onSuccessCallBack,onFailureCallBack)
    // alert("Call API for PATCH Request");
  }

    /* *
        *  Process API Calls
        *------------------------------------------------------------
    */
  
  /* *
      *  Server Response Process Calls
      *------------------------------------------------------------
  */
  const onEditPillProcessAPI = (user_id: string|null,id:string,pillDescription:DescriptionProps|null,pillDuration:DurationProps|null,pillReason:ReasonProps|null) => {
    
    let time: string[] | undefined = [];
    if(pillDuration?.morning){
      time.push(pillDuration.morning)
    }
    if(pillDuration?.afternoon){
      time.push(pillDuration.afternoon)
    }
    if(pillDuration?.evening){
      time.push(pillDuration.evening)
    }
    if(pillDuration?.night){
      time.push(pillDuration.night)
    }

    let part: string[] = [];
    if(pillDuration?.morning){
      part.push("Morning")
    }
    if(pillDuration?.afternoon){
      part.push("Afternoon")
    }
    if(pillDuration?.evening){
      part.push("Evening")
    }
    if(pillDuration?.night){
      part.push("Night")
    }
    const data:ServerDataProps = {
      user_id:user_id,
      name:pillDescription?.name,
      dose:pillDescription?.dose,
      measure:pillDescription?.measure,
      isDeleted: false,
      dosage:pillDescription?.dosage,
      before_or_after:pillDescription?.beforeOrAfter,
      duration:pillDuration?.numberOfDays,
      start_date:pillDuration?.startDate,
      end_date:pillDuration?.endDate,
      intervals:{
        part:part,
        time:time,
      },
      reason:pillReason?.reason,
      //The value for taken and missed will be processed on the Golang server.
      //The values which are assigned is just for demonstration purpose only.
      taken:part,
      missed:[],
    }
    postPillAPICall(user_id,id,data);
  }

  const onSuccessCallBack = (responseData : PatchRequestProps) => {
    console.log(responseData)
  }

  const onSuccessGetRequestCallBack = (responseData : DataProps):void =>{
    console.log(responseData);
  }
  const onFailureCallBack = (responseData:ServerResponseProps) => {
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
    let param:ParamProps = useParams();

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

   useEffect(() => {
    let user_id: string | null = JSON.parse(localStorage.getItem(LOGGED_IN_USER_ID) || '');
          getMedicalTableInfoById(user_id,param.id,onSuccessGetRequestCallBack,onFailureCallBack)
        }, [param.id]);

        
  
  const getStepContent = (step: number):JSX.Element|string => {
    // console.log()
    switch (step) {
      case 0:
        return <PillDescriptionContainer />;
      case 1:
        return <PillDurationContainer />;
      case 2:
        return <PillReasonContainer />;
      case 3:
        return <PillAdditionReviewContainer />;
      default:
        return '404'; // To be redirected to 404-Page
    }
  }
      const handleNext = () => {
        // Forcing the user to enter the informations and doing validations
        if(activeStep === 0 ){
          let pillDescription: DescriptionProps = JSON.parse(localStorage.getItem(PILL_DESCRIPTION)||'{}');
          if(lengthChecker(pillDescription) === 5){
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
          }
          else {
            setActiveStep((prevActiveStep) => prevActiveStep)
          }
        } else if(activeStep === 1 ){
          let pillDuration : DurationProps = JSON.parse(localStorage.getItem(PILL_DURATION)||'{}');
          if(lengthChecker(pillDuration) > 3){
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
          }
          else {
            setActiveStep((prevActiveStep) => prevActiveStep)
          }
        } else if(activeStep === 2 ){
          let pillReason : ReasonProps = JSON.parse(localStorage.getItem(PILL_REASON)||'{}');
          if(lengthChecker(pillReason) === 1){
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
          }
          else {
            setActiveStep((prevActiveStep) => prevActiveStep)
          }
        } else if(activeStep === 3 ){
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
          }
    
      if(activeStep === steps.length - 1 ){
        // let token: string | null = localStorage.getItem(PILLSHARE_USER_TOKEN)|| '{}';
        let user_id: string | null = JSON.parse(localStorage.getItem(LOGGED_IN_USER_ID) || '');
        let pillDescription: DescriptionProps | null = JSON.parse(localStorage.getItem(PILL_DESCRIPTION)|| '{}');
        let pillDuration: DurationProps | null = JSON.parse(localStorage.getItem(PILL_DURATION)|| '{}');
        let pillReason: ReasonProps | null = JSON.parse(localStorage.getItem(PILL_REASON)|| '{}');
        let id:string = param.id;
        onEditPillProcessAPI(user_id,id,pillDescription,pillDuration,pillReason);
        localStorage.removeItem(PILL_DESCRIPTION);
        localStorage.removeItem(PILL_DURATION);
        localStorage.removeItem(PILL_REASON);
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
      <PillEditComponentWizard
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
