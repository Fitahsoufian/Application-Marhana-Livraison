import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default function Profile({ navigation }) {

  
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Soufian Fitah</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
              <TouchableOpacity style={styles.buttonContainer}onPress={() => navigation.navigate('Cards')}>
                <Text style={styles.options} >Meals</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.options}>Meal Of Day</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  header:{
    height:150,
    width:"100%",
    backgroundColor: "#FF8000",
    position:'relative'
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    alignSelf:'center',
    position: 'absolute',
    marginTop:70,
  }, 
  body:{
    marginTop:60,
    backgroundColor:'black'
    
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
    // backgroundColor:'black'
  },
  name:{
    fontSize:28,
    color: "#FFF",
    fontWeight: "600"
  },
  description:{
    fontSize:16,
    color: "#FFF",
    marginTop:10,
    textAlign: 'center',
    marginBottom:20
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:200,
    borderRadius:30,
    backgroundColor: "#FF8000",
  },
  options:{
      fontSize:20,
      fontWeight:'bold',
  }
});