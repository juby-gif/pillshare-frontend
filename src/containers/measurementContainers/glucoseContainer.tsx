import React, { Component } from 'react';

import GlucoseComponent from '../../components/measurementComponents/glucoseComponent';

interface IProps {
}
interface HeartRateProps {
  readOnly: boolean;
}

export default class GlucoseContainer extends Component<IProps,HeartRateProps> {
    constructor(props:IProps) {
      super(props);
      this.state = {
        readOnly:false,
        
      };
    }
    render() {
      const { readOnly } = this.state;
      return (
        <GlucoseComponent readOnly={readOnly}/>
      );
    }
  }