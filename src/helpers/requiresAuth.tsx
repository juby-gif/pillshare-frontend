import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import  LocalStorageService from '../localStorageService';

const localStorageService:any = LocalStorageService.getService()
const RequiresAuth =  (ComponentToBeChecked:any) => {
    class Authenticate extends Component {
        render() {
            if (localStorageService.getAccessToken() === "" || localStorageService.getAccessToken() === null){
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