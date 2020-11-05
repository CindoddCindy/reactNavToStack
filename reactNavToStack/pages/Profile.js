//This is an example code for Bottom Navigation//
import React from 'react';
import {Card} from 'react-native-shadow-cards';
//import react in our code.
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
//import all the basic component we have used

export default class Profile extends React.Component {
  //Home Screen to show in Home Option
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
              <ScrollView>

< ScrollView horizontal={true}>

<Card style={{padding: 10, margin: 10}}>
<View style={styles.containers}>
     <Text style={{ color: '#6F4FA8',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    padding:1,
    textShadowColor: '#C9C6CA',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
 }}>My Profile</Text>
     


     <TouchableOpacity style={styles.button} onPress={
           () => this.props.navigation.navigate('Pemesanan')
         }   >
           
          
     <Image source={require('../image/person.jpeg')} style={{width:250, height: 250}} />
    

     </TouchableOpacity>

     
     <Card style={{padding: 5, margin: 5}}>
     <Text style={styles.TextsStyle}>Username</Text>
     </Card>

     <Card style={{padding: 5, margin: 5}}>
     <Text style={styles.TextsStyle}>Email</Text>
     </Card>

     <Card style={{padding: 5, margin: 5}}>
     <Text style={styles.TextsStyle}>Phone</Text>
     </Card>

     <Card style={{padding: 5, margin: 5}}>
     <Text style={styles.TextsStyle}>Address</Text>
     </Card>

     <Card style={{padding: 5, margin: 5}}>
     <Text style={styles.TextsStyle}>Location</Text>
     </Card>
     <Card style={{padding: 5, margin: 5}}>
     <Text style={styles.TextsStyle}>Edit</Text>
     </Card>
     <Card style={{padding: 5, margin: 5}}>
     <Text style={styles.TextsStyle}>Logout</Text>
     </Card>
        </View>
        </Card>

   
</  ScrollView>
</ScrollView>
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  containers: {
    flex: 1,
   
    alignItems: 'center',
    justifyContent: 'center',
    padding:10
  },
  TextsStyle : {
    color: '#6F4FA8',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 14,
    padding:5,
    textShadowColor: '#C9C6CA',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
 
  },
  

});