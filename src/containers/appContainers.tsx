import React, { Component } from 'react';
import { BrowserRouter as Router,withRouter, Route, Switch } from 'react-router-dom'
import { RouteComponentProps  } from 'react-router';

import RegisterContainer from './registerContainer';
import LoginContainer from './loginContainer';
import DashboardContainer from './dashboardContainer';
import UserProfileContainer from './userProfileContainer';
import HealthCheckContainer from './healthCheckContainerWizard';
import MedicationLogsContainer from './medicationLogsContainer';
import MeasurementContainerWizard from './measurementContainerWizard';
import RemoteDashboardContainer from '../remote/containers/remoteDashboardContainer';
import RemoteMedicationLogsContainer from '../remote/containers/remoteMedicationLogsContainer';
import RemoteHeartRateContainer from '../remote/containers/viewMoreContainers/remoteHeartRateContainer';
import RemoteBloodPressureContainer from '../remote/containers/viewMoreContainers/remoteBloodPressureContainer';
import RemoteGlucoseContainer from '../remote/containers/viewMoreContainers/remoteGlucoseContainer';
import RemoteOxygenSaturationContainer from '../remote/containers/viewMoreContainers/remoteOxygenSaturationContainer';
import RemoteBodyTemperatureContainer from '../remote/containers/viewMoreContainers/remoteBodyTemperatureContainer';
import ShareContainer from './shareContainer';
import HeartRateViewMoreContainer from './viewMoreContainers/heartRateContainer';
import BloodPressureViewMoreContainer from './viewMoreContainers/bloodPressureContainer';
import BodyTemperatureViewMoreContainer from './viewMoreContainers/bodyTemperatureContainer';
import GlucoseViewMoreContainer from './viewMoreContainers/glucoseContainer';
import OxygenSaturationViewMoreContainer from './viewMoreContainers/oxygenSaturationContainer';
import PillAdditionContainerWizard from './pillAdditionContainerWizard';
import PillEditContainerWizard from './pillEditContainerWizard';

import PageNotFoundComponent from '../Menu/404Component'; 

class AppContainers extends Component<RouteComponentProps> {
  render() {
    return (
        <Router>
           <Switch>
              {/* *************************** Gateway *************************** */}
              
               <Route path="/register" exact component={RegisterContainer} />
               <Route path="/login" exact component={LoginContainer} />

              {/* *************************** Gateway *************************** */}


              {/* *************************** Client Side *************************** */}

               <Route path="/dashboard" exact component={DashboardContainer} />
               <Route path="/user-profile" exact component={UserProfileContainer} />
               <Route path="/health-check" exact component={HealthCheckContainer} />
               <Route path="/medication-logs" exact component={MedicationLogsContainer} />
               <Route path="/measurement" exact component={MeasurementContainerWizard} />
               <Route path="/share" exact component={ShareContainer} />
               <Route path="/heart-rate" exact component={HeartRateViewMoreContainer} />
               <Route path="/blood-pressure" exact component={BloodPressureViewMoreContainer} />
               <Route path="/body-temperature" exact component={BodyTemperatureViewMoreContainer} />
               <Route path="/glucose" exact component={GlucoseViewMoreContainer} />
               <Route path="/add-pills" exact component={PillAdditionContainerWizard} />
               <Route path="/oxygen-saturation" exact component={OxygenSaturationViewMoreContainer} />
               <Route path="/edit/:id" exact component={PillEditContainerWizard} />

               {/* *************************** Client Side *************************** */}


               {/* *************************** Remote Side *************************** */}

               <Route path="/remote/:id" exact component={RemoteDashboardContainer} />
               <Route path="/remote-medication-logs" exact component={RemoteMedicationLogsContainer} />
               <Route path="/remote-heart-rate" exact component={RemoteHeartRateContainer} />
               <Route path="/remote-blood-pressure" exact component={RemoteBloodPressureContainer} />
               <Route path="/remote-body-temperature" exact component={RemoteBodyTemperatureContainer} />
               <Route path="/remote-glucose" exact component={RemoteGlucoseContainer} />
               <Route path="/remote-oxygen-saturation" exact component={RemoteOxygenSaturationContainer} />
               <Route path="/remote-medication-logs" exact component={RemoteMedicationLogsContainer} />

              {/* *************************** 404 page *************************** */}
               <Route component={PageNotFoundComponent} />
              {/* *************************** 404 page *************************** */}


               {/* *************************** Remote Side *************************** */}

           </Switch>
       </Router>
    );
  }
}
export default withRouter(AppContainers);
