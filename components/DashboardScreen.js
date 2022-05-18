import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";
import axios from "axios";
import { faHand, faBell, faBars, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { DataTable } from 'react-native-paper';
import OrderItem from './orderItem'


const AppURL = "http://192.168.137.1:3030/api";
const DashboardScreen = ({ navigation }) => {
    const [orders, setOrders] = React.useState([])
    function getOrders() {
        return axios.get(`${AppURL}/getorders`);
      }
    
    React.useEffect(() => {
            getOrders().then(res => {
              setOrders(res.data.orders);
            })
          }, [])

    return (
        <ScrollView>
      <View style={styles.container}>
          <View  style={styles.Buttons}>
          <TouchableOpacity style={styles.burgermenu}>
      <FontAwesomeIcon icon={ faBars } style={ styles.icon }/>
      </TouchableOpacity>
          <TouchableOpacity style={styles.hoveredBtn}>
      <FontAwesomeIcon icon={ faBell } style={ styles.icon } />
      </TouchableOpacity>
          </View>
          <Text style={styles.title}>𝐀𝐬𝐬𝐢𝐠𝐧𝐞𝐝 𝐎𝐫𝐝𝐞𝐫𝐬</Text>
      </View>
      <View>
      <DataTable>
      <DataTable.Header>
          <DataTable.Title>Status</DataTable.Title>
          <DataTable.Title>Adresse</DataTable.Title>
          <DataTable.Title numeric>Management</DataTable.Title>
        </DataTable.Header></DataTable></View>
      {orders.map(order =>(   <View style={styles.table}>
    <OrderItem order= {order}/>
    </View>))}
      </ScrollView>
    );
  }
  export default DashboardScreen
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
    },
    Buttons:{
        
        justifyContent:'flex',
        flexDirection:'row',
        width:"100%",
        marginTop:4
    },
    icon:{
    backgroundColor:'#ff8000',
    width:200
    },
    hoveredBtn: {
        width: "15%",
        position:'absolute',
        borderRadius: 100,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF8000",
        marginLeft:315,
        },
        burgermenu: {
            position:'absolute',
            width: "15%",
            borderRadius: 100,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FF8000",
        },
        list: {
            flex: 1,
            marginTop:10,
            padding: 20,
            backgroundColor:'#ff8000'
        },
        item: {
            padding: 10,
            fontSize: 18,
            height: 44,
          },
          title: {
            color:'#FF8000',
            fontSize: 30,
            alignSelf:'center',
            marginTop:100
            },
            table: {
                paddingTop: 10,
                paddingHorizontal: 10,
                backgroundColor:'#ff8000',
                color:'#fff'
              },
            status:{
                padding:15,
                width: 25,
                borderRadius: 100,
                height: 25,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "red",
            },
            header:{
                paddingTop: 10,
                paddingHorizontal: 10,
                backgroundColor:'black'
            }
})
