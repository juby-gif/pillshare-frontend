import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import moment from 'moment';

import BloodPressureViewMoreComponent from '../../components/viewMoreComponents/bloodPressureComponent';
import { LOGGED_IN_USER_ID } from '../../constants';
import { getBloodPressureData } from '../../API/bloodPressureDataAPI';
import spinner from '../../img/spinner-solid.svg'

am4core.useTheme(am4themes_animated);

interface IProps{

}

interface StateProps{
    sysMin:number;
    diaMin:number;
    sysMax:number;
    diaMax:number;
    sysAvg?:number;
    diaAvg?:number;
}

interface ServerData{
    systoleReading:string;
    diastoleReading:string;
    date:string;
    time:string;
}
interface ServerResponse{
    data:ServerData[];
}

interface DataProps{ date: string; systole: string; diastole: string; }

export default class BloodPressureViewMoreContainer extends Component<IProps,StateProps>{
    chart?:am4charts.XYChart;
    constructor(props:IProps){
        super(props);
        this.state={
            sysMin:0,
            diaMin:0,
            sysMax:0,
            diaMax:0,
            sysAvg:0,
            diaAvg:0,
        }
    }
    componentDidMount(){
        const { onSuccessCallBack,onFailureCallBack } = this;
      const user_id:string = JSON.parse(localStorage.getItem(LOGGED_IN_USER_ID) || '')
      if(user_id !== null){
        getBloodPressureData(user_id,onSuccessCallBack,onFailureCallBack);
      }
    }

    componentWillUnmount() {
        if (this.chart) {
          this.chart.dispose();
        }
      }
    onSuccessCallBack = (responseData: ServerResponse): void => {
        let graphData: DataProps[] = [];
        let systoleReadingData: Array<number> = [];
        let diastoleReadingData: Array<number> = [];
        
        for(let datum of responseData.data){
        
            // Need to add time for plotting (Phase 2)
            let timestamp:number = moment.utc(`${datum.date} ${datum.time}`).unix()
            
            // Getting reading for calculating average,min and max
            systoleReadingData.push(parseInt(datum.systoleReading))
            diastoleReadingData.push(parseInt(datum.diastoleReading))

            // Added date component only for plotting
            graphData.push({date:moment.unix(timestamp).utcOffset('-0000').format("YYYY-MM-DD HH:mm"),systole:datum.systoleReading,diastole:datum.diastoleReading})
        }
        let chart:any = am4core.create("chartdiv", am4charts.XYChart);
        chart.events.on('ready', () => {
            hideIndicator();
          });
        if(graphData.length !== 0){
        chart.data = graphData;
        }

        let indicator:any;
        let indicatorInterval:any;
        const showIndicator = ():void => {

            if (!indicator) {
                indicator = chart.tooltipContainer.createChild(am4core.Container);
                indicator.background.fill = am4core.color("#fff");
                indicator.background.fillOpacity = 0.8;
                indicator.width = am4core.percent(100);
                indicator.height = am4core.percent(100);

                let indicatorLabel = indicator.createChild(am4core.Label);
                indicatorLabel.text = "Loading Graph...";
                indicatorLabel.align = "center";
                indicatorLabel.valign = "middle";
                indicatorLabel.fontSize = 20;
                indicatorLabel.dy = 50;
                
                let hourglass = indicator.createChild(am4core.Image);
                hourglass.href = spinner;
                hourglass.align = "center";
                hourglass.valign = "middle";
                hourglass.horizontalCenter = "middle";
                hourglass.verticalCenter = "middle";
                hourglass.scale = 0.7;

                clearInterval(indicatorInterval);
                indicatorInterval = setInterval(function() {
                hourglass.animate([{
                    from: 0,
                    to: 360,
                    property: "rotation"
                }], 2000);
                }, 3000);
            }  
        indicator.hide(0);
        indicator.show();
        }

        const hideIndicator = ():void => {
        indicator.hide();
        clearInterval(indicatorInterval);
        }
        showIndicator();

        // Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = "date";
        categoryAxis.title.text = "Day";
        categoryAxis.title.fontWeight = "bold";

        categoryAxis.renderer.minGridDistance = 15;
        categoryAxis.renderer.grid.template.location = 0.5;
        categoryAxis.renderer.grid.template.strokeDasharray = "1,3";
        categoryAxis.renderer.labels.template.rotation = 0;
        categoryAxis.renderer.labels.template.horizontalCenter = "left";
        categoryAxis.renderer.labels.template.location = 0.5;
        categoryAxis.renderer.inside = false;
        categoryAxis.renderer.labels.template.adapter.add("dx", function(dx:any, target:any) {
            return -target.maxRight / 2;
        })

        let valueAxis:any = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.title.text = "Blood Pressure (mmHg)";
        valueAxis.title.fontWeight = "bold";
        valueAxis.renderer.ticks.template.disabled = true;
        valueAxis.renderer.axisFills.template.disabled = true;

        let series:any = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.categoryX = "date";
        series.dataFields.openValueY = "systole";
        series.dataFields.valueY = "diastole";
        series.tooltipText = "systole: {openValueY.value} diastole: {valueY.value}";
        series.sequencedInterpolation = true;
        series.fillOpacity = 0;
        series.strokeOpacity = 1;
        series.columns.template.width = 0.01;
        series.tooltip.pointerOrientation = "horizontal";

        let openBullet:any = series.bullets.create(am4charts.CircleBullet);
        openBullet.locationY = 1;

        let closeBullet = series.bullets.create(am4charts.CircleBullet);
        closeBullet.fill = chart.colors.getIndex(4);
        closeBullet.stroke = closeBullet.fill;

        chart.cursor = new am4charts.XYCursor();
        chart.scrollbarX = new am4core.Scrollbar();
        // chart.scrollbarY = new am4core.Scrollbar();
        this.setState({
            sysMin:Math.min(...systoleReadingData),
            diaMin:Math.min(...diastoleReadingData),
            sysMax:Math.max(...systoleReadingData),
            diaMax:Math.max(...diastoleReadingData),
            sysAvg:this.getAverage(systoleReadingData),
            diaAvg:this.getAverage(diastoleReadingData)
        })
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
        const { sysMin,diaMin,sysMax,diaMax,sysAvg,diaAvg } = this.state;
        return(
            <BloodPressureViewMoreComponent 
            sysMin={sysMin}
            diaMin={diaMin}
            sysMax={sysMax}
            diaMax={diaMax}
            sysAvg={sysAvg}
            diaAvg={diaAvg}
            />
        );
    }
}