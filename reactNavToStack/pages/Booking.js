//React Native FlatList
//https://aboutreact.com/react-native-flatlist/

//import React in our code
import React, {useState} from 'react';

import {Card} from 'react-native-shadow-cards';

//import all the components we are going to use
import {
    FlatList,
    View,
    Text,
    SafeAreaView,
    StyleSheet
} from 'react-native';

const dummyArray = [
  {id: '1', value: 'My Order'},
  {id: '2', value: ' My Order'},
  {id: '3', value: 'My Order'},
  {id: '4', value: 'My Order'},
  {id: '5', value: 'My Order'},
  {id: '6', value: 'My Order'},
  {id: '7', value: 'My Order'},
  {id: '8', value: 'My Order'},
  {id: '9', value: 'My Order'},
  {id: '10', value: 'My Order'},
  {id: '11', value: 'My Order'},
  {id: '12', value: 'My Order'},
  {id: '13', value: 'My Order'},
  {id: '14', value: 'My Order'},
  {id: '15', value: 'My Order'},
  {id: '16', value: 'My Order'},
  {id: '17', value: 'My Order'},
  {id: '18', value: 'My Order'},
  {id: '19', value: 'My Order'},
  {id: '20', value: 'My Order'},
  {id: '21', value: 'My Order'},
  {id: '22', value: 'My Order'},
  {id: '23', value: 'My Order'},
  {id: '24', value: 'My Order'},
  {id: '25', value: 'My Order'},
  {id: '26', value: 'My Order'},
];

const Booking = () => {
  const [listItems, setListItems] = useState(dummyArray);

  const ItemView = ({item}) => {
    return (
      // FlatList Item
      <Card style={{padding: 10, margin: 10}}>
      <View>
        <Text>Date : 02 -10- 2020</Text>
        <Text
          style={styles.item}
          onPress={() => getItem(item)}>
          {item.value}
        </Text>
      </View>
      </Card>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // FlatList Item Separator
      <View
          style={{
              height: 0.5,
              width: '100%',
              backgroundColor: '#C8C8C8'
          }}
      />
    );
  };

  const getItem = (item) => {
    //Function for click on an item
    alert('Id: ' + item.id + ' Value: ' + item.value);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <FlatList
          data={listItems}
          //data defined in constructor
          ItemSeparatorComponent={ItemSeparatorView}
          //Item Separator View
          renderItem={ItemView}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 30,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default Booking;