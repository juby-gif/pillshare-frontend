import React, { Component } from 'react';

import AttitudeChangeComponent from '../../components/healthCheckComponents/attitudeChangeComponent';
import { SYMPTOMS_DROPDOWN_LIST } from '../../constants';


interface IProps {

}
interface StateProps {
anxietyCheck ?: boolean;
depressionCheck ?: boolean;
irritabilityCheck ?: boolean;
peacefulCheck ?: boolean;
happyCheck ?: boolean;
othersCheck ?: boolean;
othersValue ?: string;
}

export default class AttitudeChangeContainer extends Component<IProps,StateProps> {
    
    /*   *
        *  Initializer
        *------------------------------------------------------------
    */
    constructor(props:IProps){
        super(props);
        this.state = {
          anxietyCheck:false,
          depressionCheck: false,
          irritabilityCheck: false,
          peacefulCheck: false,
          happyCheck:false,
          othersCheck:false,
          othersValue:"",
        }
      this.onAnxietyCheck = this.onAnxietyCheck.bind(this);
      this.onIrritabilityCheck = this.onIrritabilityCheck.bind(this);
      this.onDepressionCheck = this.onDepressionCheck.bind(this);
      this.onPeacefulCheck = this.onPeacefulCheck.bind(this);
      this.onHappyCheck = this.onHappyCheck.bind(this);
      this.onOthersCheck = this.onOthersCheck.bind(this);
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
  /* *
      *  Event handling functions
      *------------------------------------------------------------
  */
    
    onAnxietyCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        anxietyCheck:event.currentTarget.checked,
      })
    } 
    
    onIrritabilityCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        irritabilityCheck:event.currentTarget.checked,
      })
    } 

    onDepressionCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        depressionCheck:event.currentTarget.checked,
      })
    } 

    onPeacefulCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        peacefulCheck:event.currentTarget.checked,
      })
    } 

    onHappyCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        happyCheck:event.currentTarget.checked,
      })
    } 

    onOthersCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        othersCheck:event.currentTarget.checked,
      })
    } 

    onOthersValueChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        othersValue:event.currentTarget.value,
      })
    } 
    
    private dropdownArray: { [key: number]: Object }[] = SYMPTOMS_DROPDOWN_LIST;
    private fieldsObj: object = { text: 'value', value: 'id' };
    
 

  /* *
      *  Main render function
      *------------------------------------------------------------
  */
  render () {
      const { onAnxietyCheck,
              onIrritabilityCheck,
              onDepressionCheck,
              onPeacefulCheck,
              onHappyCheck,
              onOthersCheck,
              onOthersValueChange,
            } = this;
      const { anxietyCheck,
              depressionCheck,
              irritabilityCheck,
              peacefulCheck,
              happyCheck,
              othersCheck,
              othersValue,
            } = this.state;
      return (
        <AttitudeChangeComponent
            anxietyCheck={anxietyCheck}
            depressionCheck= {depressionCheck}
            irritabilityCheck={irritabilityCheck}
            peacefulCheck={peacefulCheck}
            happyCheck={happyCheck}
            othersCheck={othersCheck}
            othersValue={othersValue}
            onAnxietyCheck={onAnxietyCheck}
            onIrritabilityCheck={onIrritabilityCheck}
            onDepressionCheck={onDepressionCheck}
            onPeacefulCheck={onPeacefulCheck}
            onHappyCheck={onHappyCheck}
            onOthersCheck={onOthersCheck}
            onOthersValueChange={onOthersValueChange}
        />
        );
    }
}