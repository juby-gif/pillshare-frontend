import React, { Component } from 'react';

import UserProfileComponent from '../components/userProfileComponent';


interface IProps {

}
interface StateProps {

}
export default class UserProfileContainer extends Component<IProps,StateProps> {
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
        return(
            <UserProfileComponent 
            showSettings={showSettings}
            />
        );
    }
}