import React, { Component } from 'react';

import HeartRateComponent from '../../components/measurementComponents/heartRateComponent';


interface HeartRateProps {

}
export default class HeartRateContainer extends Component<HeartRateProps> {
    constructor(props:HeartRateProps) {
      super(props);
      this.state = {
        
      };
    }
    render() {
      return (
        <HeartRateComponent />
      );
    }
  }