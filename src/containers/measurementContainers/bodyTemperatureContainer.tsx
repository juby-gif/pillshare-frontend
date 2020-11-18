import React, { Component } from 'react';

import BodyTemperatureComponent from '../../components/measurementComponents/bodyTemperatureComponent';


interface BodyTemperatureProps {

}
export default class BodyTemperatureContainer extends Component<BodyTemperatureProps> {
    constructor(props:BodyTemperatureProps) {
      super(props);
      this.state = {
        
      };
    }
    render() {
      return (
        <BodyTemperatureComponent />
      );
    }
  }