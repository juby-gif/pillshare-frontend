import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import { LOGGED_IN_USER_ID } from '../constants';


const RequiresAuth =  (ComponentToBeChecked:any) => {
    class Authenticate extends Component {
        render() {
            if (localStorage.getItem(LOGGED_IN_USER_ID) === "" || localStorage.getItem(LOGGED_IN_USER_ID) === undefined || localStorage.getItem(LOGGED_IN_USER_ID) === null){
                return <Redirect to="/login" />

            } else {
                return (
                    <div>
                        <ComponentToBeChecked />
                    </div>
                );
            }
        }
    }
        return Authenticate
}
export default RequiresAuth;