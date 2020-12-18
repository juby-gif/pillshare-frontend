import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

import logo from '../img/logo.png';

interface Props{
}
 
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section1: {
    backgroundColor: "#20124d",
    width:'20%',
  },
  section2: {
    margin:34 ,
    padding: 10,
    marginLeft:94,
  },
  image_left:{
    height: 70,
    width: 90.05,
    marginLeft: 16,
    marginTop:20,
    padding: 4,
  }
});
 
// Create Document Component
const RemoteHealthReportPDFComponent = (props:Props) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section1}>
                <Image
                    style={styles.image_left}
                    source={logo}
                />
                <Text style={{padding:"6rem", color:"#fff",textAlign:"center"}}>User details</Text>
            </View>
            <View style={styles.section2}>
                <Text>Pillshare Health Tracking Report</Text>
            </View>
        </Page>
    </Document>
);
export default RemoteHealthReportPDFComponent;