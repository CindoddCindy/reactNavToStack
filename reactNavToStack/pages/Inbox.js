//Example of React Native Text
//https://aboutreact.com/react-native-text/

//import React in our code
import React from 'react';

//import all the components we are going to use
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

import {Card} from 'react-native-shadow-cards';

const Inbox = () => {
  return (
    // enclose all components in this View tag
    <SafeAreaView>
      <View>
        {/* View is used here to wrap all component in one */}
       
        <Card style={{padding: 10, margin: 10}}>
        <Text style={styles.TextsStyle}>Date : 03/10/2020 </Text>
     <Text style={styles.TextsStyle}>You hvae one message </Text>
     </Card>
     
             </View>
    </SafeAreaView>
  );
};

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

export default Inbox;