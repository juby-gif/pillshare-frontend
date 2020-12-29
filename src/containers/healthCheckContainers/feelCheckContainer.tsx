import React, { Component } from 'react';

import FeelCheckComponent from '../../components/healthCheckComponents/feelCheckComponent';
import { FEEL_CHECK } from '../../constants';


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
  componentDidMount(){
    if(localStorage.getItem(FEEL_CHECK) !== null && localStorage.getItem(FEEL_CHECK) !== undefined && '{}'){
      const healthCheckData: StateProps = JSON.parse(localStorage.getItem(FEEL_CHECK)|| '{}');
      this.setState({
        healthCheck:healthCheckData.healthCheck,
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
    
    onImprovingCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if(event.currentTarget.value !== undefined  || event.currentTarget.value !== "") {
        this.setState({
          healthCheck:event.currentTarget.value,
        })
      } else {
        this.setState({
          healthCheck:undefined,
        })
      } 
      }

    onSameCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if(event.currentTarget.value !== undefined  || event.currentTarget.value !== "") {
        this.setState({
          healthCheck:event.currentTarget.value,
        })
      } else {
        this.setState({
          healthCheck:undefined,
        })
      } 
      }

    onBadCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if(event.currentTarget.value !== undefined  || event.currentTarget.value !== "") {
        this.setState({
          healthCheck:event.currentTarget.value,
        })
      } else {
        this.setState({
          healthCheck:undefined,
        })
      } 
      }

    onWorseCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if(event.currentTarget.value !== undefined  || event.currentTarget.value !== "") {
        this.setState({
          healthCheck:event.currentTarget.value,
        })
      } else {
        this.setState({
          healthCheck:undefined,
        })
      } 
      }
    
    onUpdate = ():void => {
      const { healthCheck } = this.state;
      localStorage.setItem(FEEL_CHECK,JSON.stringify({
          healthCheck : healthCheck,
        }))
      }
    

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