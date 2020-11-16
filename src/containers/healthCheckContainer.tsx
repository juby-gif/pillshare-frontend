import React, { Component } from 'react';

import HealthCheckComponent from '../components/healthCheckComponent';


interface IProps {

}

interface StateProps {

}

export default class HealthCheckContainer extends Component<IProps,StateProps> {
    constructor(props:IProps){
        super(props);
        this.state = {

        }
        this.showSettings = this.showSettings.bind(this);
    }
    
  showSettings = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    alert("hii")  
  }
 
  render () {
      const { showSettings } = this;
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
        <HealthCheckComponent 
        showSettings={showSettings}
        />
        );
    }
}