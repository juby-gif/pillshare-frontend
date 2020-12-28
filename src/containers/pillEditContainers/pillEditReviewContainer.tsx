import React, { Component } from 'react';

import PillEditReviewComponent from '../../components/pillEditComponents/pillEditReviewComponent';
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
  duration ?: string;
  start_date ?: string;
  end_date ?: string;
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

export default class PillEditReviewContainer extends Component<IProps,StateProps> {
    constructor(props:IProps) {
        super(props);
        this.state = {
          descriptionData: {},
          durationData: {},
          reasonData:{},
        };
      }

      componentDidMount(){
        if(localStorage.getItem(PILL_DESCRIPTION) !== null && localStorage.getItem(PILL_DESCRIPTION) !== undefined && localStorage.getItem(PILL_DESCRIPTION) !== '{}'){
          const descriptionData: DescriptionProps = JSON.parse(localStorage.getItem(PILL_DESCRIPTION)|| '{}');
          this.setState({
            descriptionData:descriptionData,
          })
          }
        if(localStorage.getItem(PILL_DURATION) !== null && localStorage.getItem(PILL_DURATION) !== undefined && localStorage.getItem(PILL_DESCRIPTION) !== '{}'){
          const durationData: DurationProps = JSON.parse(localStorage.getItem(PILL_DURATION)|| '{}');
          this.setState({
            durationData:durationData,
          })
          }
        if(localStorage.getItem(PILL_REASON) !== null && localStorage.getItem(PILL_REASON) !== undefined && localStorage.getItem(PILL_DESCRIPTION) !== '{}'){
          const reasonData: ReasonProps = JSON.parse(localStorage.getItem(PILL_REASON)|| '{}');
          this.setState({
            reasonData:reasonData,
          })
          }
      }
      render() {
        const { descriptionData,durationData,reasonData } = this.state;
        console.log(descriptionData,durationData,reasonData)
        return (
          <PillEditReviewComponent 
              descriptionData={descriptionData}
              durationData={durationData}
              reasonData={reasonData}
          />
        );
      }
    }
