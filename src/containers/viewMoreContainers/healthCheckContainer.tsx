import React, { Component } from 'react';

import HealthCheckViewMoreComponent from '../../components/viewMoreComponents/healthCheckComponent';

interface IProps{

}

interface StateProps{

}

export default class HealthCheckViewMoreContainer extends Component<IProps,StateProps>{
    constructor(props:IProps){
        super(props);
        this.state={

        }
    }
    render(){
        return(
           <HealthCheckViewMoreComponent />
        );
    }
}