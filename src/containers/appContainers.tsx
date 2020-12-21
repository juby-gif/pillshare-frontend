import React, { Component } from 'react';
import { BrowserRouter as Router,withRouter, Route, Switch } from 'react-router-dom'
import { RouteComponentProps  } from 'react-router';

import RegisterContainer from './registerContainer';
import LoginContainer from './loginContainer';
import DashboardContainer from './dashboardContainer';
import UserProfileContainer from './userProfileContainer';
import HealthCheckContainer from './healthCheckContainer';
import MedicationLogsContainer from './medicationLogsContainer';
import MeasurementContainerWizard from './measurementContainerWizard';
import RemoteDashboardContainer from '../remote/containers/remoteDashboardContainer';
import RemoteMedicationLogsContainer from '../remote/containers/remoteMedicationLogsContainer';
import ShareContainer from './shareContainer';
import HeartRateViewMoreContainer from './viewMoreContainers/heartRateContainer';
import BloodPressureViewMoreContainer from './viewMoreContainers/bloodPressureContainer';
import BodyTemperatureViewMoreContainer from './viewMoreContainers/bodyTemperatureContainer';
import GlucoseViewMoreContainer from './viewMoreContainers/glucoseContainer';
// import HealthCheckViewMoreContainer from './viewMoreContainers/healthCheckContainer';
import OxygenSaturationViewMoreContainer from './viewMoreContainers/oxygenSaturationContainer';

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
               <Route path="/measurement" exact component={MeasurementContainerWizard} />
               <Route path="/remote/:id" exact component={RemoteDashboardContainer} />
               <Route path="/remote-medication-logs" exact component={RemoteMedicationLogsContainer} />
               <Route path="/share" exact component={ShareContainer} />
               <Route path="/heart-rate" exact component={HeartRateViewMoreContainer} />
               <Route path="/blood-pressure" exact component={BloodPressureViewMoreContainer} />
               <Route path="/body-temperature" exact component={BodyTemperatureViewMoreContainer} />
               <Route path="/glucose" exact component={GlucoseViewMoreContainer} />
               {/* <Route path="/health-check-status" exact component={HealthCheckViewMoreContainer} /> */}
               <Route path="/oxygen-saturation" exact component={OxygenSaturationViewMoreContainer} />
               {/* <Route path="/user-profile-update" exact component={UserProfileUpdateContainer} /> */}
           </Switch>
       </Router>
    );
  }
}
export default withRouter(AppContainers);
