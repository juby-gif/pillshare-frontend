import React, { Component } from 'react';

import GlucoseViewMoreComponent from '../../components/viewMoreComponents/glucoseComponent';

interface IProps{

}

interface StateProps{

}

export default class GlucoseViewMoreContainer extends Component<IProps,StateProps>{
    constructor(props:IProps){
        super(props);
        this.state={

        }
    }
    render(){
        return(
           <GlucoseViewMoreComponent />
        );
    }
}