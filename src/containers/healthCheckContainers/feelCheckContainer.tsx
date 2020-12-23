import React, { Component } from 'react';

import FeelCheckComponent from '../../components/healthCheckComponents/feelCheckComponent';
import { SYMPTOMS_DROPDOWN_LIST } from '../../constants';


interface IProps {

}
interface StateProps {
healthCheck ?: string;
}





export default class FeelCheckContainer extends Component<IProps,StateProps> {
    
    /*   *
        *  Initializer
        *------------------------------------------------------------
    */
    constructor(props:IProps){
        super(props);
        this.state = {
          healthCheck:"",
        }
      this.onImprovingCheck = this.onImprovingCheck.bind(this);
      this.onSameCheck = this.onSameCheck.bind(this);
      this.onBadCheck = this.onBadCheck.bind(this);
      this.onWorseCheck = this.onWorseCheck.bind(this);
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
    
    onImprovingCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        healthCheck:event.currentTarget.value,
      })
    } 

    onSameCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        healthCheck:event.currentTarget.value,
      })
    } 

    onBadCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        healthCheck:event.currentTarget.value,
          })
    } 

    onWorseCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        healthCheck:event.currentTarget.value,
      })
    } 
    
    private dropdownArray: { [key: number]: Object }[] = SYMPTOMS_DROPDOWN_LIST;
    private fieldsObj: object = { text: 'value', value: 'id' };
    
 

  /* *
      *  Main render function
      *------------------------------------------------------------
  */
  render () {
      const { onImprovingCheck,
              onSameCheck,
              onBadCheck,
              onWorseCheck,
            } = this;
      const { 
              healthCheck
            } = this.state;
      return (
        <FeelCheckComponent
            healthCheck={healthCheck}
            onImprovingCheck={onImprovingCheck}
            onSameCheck={onSameCheck}
            onBadCheck={onBadCheck}
            onWorseCheck={onWorseCheck}
        />
        );
    }
}