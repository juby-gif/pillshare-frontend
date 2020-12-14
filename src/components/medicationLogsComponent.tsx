import React from 'react';
import DataTable from 'react-data-table-component';
import { createTheme } from 'react-data-table-component';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import NavigationComponent from '../Menu/navigationComponent';
import SidebarComponent from '../Menu/sideBarComponent';
import { Container } from 'react-bootstrap';


interface IProps {
  theme : string;
  column : ({ name: string; selector: string; sortable: boolean; } | { name: string; selector: string; sortable: boolean; right: boolean; })[];
  data : DataProps[];
  handleChange : (event: React.SyntheticEvent) => void;
}

interface TakenProps{
  part ?: string;
  time ?: string;
}

interface DataProps{
  before_or_after ?: string;
  dosage ?: string;
  dose ?: number;
  duration ?: number;
  end_date ?: string;
  start_date ?: string;
  time_taken ?: TakenProps;
  missed ?: string;
  measure ?: string;
  name ?: string;
  reason ?: string;
  taken ?: string;
}

createTheme('solarized', {
  text: {
    primary: '#268bd2',
    secondary: '#2aa198',
  },
  background: {
    default: '#002b36',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    default: '#073642',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
});
  

const MedicationLogsComponent = (props: IProps) : JSX.Element => {
    const { theme, column,data,handleChange } = props;
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

                        <Container style={{margin: "auto",width: "80%",border: "3px solid white",padding: "16px"}} fluid>
                            <h3 className="display-3 d-flex justify-content-center">Medication Logs</h3>
                            <FormControlLabel
                                label="Dark Mode"
                                control={(
                                <Switch
                                    checked={theme === 'dark'}
                                    onChange={handleChange}
                                />
                                )}
                            />
                            <DataTable
                                title="Here's the history of your medications"
                                columns={column}
                                data={data}
                                // selectableRows
                                highlightOnHover
                                pointerOnHover
                                pagination
                                theme={theme}
                            />
                        </Container>
                        {/* ----------------------The page content ends here---------------------- */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default MedicationLogsComponent;
