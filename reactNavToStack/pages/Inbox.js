//Example of React Native Text
//https://aboutreact.com/react-native-text/

//import React in our code
import React from 'react';

//import all the components we are going to use
import {View, Text, SafeAreaView} from 'react-native';

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

export default Inbox;