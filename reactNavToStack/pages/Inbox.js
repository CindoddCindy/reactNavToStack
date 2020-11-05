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
        <Text>All the very best</Text> 
        {/* Text is used same as a tag in HTML */} 
        <Text>This is your first App.</Text>
        <Text>Enjoy react native coding.</Text>
      </View>
    </SafeAreaView>
  );
};

export default Inbox;