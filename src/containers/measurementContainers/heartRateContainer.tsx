import React, { Component } from 'react';

import HeartRateComponent from '../../components/measurementComponents/heartRateComponent';

interface IProps {
}
interface HeartRateProps {
  readOnly: boolean;
}

export default class HeartRateContainer extends Component<IProps,HeartRateProps> {
    constructor(props:IProps) {
      super(props);
      this.state = {
        readOnly:false,
        
      };
    }
    render() {
      const { readOnly } = this.state;
      return (
        <HeartRateComponent readOnly={readOnly}/>
      );
    }
  }