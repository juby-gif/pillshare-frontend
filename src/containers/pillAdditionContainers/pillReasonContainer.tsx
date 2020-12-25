import React, { Component } from 'react';

import PillReasonComponent from '../../components/pillAdditionComponents/pillReasonComponent';
import { PILL_REASON } from '../../constants';


interface IProps {

}

interface StateProps {
reason ?: string;
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
    if(localStorage.getItem(PILL_REASON) !== null || localStorage.getItem(PILL_REASON) !== undefined){
      const reasonData: StateProps = JSON.parse(localStorage.getItem(PILL_REASON)|| '{}');
      this.setState({
        reason: reasonData.reason
      })
    }
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