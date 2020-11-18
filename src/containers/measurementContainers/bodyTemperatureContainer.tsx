import React, { Component } from 'react';

import BodyTemperatureComponent from '../../components/measurementComponents/bodyTemperatureComponent';

interface IProps {
}
interface BodyTemperatureProps {
  readOnly: boolean;
}

export default class HeartRateContainer extends Component<IProps,BodyTemperatureProps> {
    constructor(props:IProps) {
      super(props);
      this.state = {
        readOnly:false,
        
      };
    }
    render() {
      const { readOnly } = this.state;
      return (
        <BodyTemperatureComponent readOnly={readOnly}/>
      );
    }
  }