import React, { Component } from 'react';

import BloodPressureComponent from '../../components/measurementComponents/bloodPressureComponent';


interface BloodPressureProps {

}
export default class BloodPressureContainer extends Component<BloodPressureProps> {
    constructor(props:BloodPressureProps) {
      super(props);
      this.state = {
       
      };
    }
    render() {
      return (
        <BloodPressureComponent />
      );
    }
  }