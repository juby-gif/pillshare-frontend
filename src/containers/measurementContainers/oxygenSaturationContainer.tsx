import React, { Component } from 'react';

import OxygenSaturationComponent from '../../components/measurementComponents/oxygenSaturationComponent';

interface IProps {
}
interface OxygenSaturationProps {
  readOnly: boolean;
}

export default class OxygenSaturationContainer extends Component<IProps,OxygenSaturationProps> {
    constructor(props:IProps) {
      super(props);
      this.state = {
        readOnly:false,
        
      };
    }
    render() {
      const { readOnly } = this.state;
      return (
        <OxygenSaturationComponent readOnly={readOnly}/>
      );
    }
  }