//This is an example code for Bottom Navigation//
import React from 'react';
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

<View style={styles.containers}>
     <TouchableOpacity style={styles.button} onPress={
           () => this.props.navigation.navigate('Pemesanan')
         }   >
     <Image source={require('../image/person.jpeg')} style={{width:250, height: 200}} />

     </TouchableOpacity>
     <Text style={styles.TextsStyle}>Username</Text>
     <Text style={styles.TextsStyle}>Email</Text>
     <Text style={styles.TextsStyle}>Phone</Text>
     <Text style={styles.TextsStyle}>Address</Text>
     <Text style={styles.TextsStyle}>Location</Text>
        </View>

   
</  ScrollView>
</ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  containers: {
    flex: 1,
    backgroundColor: '#fff',
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
    textAlign: 'center',
    textShadowColor: '#C9C6CA',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
 
  }
});