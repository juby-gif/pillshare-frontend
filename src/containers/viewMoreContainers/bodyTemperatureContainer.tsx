import React, { Component } from 'react';

import BodyTemperatureViewMoreComponent from '../../components/viewMoreComponents/bodyTemperatureComponent';

interface IProps{

}

interface StateProps{

}

export default class BodyTemperatureViewMoreContainer extends Component<IProps,StateProps>{
    constructor(props:IProps){
        super(props);
        this.state={

        }
    }
    render(){
        return(
           <BodyTemperatureViewMoreComponent />
        );
    }
}