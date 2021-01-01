import React, { Component } from 'react';

import PillDescriptionComponent from '../../components/pillEditComponents/pillDescriptionComponent';
import { PILL_DESCRIPTION, USER_MEDICAL_TABLE_EDIT } from '../../constants';


interface IProps {

}
interface StateProps {
  name ?: string;
  dose ?: string;
  dosage ?: string;
  measure ?: string;
  beforeOrAfter ?: string;
}

interface DataProps{
  name ?: string;
  dose ?: string;
  dosage ?: string;
  measure ?: string;
  before_or_after ?: string;
}

export default class PillDescriptionContainer extends Component<IProps,StateProps> {
    
    /*   *
        *  Initializer
        *------------------------------------------------------------
    */
    constructor(props:IProps){
        super(props);
        this.state = {
          name:"",
          dose:"",
          dosage: "",
          measure: "",
          beforeOrAfter: "",
        }
      this.onPillNameChange = this.onPillNameChange.bind(this);
      this.onDosageChange = this.onDosageChange.bind(this);
      this.onDoseChange = this.onDoseChange.bind(this);
      this.onMeasureChange = this.onMeasureChange.bind(this);
      this.onBeforeOrAfterFoodChange = this.onBeforeOrAfterFoodChange.bind(this);
      this.onUpdate = this.onUpdate.bind(this);
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
 
   componentDidMount(){
    setTimeout(() => {if(localStorage.getItem(PILL_DESCRIPTION) !== null && localStorage.getItem(PILL_DESCRIPTION) !== undefined && localStorage.getItem(PILL_DESCRIPTION) !== '{}'){
      const descriptionData: StateProps = JSON.parse(localStorage.getItem(PILL_DESCRIPTION)|| '{}');
      this.setState({
        name:descriptionData.name,
        dose:descriptionData.dose,
        dosage: descriptionData.dosage,
        measure: descriptionData.measure,
        beforeOrAfter: descriptionData.beforeOrAfter,
    })
    } else if(localStorage.getItem(USER_MEDICAL_TABLE_EDIT) !== null && localStorage.getItem(USER_MEDICAL_TABLE_EDIT) !== undefined && localStorage.getItem(USER_MEDICAL_TABLE_EDIT) !== '{}'){
      const descriptionData: DataProps = JSON.parse(localStorage.getItem(USER_MEDICAL_TABLE_EDIT)|| '{}');
      this.setState({
          name:descriptionData.name,
          dose:descriptionData.dose,
          dosage: descriptionData.dosage,
          measure: descriptionData.measure,
          beforeOrAfter: descriptionData.before_or_after,
      })
      }},500);
    }

    componentDidUpdate(){
      this.onUpdate();
    }

  /* *
      *  API callback functions
      *------------------------------------------------------------
  */
  /* *
      *  Event handling functions
      *------------------------------------------------------------
  */
    
    onPillNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        name:event.currentTarget.value,
      })
    }
    onDoseChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if(event.currentTarget.value !== "0") {
        this.setState({
        dose:event.currentTarget.value,
        })
      } else {
        this.setState({
          dose:undefined,
        })
      } 
    }
    
    onMeasureChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if(event.currentTarget.value !== "0") {
        this.setState({
        measure:event.currentTarget.value,
        })
      } else {
        this.setState({
          measure:undefined,
        })
      } 
    }

    onDosageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if(event.currentTarget.value !== "0") {
        this.setState({
        dosage:event.currentTarget.value,
        })
      } else {
        this.setState({
          dosage:undefined,
        })
      } 
    }

    onBeforeOrAfterFoodChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if(event.currentTarget.value !== "0") {
        this.setState({
        beforeOrAfter:event.currentTarget.value,
        })
      } else {
        this.setState({
          beforeOrAfter:undefined,
        })
      } 
    }
    
    onUpdate = ():void => {
      const { name,dose,dosage,measure,beforeOrAfter } = this.state;
      localStorage.setItem(PILL_DESCRIPTION,JSON.stringify({
        name:name,
        dose:dose,
        dosage:dosage,
        measure:measure,
        beforeOrAfter:beforeOrAfter,
      }))
    }
  /* *
      *  Main render function
      *------------------------------------------------------------
  */
  render () {
    
      const { onDoseChange,
              onDosageChange,
              onMeasureChange,
              onBeforeOrAfterFoodChange,
              onPillNameChange,
            } = this;

      const { dose,
              dosage,
              measure,
              beforeOrAfter,
              name,
            } = this.state;

      return (
        <PillDescriptionComponent
            dose={dose}
            dosage= {dosage}
            measure={measure}
            beforeOrAfter={beforeOrAfter}
            name={name}
            onPillNameChange={onPillNameChange}
            onDosageChange={onDosageChange}
            onDoseChange={onDoseChange}
            onMeasureChange={onMeasureChange}
            onBeforeOrAfterFoodChange={onBeforeOrAfterFoodChange}
        />
        );
    }
}