import React, { Component } from 'react';

import ReviewComponent from '../../components/measurementComponents/reviewComponent';
import { HEARTRATEDATA,BODYTEMPERATURE,BLOODPRESSUREDATA,OXYGENSATURATION,GLUCOSE } from '../../constants';


interface IProps {

}
interface ReadingProps {
  reading: number;
  systoleReading?: number;
  diastoleReading?: number
  time: string;
}

interface StateProps {
  heartRateReading: ReadingProps;
  bloodPressureReading: ReadingProps;
  bodyTemperatureReading: ReadingProps;
  glucoseReading: ReadingProps;
  oxygenSaturationReading: ReadingProps;
}

export default class ReviewContainer extends Component<IProps,StateProps> {
    constructor(props:IProps) {
        super(props);
        this.state = {
          heartRateReading : {reading:0,time:""},
          bloodPressureReading : {reading:0,time:""},
          bodyTemperatureReading : {reading:0,time:""},
          glucoseReading : {reading:0,time:""},
          oxygenSaturationReading : {reading:0,time:""},
        };
      }

      componentDidMount(){
        if(localStorage.getItem(HEARTRATEDATA) !== null || localStorage.getItem(HEARTRATEDATA) !== undefined){
          const heartRateReading: ReadingProps = JSON.parse(localStorage.getItem(HEARTRATEDATA)|| '{}');
          this.setState({
            heartRateReading:heartRateReading,
          })
          }
        if(localStorage.getItem(BODYTEMPERATURE) !== null || localStorage.getItem(BODYTEMPERATURE) !== undefined){
          const bodyTemperatureReading: ReadingProps = JSON.parse(localStorage.getItem(BODYTEMPERATURE)|| '{}');
          this.setState({
            bodyTemperatureReading:bodyTemperatureReading,
          })
          }
        if(localStorage.getItem(BLOODPRESSUREDATA) !== null || localStorage.getItem(BLOODPRESSUREDATA) !== undefined){
          const bloodPressureReading: ReadingProps = JSON.parse(localStorage.getItem(BLOODPRESSUREDATA)|| '{}');
          this.setState({
            bloodPressureReading:bloodPressureReading,
          })
          }
        if(localStorage.getItem(GLUCOSE) !== null || localStorage.getItem(GLUCOSE) !== undefined){
          const glucoseReading: ReadingProps = JSON.parse(localStorage.getItem(GLUCOSE)|| '{}');
          this.setState({
            glucoseReading:glucoseReading,
          })
          }
        if(localStorage.getItem(OXYGENSATURATION) !== null || localStorage.getItem(OXYGENSATURATION) !== undefined){
          const oxygenSaturationReading: ReadingProps = JSON.parse(localStorage.getItem(OXYGENSATURATION)|| '{}');
          this.setState({
            oxygenSaturationReading:oxygenSaturationReading,
          })
          }
      }
      render() {
        const { heartRateReading,bodyTemperatureReading,bloodPressureReading,glucoseReading,oxygenSaturationReading } = this.state;
        return (
          <ReviewComponent 
            heartRateReading={heartRateReading}
            bodyTemperatureReading={bodyTemperatureReading}
            bloodPressureReading={bloodPressureReading}
            glucoseReading={glucoseReading}
            oxygenSaturationReading={oxygenSaturationReading}
          />
        );
      }
    }
