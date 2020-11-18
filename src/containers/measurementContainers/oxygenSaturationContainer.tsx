import React, { Component } from 'react';

import OxygenSaturationComponent from '../../components/measurementComponents/oxygenSaturationComponent';


interface OxygenSaturationProps {

}
export default class OxygenSaturationContainer extends Component<OxygenSaturationProps> {
    constructor(props:OxygenSaturationProps) {
      super(props);
      this.state = {
        
      };
    }
    render() {
      return (
        <OxygenSaturationComponent />
      );
    }
  }