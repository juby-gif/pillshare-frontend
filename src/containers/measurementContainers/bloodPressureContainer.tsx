import React, { Component } from 'react';

import BloodPressureComponent from '../../components/measurementComponents/bloodPressureComponent';

interface IProps {
}
interface BloodPressureProps {
  readOnly: boolean;
}

export default class HeartRateContainer extends Component<IProps,BloodPressureProps> {
    constructor(props:IProps) {
      super(props);
      this.state = {
        readOnly:false,
        
      };
    }
    render() {
      const { readOnly } = this.state;
      return (
        <BloodPressureComponent readOnly={readOnly}/>
      );
    }
  }