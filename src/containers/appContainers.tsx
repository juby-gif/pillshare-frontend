
import React, { Component } from 'react';
import { BrowserRouter as Router,withRouter, Route, Switch } from 'react-router-dom'
import { RouteComponentProps  } from 'react-router';

import RegisterContainer from './registerContainer';
import LoginContainer from './loginContainer';
import DashboardContainer from './dashboardContainer';
import UserProfileContainer from './userProfileContainer';
import HealthCheckContainer from './healthCheckContainer';
import MedicationLogsContainer from './medicationLogsContainer';
// import UserProfileUpdateContainer from './userProfileUpdateContainer';
// import LandingPageContainer from './landingPageContainer';
// import AboutContainer from './aboutContainer';
// import ContactContainer from './contactContainer';

class AppContainers extends Component<RouteComponentProps> {
  render() {
    return (
        <Router>
           <Switch>
               <Route path="/register" exact component={RegisterContainer} />
               <Route path="/login" exact component={LoginContainer} />
               <Route path="/dashboard" exact component={DashboardContainer} />
               <Route path="/user-profile" exact component={UserProfileContainer} />
               <Route path="/health-check" exact component={HealthCheckContainer} />
               <Route path="/medication-logs" exact component={MedicationLogsContainer} />
               {/* <Route path="/sensor-detail/:name" exact component={SensorDetailContainer} />
               <Route path="/user-profile" exact component={UserProfileRetrieveContainer} />
               <Route path="/user-profile-update" exact component={UserProfileUpdateContainer} /> */}
           </Switch>
       </Router>
    );
  }
}
export default withRouter(AppContainers);
