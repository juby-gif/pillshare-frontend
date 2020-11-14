import React, { Component } from 'react';
import DashboardComponent from '../components/dashboardComponent';

// import SideBarComponent from '../components/sideBarComponent';
 
interface IProps {

}
interface StateProps {

}
export default class DashboardContainer extends Component<IProps,StateProps> {
    constructor(props:IProps){
        super(props);
        this.state = {

        }
        this.showSettings = this.showSettings.bind(this);
    }
    
  showSettings = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    alert("hii")  
  }
 
  render () {
      const { showSettings } = this;
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
        <DashboardComponent 
        showSettings={showSettings}
        />
      
    );
  }
}