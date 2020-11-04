//React Native TextInput
//https://aboutreact.com/react-native-textinput/

//import React in our code
import React, {useState} from 'react';

//import all the components we are going to use
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput
} from 'react-native';

const Regis = () => {
  const [userName, setUserName] = useState('');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>Insert any text in below input</Text>
        <TextInput
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          placeholder={'UserName'}
          style={styles.input}
        />
        <Text style={{color: 'blue'}}>{userName}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#ffffff',
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
  },
});

export default Regis;