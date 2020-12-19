import React, { Component } from 'react';

import OxygenSaturationViewMoreComponent from '../../components/viewMoreComponents/oxygenSaturationComponent';

interface IProps{

}

interface StateProps{

}

export default class OxygenSaturationViewMoreContainer extends Component<IProps,StateProps>{
    constructor(props:IProps){
        super(props);
        this.state={

        }
    }
    render(){
        return(
           <OxygenSaturationViewMoreComponent />
        );
    }
}