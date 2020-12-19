import React, { Component } from 'react';

import BloodPressureViewMoreComponent from '../../components/viewMoreComponents/bloodPressureComponent';

interface IProps{

}

interface StateProps{

}

export default class BloodPressureViewMoreContainer extends Component<IProps,StateProps>{
    constructor(props:IProps){
        super(props);
        this.state={

        }
    }
    render(){
        return(
           <BloodPressureViewMoreComponent />
        );
    }
}