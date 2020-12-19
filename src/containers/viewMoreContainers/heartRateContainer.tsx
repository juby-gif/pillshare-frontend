import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import moment from 'moment';

import HeartRateViewMoreComponent from '../../components/viewMoreComponents/heartRateComponent';
import { LOGGED_IN_USER_ID } from '../../constants';
import { getHeartRateData } from '../../API/heartRateDataAPI';

am4core.useTheme(am4themes_animated);

interface IProps{

}

interface StateProps{

}

interface ServerData{
    reading:string;
    date:string;
    time:string;
}

interface ServerResponse{
    data:ServerData[];
}

interface DataProps{
    date:string;
    value:string;
}

export default class HeartRateViewMoreContainer extends Component<IProps,StateProps>{
    chart?:am4charts.XYChart;
    constructor(props:IProps){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        const { onSuccessCallBack,onFailureCallBack } = this;
      const user_id:string = JSON.parse(localStorage.getItem(LOGGED_IN_USER_ID) || '')
      if(user_id !== null){
          getHeartRateData(user_id,onSuccessCallBack,onFailureCallBack);
      }
    }

    componentWillUnmount() {
        if (this.chart) {
          this.chart.dispose();
        }
      }
      onSuccessCallBack = (responseData: ServerResponse): void => {
        let graphData: DataProps[] = [];
        let readingData: Array<number> = [];
        for(let datum of responseData.data){
            
            // Need to add time for plotting (Phase 2)
            let timestamp:number = moment.utc(`${datum.date} ${datum.time}`).unix()
           
            // Getting reading for calculating average,min and max
            readingData.push(parseInt(datum.reading))

            // Added date component only for plotting
            graphData.push({date:moment.unix(timestamp).utcOffset('-0000').format("YYYY-MM-DD HH:mm"),value:datum.reading})
        }
        // console.log()
        let chart = am4core.create("chartdiv", am4charts.XYChart);
        if(graphData.length !== 0){
        chart.data = graphData;
        }
        

        // Create axes
        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.minGridDistance = 60;
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        
        // Create series
        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = "value";
        series.dataFields.dateX = "date";
        series.tooltipText = "{value}"

        valueAxis.renderer.minGridDistance = 30;
        valueAxis.paddingTop = 35;

        var range = valueAxis.axisRanges.create();
        range.value = Math.min(...readingData);
        range.grid.stroke = am4core.color("#3f00d1");
        range.grid.strokeWidth = 2;
        range.grid.strokeOpacity = 0.4;
        range.label.inside = true;
        range.label.text = "Low: " + Math.min(...readingData) + "bpm";
        range.label.fill = range.grid.stroke;
        range.label.align = "left";
        range.label.verticalCenter = "bottom";

        var range1 = valueAxis.axisRanges.create();
        range1.value = this.getAverage(readingData) || 0;
        range1.grid.stroke = am4core.color("#6b6d0b");
        range1.grid.strokeWidth = 2;
        range1.grid.strokeOpacity = 0.4;
        range1.label.inside = true;
        range1.label.text = "Average: " + JSON.stringify(this.getAverage(readingData) || 0) + "bpm";
        range1.label.fill = range1.grid.stroke;
        range1.label.align = "left";
        range1.label.verticalCenter = "bottom";
        
        var range2 = valueAxis.axisRanges.create();
        range2.value = Math.max(...readingData);
        range2.grid.stroke = am4core.color("rgb(102,0,0)");
        range2.grid.strokeWidth = 2;
        range2.grid.strokeOpacity = 0.4;
        range2.label.inside = true;
        range2.label.paddingTop = 4;
        range2.label.text = "High: " + Math.max(...readingData) + "bpm"
        range2.label.fill = range2.grid.stroke;
        range2.label.align = "left";
        range2.label.verticalCenter = "bottom";
        
        
        
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.snapToSeries = series;
        chart.cursor.xAxis = dateAxis;
        
        //chart.scrollbarY = new am4core.Scrollbar();
        chart.scrollbarX = new am4core.Scrollbar();
      }
      onFailureCallBack = (responseData: ServerResponse): void => {
        console.log(responseData);
    }

    getAverage = (data:Array<number>):number|undefined => {
        if(data.length !== 0){
            let sum:number = 0;
            for (let datum of data){
                 sum += datum
            }
            return sum/data.length || 0;
        }
    }


    render(){
        return(
            <div>
                <HeartRateViewMoreComponent />
            </div>
        );
    }
}