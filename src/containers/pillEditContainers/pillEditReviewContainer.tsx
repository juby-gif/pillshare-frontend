import React, { Component } from 'react';

import ReviewComponent from '../../components/pillAdditionComponents/pillAdditionReviewComponent';
import { PILL_DURATION,PILL_DESCRIPTION,PILL_REASON } from '../../constants';


interface IProps {

}
interface DescriptionProps {
  name ?: string;
  dose ?: string;
  dosage ?: string;
  measure ?: string;
  beforeOrAfter ?: string;
}

interface DurationProps {
  numberOfDays ?: string;
  startDate ?: string;
  endDate ?: string;
  morning ?: string;
  afternoon ?: string;
  evening ?: string;
  night ?: string;
}

interface ReasonProps {
  reason ?: string;
}

interface StateProps {
  durationData ?: DurationProps;
  descriptionData ?: DescriptionProps;
  reasonData ?: ReasonProps;
}

export default class PillAdditionReviewContainer extends Component<IProps,StateProps> {
    constructor(props:IProps) {
        super(props);
        this.state = {
          descriptionData: {},
          durationData: {},
          reasonData:{},
        };
      }

      componentDidMount(){
        if(localStorage.getItem(PILL_DESCRIPTION) !== null || localStorage.getItem(PILL_DESCRIPTION) !== undefined){
          const descriptionData: DescriptionProps = JSON.parse(localStorage.getItem(PILL_DESCRIPTION)|| '{}');
          this.setState({
            descriptionData:descriptionData,
          })
          }
        if(localStorage.getItem(PILL_DURATION) !== null || localStorage.getItem(PILL_DURATION) !== undefined){
          const durationData: DurationProps = JSON.parse(localStorage.getItem(PILL_DURATION)|| '{}');
          this.setState({
            durationData:durationData,
          })
          }
        if(localStorage.getItem(PILL_REASON) !== null || localStorage.getItem(PILL_REASON) !== undefined){
          const reasonData: ReasonProps = JSON.parse(localStorage.getItem(PILL_REASON)|| '{}');
          this.setState({
            reasonData:reasonData,
          })
          }
      }
      render() {
        const { descriptionData,durationData,reasonData } = this.state;
        return (
          <ReviewComponent 
              descriptionData={descriptionData}
              durationData={durationData}
              reasonData={reasonData}
          />
        );
      }
    }
