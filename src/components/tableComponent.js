import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import { createTheme } from 'react-data-table-component';

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
 
const data = [
    { id: 1, title: 'Conan the Barbarian', year: '1981', actor:"sakndk", director:"adnja" },
    { id: 2, title: 'Conan the Barbarian', year: '1989', actor:"sadsd", director:"sabdba" },
    { id: 3, title: 'Conan the Barbarian', year: '1980',actor:"adnasn", director:"awdniaw" }
];
const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
    right: true,
  },
  {
    name: 'Actor',
    selector: 'actor',
    sortable: true,
    right: true,
  },
  {
    name: 'Director',
    selector: 'director',
    sortable: true,
    right: true,
  },
];
 
class TableComponent extends Component {
  render() {
    return (
      <DataTable
        title="Arnold Movies"
        columns={columns}
        data={data}
        selectableRows
        Clicked
        theme="solarized"
      />
    )
  }
};

export default TableComponent;