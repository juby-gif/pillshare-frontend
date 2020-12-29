import React, { Component } from 'react';

import HealthCheckReviewComponent from '../../components/healthCheckComponents/healthCheckReviewComponent';
import { SYMPTOMS_CHECK, ATTITUDE_CHECK, FEEL_CHECK } from '../../constants';


interface IProps {

}
interface FeelProps {
  healthCheck ?: string;
}

interface SymptomsProps{
  date : string;
  time : string;
  intensity ?: number;
  values ?: number[];
}

interface AttitudeProps{
  anxietyCheck ?: boolean;
  depressionCheck ?: boolean;
  irritabilityCheck ?: boolean;
  peacefulCheck ?: boolean;
  happyCheck ?: boolean;
  othersCheck ?: boolean;
  othersValue ?: string;
}

interface StateProps {
  symptomsData ?: SymptomsProps;
  attitudeData ?: AttitudeProps;
  feelData ?: FeelProps;
}

export default class HealthCheckReviewContainer extends Component<IProps,StateProps> {
    constructor(props:IProps) {
        super(props);
        this.state = {
          symptomsData: undefined,
          attitudeData: undefined,
          feelData:undefined,
        };
      }

      componentDidMount(){
        if(localStorage.getItem(SYMPTOMS_CHECK) !== null || localStorage.getItem(SYMPTOMS_CHECK) !== undefined){
          const symptomsData: SymptomsProps = JSON.parse(localStorage.getItem(SYMPTOMS_CHECK)|| '{}');
          this.setState({
            symptomsData:symptomsData,
          })
          }
        if(localStorage.getItem(ATTITUDE_CHECK) !== null || localStorage.getItem(ATTITUDE_CHECK) !== undefined){
          const attitudeData: AttitudeProps = JSON.parse(localStorage.getItem(ATTITUDE_CHECK)|| '{}');
          this.setState({
            attitudeData:attitudeData,
          })
          }
        if(localStorage.getItem(FEEL_CHECK) !== null || localStorage.getItem(FEEL_CHECK) !== undefined){
          const feelData: FeelProps = JSON.parse(localStorage.getItem(FEEL_CHECK)|| '{}');
          this.setState({
            feelData:feelData,
          })
          }
      }
      render() {
        const { symptomsData,attitudeData,feelData } = this.state;
        return (
          <HealthCheckReviewComponent 
              symptomsData={symptomsData}
              attitudeData={attitudeData}
              feelData={feelData}
          />
        );
      }
    }
