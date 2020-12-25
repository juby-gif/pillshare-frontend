import React, { Component } from 'react';

import PillDescriptionComponent from '../../components/pillAdditionComponents/pillDescriptionComponent';
import { PILL_DESCRIPTION } from '../../constants';


interface IProps {

}
interface StateProps {
name ?: string;
dose ?: string;
dosage ?: string;
measure ?: string;
beforeOrAfter ?: string;
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
    if(localStorage.getItem(PILL_DESCRIPTION) !== null || localStorage.getItem(PILL_DESCRIPTION) !== undefined){
      const descriptionData: StateProps = JSON.parse(localStorage.getItem(PILL_DESCRIPTION)|| '{}');
      this.setState({
          name:descriptionData.name,
          dose:descriptionData.dose,
          dosage: descriptionData.dosage,
          measure: descriptionData.measure,
          beforeOrAfter: descriptionData.beforeOrAfter,
      })
      }
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
      this.setState({
        dose:event.currentTarget.value,
      })
    } 
    
    onMeasureChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        measure:event.currentTarget.value,
      })
    } 

    onDosageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        dosage:event.currentTarget.value,
      })
    } 

    onBeforeOrAfterFoodChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        beforeOrAfter:event.currentTarget.value,
      })
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