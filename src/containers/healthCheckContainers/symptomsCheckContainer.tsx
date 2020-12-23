import React, { Component } from 'react';
import { MultiSelectChangeEventArgs } from '@syncfusion/ej2-react-dropdowns'

import SymptomsCheckComponent from '../../components/healthCheckComponents/symptomsCheckComponent';
import { SYMPTOMS_DROPDOWN_LIST } from '../../constants';


interface IProps {

}

interface StateProps {
date : string;
time : string;
intensity ?: number;
values ?: string[];
}

export default class SymptomsCheckContainer extends Component<IProps,StateProps> {
    
    /*   *
        *  Initializer
        *------------------------------------------------------------
    */
    constructor(props:IProps){
        super(props);
        this.state = {
          date:"",
          time:"",
          intensity:0,
          values:[],
        }
      this.onDateChange = this.onDateChange.bind(this);
      this.onTimeChange = this.onTimeChange.bind(this); 
      this.onIntensityClick = this.onIntensityClick.bind(this);
      this.onValuesChange = this.onValuesChange.bind(this);
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
  //Nothing

  /* *
      *  API callback functions
      *------------------------------------------------------------
  */
  /* *
      *  Event handling functions
      *------------------------------------------------------------
  */
    onDateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
          date:event.currentTarget.value,
      })
      }

    onTimeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
          time:event.currentTarget.value,
      })
      }
    
    onIntensityClick = (rating: number): void => {
      this.setState({
          intensity:rating,
      })
      }

    onValuesChange = (value: MultiSelectChangeEventArgs | undefined): void => {
     console.log(value? value.value:null);
    } 
    
    private dropdownArray: { [key: number]: Object }[] = SYMPTOMS_DROPDOWN_LIST;
    private fieldsObj: object = { text: 'value', value: 'id' };
    
 

  /* *
      *  Main render function
      *------------------------------------------------------------
  */
  render () {
      const { onIntensityClick,
              dropdownArray,
              fieldsObj,
              onValuesChange,
            } = this;
      const { intensity,
              values
            } = this.state;
      return (
        <SymptomsCheckComponent
            intensity={intensity}
            fieldsObj={fieldsObj}
            dropdownArray={dropdownArray}
            values={values}
            onIntensityClick={onIntensityClick}
            onValuesChange={onValuesChange}
        />
        );
    }
}