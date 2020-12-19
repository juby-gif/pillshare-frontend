import React from 'react';

import SidebarComponent from '../../Menu/sideBarComponent';
import NavigationComponent from '../../Menu/navigationComponent';


interface IProps{

}

const BloodPressureViewMoreComponent = (props:IProps):JSX.Element =>{
return(
    <React.Fragment>
        <div id="app" style={{height: "100%"}}>
            <div id="outer-container" style={{height: "100%"}}>

                {/* --- Sidebar ---*/}
                <SidebarComponent />
                {/* --- Sidebar ---*/}
                
                <div className="" id="page-wrap" style={{height: "100%",overflow:"auto"}}>

                    {/* ----------------------The page content starts here---------------------- */}


                    {/* --- Navigation ---*/}
                    <NavigationComponent />
                    {/* --- Navigation ---*/}
                </div>
            </div>
        </div>
    </React.Fragment>
);
}
export default BloodPressureViewMoreComponent;