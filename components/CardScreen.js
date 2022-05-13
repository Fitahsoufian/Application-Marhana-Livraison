import * as React from 'react';
import { StyleSheet,TouchableOpacity,Text} from "react-native"
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faUser, faCircle, faCheck } from '@fortawesome/free-solid-svg-icons'


const LeftContent = props => <Avatar.Icon {...props} icon="food" style={styles.icon} />

const MyComponent = () => (
  <Card style={styles.container}>
    <Card.Title style={styles.header} title="MEALS" titleStyle={{ color: "#fff" }} subtitle="Restaurant MARHABA" subtitleStyle={{ color:'#808080' }} left={LeftContent}/>
    <Card.Content>
      <Title style={styles.title}>Meal Name</Title>
      <Paragraph style={styles.title}>Meal Desciption</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
    <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>Order Now</Text>
      </TouchableOpacity>
    </Card.Actions>
  </Card>
);

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black'
    },
    title:{
    color:'white'
    },
    icon:{
        backgroundColor:'#ff8000',
    },
    btn:{    
    backgroundColor:'#ff8000',
    marginLeft:4,
    padding:8,
    borderRadius:10,
    margin:6
    },
    text:{
        fontWeight:'bold',
        fontSize:17 
    }, 
    picon:{
        backgroundColor:'#ff8000',
        width:200,
        height:200
    }
})

export default MyComponent;