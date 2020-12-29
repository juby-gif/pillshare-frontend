import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import moment from 'moment';

import GlucoseViewMoreComponent from '../../components/viewMoreComponents/remoteGlucoseComponent';
import { REMOTE_PAYLOAD } from '../../../constants';
import { getRemoteGlucoseData } from '../../API/remoteGlucoseDataAPI';
import spinner from '../../../img/spinner-solid.svg';

am4core.useTheme(am4themes_animated);

interface IProps{

}

interface StateProps{
    min:number;
    max:number;
    avg?:number|string;
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

interface ParamProps{
    id:string;
}
export default class GlucoseViewMoreContainer extends Component<IProps,StateProps>{
    chart?:am4charts.XYChart;
    constructor(props:IProps){
        super(props);
        this.state={
            min:0,
            max:0,
            avg:0,

        }
    }
    componentDidMount(){
        const { onSuccessCallBack,onFailureCallBack } = this;
        const payload:ParamProps = JSON.parse(localStorage.getItem(REMOTE_PAYLOAD) || "");
        const {Base64} = require('js-base64');
        const remoteObjJSON:string = Base64.decode(payload.id);
        const OBJ = JSON.parse(remoteObjJSON);
      if(OBJ.user_id !== null){
        getRemoteGlucoseData(OBJ.user_id,onSuccessCallBack,onFailureCallBack);
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
    
        let chart:any = am4core.create("chartdiv", am4charts.XYChart);
        chart.preloader.disabled = true;
        chart.responsive.enabled = true;
        
        chart.events.on("beforedatavalidated", function() {
            if(chart.data.length === 0){
                setTimeout(function() {
                    hideIndicator();
                    empty();     
                }, 2000);
            } else {
                setTimeout(function() {
                    hideIndicator();
                }, 2000);
            }
        });

        if(graphData.length !== 0){
            chart.data = graphData;
        } else{
            chart.data = [];
        }
        var indicator: any;
        var indicatorInterval: any;

        function empty () {
            indicator = chart.tooltipContainer.createChild(am4core.Container);
            indicator.background.fill = am4core.color("#fff");
            indicator.background.fillOpacity = 0.8;
            indicator.width = am4core.percent(100);
            indicator.height = am4core.percent(100);

            var indicatorLabel = indicator.createChild(am4core.Label);
            indicatorLabel.text = "No Records found...";
            indicatorLabel.align = "center";
            indicatorLabel.valign = "middle";
            indicatorLabel.fontSize = 20; 
        }
        function showIndicator() {
            if (!indicator) {
                indicator = chart.tooltipContainer.createChild(am4core.Container);
                indicator.background.fill = am4core.color("#fff");
                indicator.background.fillOpacity = 0.8;
                indicator.width = am4core.percent(100);
                indicator.height = am4core.percent(100);

                var indicatorLabel = indicator.createChild(am4core.Label);
                indicatorLabel.text = "Loading Graph...";
                indicatorLabel.align = "center";
                indicatorLabel.valign = "middle";
                indicatorLabel.fontSize = 20;
                indicatorLabel.dy = 50;
                
                var hourglass = indicator.createChild(am4core.Image);
                hourglass.href = spinner;
                hourglass.align = "center";
                hourglass.valign = "middle";
                hourglass.horizontalCenter = "middle";
                hourglass.verticalCenter = "middle";
                hourglass.scale = 0.7;
                
                setInterval(function() {
                    hourglass.animate([{
                        from: 0,
                        to: 360,
                        property: "rotation",
                    }], 1200);
                }, 600);
            }
            indicator?.hide(0);
            indicator?.show();
        }

        function hideIndicator() {
        indicator?.hide();
        clearInterval(indicatorInterval);
        }
        showIndicator();

        if(chart.data.length !== 0){
            // Create axes
            let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            dateAxis.renderer.minGridDistance = 60;
            dateAxis.title.text = "Day";
            dateAxis.title.fontWeight = "bold";
            let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.title.text = "Glucose (mg/dL)";
            valueAxis.title.fontWeight = "bold";
            
            // Create series
            let series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.valueY = "value";
            series.dataFields.dateX = "date";
            series.tooltipText = "{value}"

            valueAxis.renderer.minGridDistance = 30;
            valueAxis.paddingTop = 35;

            var range = valueAxis.axisRanges.create();
            range.value = Math.min(...readingData).valueOf();
            range.grid.stroke = am4core.color("#3f00d1");
            range.grid.strokeWidth = 2;
            range.grid.strokeOpacity = 0.6;
            range.label.inside = true;
            range.label.text = "Low: " + Math.min(...readingData).valueOf() + "mg/dL";
            range.label.fill = range.grid.stroke;
            range.label.align = "left";
            range.label.verticalCenter = "bottom";

            var range1 = valueAxis.axisRanges.create();
            range1.value = this.getAverage(readingData)?.toFixed(2);
            range1.grid.stroke = am4core.color("#6b6d0b");
            range1.grid.strokeWidth = 2;
            range1.grid.strokeOpacity = 0.6;
            range1.label.inside = true;
            range1.label.text = "Average: " + this.getAverage(readingData)?.valueOf().toPrecision(5) + "mg/dL";
            range1.label.fill = range1.grid.stroke;
            range1.label.align = "left";
            range1.label.verticalCenter = "bottom";
            
            var range2 = valueAxis.axisRanges.create();
            range2.value = Math.max(...readingData).valueOf();
            range2.grid.stroke = am4core.color("rgb(102,0,0)");
            range2.grid.strokeWidth = 2;
            range2.grid.strokeOpacity = 0.6;
            range2.label.inside = true;
            range2.label.paddingTop = 4;
            range2.label.text = "High: " + Math.max(...readingData).valueOf() + "mg/dL"
            range2.label.fill = range2.grid.stroke;
            range2.label.align = "left";
            range2.label.verticalCenter = "bottom";

            chart.cursor = new am4charts.XYCursor();
            chart.cursor.snapToSeries = series;
            chart.cursor.xAxis = dateAxis;
            
            // chart.scrollbarY = new am4core.Scrollbar();
            chart.scrollbarX = new am4core.Scrollbar();
            
            this.setState({
                min:(Math.min(...readingData).valueOf()) === 1/0?0:Math.min(...readingData).valueOf(),
                max:(Math.max(...readingData).valueOf()) === -1/0?0:Math.max(...readingData).valueOf(),
                avg:(this.getAverage(readingData)?.valueOf().toPrecision(5)) === undefined?0:this.getAverage(readingData)?.valueOf().toPrecision(5),
            })
        } else {
            let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            dateAxis.renderer.minGridDistance = 60;
            dateAxis.title.text = "Day";
            dateAxis.title.fontWeight = "bold";
            let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.title.text = "Glucose (mg/dL)";
            valueAxis.title.fontWeight = "bold";
        }
    }

    onFailureCallBack = (responseData: ServerResponse): void => {
        console.error(responseData);
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
        const { min,max,avg } = this.state;
        return(
            <GlucoseViewMoreComponent 
                min={min}
                max={max}
                avg={avg}
            />
        );
    }
}