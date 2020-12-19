import React from 'react';

import SidebarComponent from '../../Menu/sideBarComponent';
import NavigationComponent from '../../Menu/navigationComponent';

interface IProps{

}

const HeartRateViewMoreComponent = (props:IProps):JSX.Element =>{
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
                    <div className="m-3" style={{height:"30rem"}} id="chartdiv"></div>
                </div>
            </div>
        </div>
    </React.Fragment>
);
}
export default HeartRateViewMoreComponent;