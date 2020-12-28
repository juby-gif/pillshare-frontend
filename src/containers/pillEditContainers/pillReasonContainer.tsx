import React, { Component } from 'react';

import PillReasonComponent from '../../components/pillEditComponents/pillReasonComponent';
import { PILL_REASON, USER_MEDICAL_TABLE_EDIT } from '../../constants';


interface IProps {

}

interface StateProps {
reason ?: string;
}

interface DataProps{
  reason?:string;
}

export default class PillReasonContainer extends Component<IProps,StateProps> {
    
    /*   *
        *  Initializer
        *------------------------------------------------------------
    */
    constructor(props:IProps){
        super(props);
        this.state = {
          reason:""
        }
      this.onReasonChange = this.onReasonChange.bind(this);
      this.onUpdate = this.onUpdate.bind(this);
    }

  /* *
  *  Utility
  *------------------------------------------------------------
  */
  //Nothing

  /* *
      *  Component Life-cycle Management
      *------------------------------------------------------------
  */
  componentDidMount(){
    setTimeout(() => {if(localStorage.getItem(PILL_REASON) !== null && localStorage.getItem(PILL_REASON) !== undefined && localStorage.getItem(PILL_REASON) !== '{}'){
      const descriptionData: DataProps = JSON.parse(localStorage.getItem(PILL_REASON)|| '{}');
      this.setState({
        reason: descriptionData.reason,
      })
    } else if(localStorage.getItem(USER_MEDICAL_TABLE_EDIT) !== null && localStorage.getItem(USER_MEDICAL_TABLE_EDIT) !== undefined && localStorage.getItem(USER_MEDICAL_TABLE_EDIT) !== '{}'){
      const descriptionData: DataProps = JSON.parse(localStorage.getItem(USER_MEDICAL_TABLE_EDIT)|| '{}');
      
      this.setState({
        reason: descriptionData.reason,
      })
    }},500);
  }

  componentDidUpdate(){
    this.onUpdate();
  }


  /* *
      *  API callback functions
      *------------------------------------------------------------
  */
  /* *
      *  Event handling functions
      *------------------------------------------------------------
  */
  onReasonChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
        reason:event.currentTarget.value,
    })
    }

  onUpdate = ():void =>{
    const { reason } = this.state;
    localStorage.setItem(PILL_REASON,JSON.stringify({
      reason : reason,
    }))
  }
    
 

  /* *
      *  Main render function
      *------------------------------------------------------------
  */
  render () {
      const { onReasonChange,
            } = this;

      const { reason
            } = this.state;
      return (
        <PillReasonComponent
        reason={reason}
        onReasonChange={onReasonChange}
        />
        );
    }
}