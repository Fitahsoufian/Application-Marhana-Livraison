import * as React from 'react';
import { StyleSheet,TouchableOpacity,Text, View, ScrollView} from "react-native"
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faUser, faCircle, faCheck } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';


const LeftContent = props => <Avatar.Icon {...props} icon="food" style={styles.icon} />

const AppURL = "http://192.168.137.1:3030/api";


const MyComponent = () => {

  const [repas, setRepas] = React.useState([])
  
  function getMeals() {
    return axios.get(`${AppURL}/getrepas`);
  }

  React.useEffect(() => {
    getMeals().then(res => {
      setRepas(res.data.repas);
    })
  }, [])

  return(
    <View>
      <ScrollView>
      {repas.map(repa =>(
        <Card style={styles.container}>
          <Card.Title style={styles.header} title="MEALS" titleStyle={{ color: "#fff" }} subtitle="Restaurant MARHABA" subtitleStyle={{ color:'#808080' }} left={LeftContent}/>
          <Card.Content>
            <Title style={styles.title}>{repa.name}</Title>
            <Paragraph style={styles.title}>{repa.description}</Paragraph>
          </Card.Content>
          <Card.Cover source={{uri: "http://192.168.137.1:3030/images/"+repa.image }} />
          <Card.Actions>
          <TouchableOpacity style={styles.btn}>
              <Text style={styles.text}>Order Now</Text>
            </TouchableOpacity>
            <Paragraph style={styles.title}>{repa.prix} DH</Paragraph>
          </Card.Actions>
        </Card>
      ))
      }
      </ScrollView>
    </View>
    
  )
};

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
    margin:6,
    marginRight:200
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