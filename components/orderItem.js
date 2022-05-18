import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { faHand, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { DataTable } from 'react-native-paper';


// const AppURL = "http://192.168.137.1:3030/api";
const OrderItem = ({order}) => {

    const [isChecked, setisChecked] = useState(false);
    return (
      <DataTable>
        <DataTable.Row>
          <DataTable.Cell>{order.status}</DataTable.Cell>
          <DataTable.Cell>{order.adresse}</DataTable.Cell>
          <DataTable.Cell numeric><TouchableOpacity style={{ ...styles.status, backgroundColor: isChecked ? "green" : "red" }}><FontAwesomeIcon icon={ isChecked ? faCheck : faHand } onPress={() => {setisChecked(true)}}/></TouchableOpacity></DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    
    );
  }
  export default OrderItem
  const styles = StyleSheet.create({
    status:{
        padding:15,
        width: 25,
        borderRadius: 100,
        height: 25,
        alignItems: "center",
        justifyContent: "center",
        
    },
})
