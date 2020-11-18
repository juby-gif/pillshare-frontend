import React, { Component } from 'react';

import GlucoseComponent from '../../components/measurementComponents/glucoseComponent';


interface GlucoseProps {

}
export default class GlucoseContainer extends Component<GlucoseProps> {
    constructor(props:GlucoseProps) {
      super(props);
      this.state = {
        
      };
    }
    render() {
      return (
        <GlucoseComponent />
      );
    }
  }