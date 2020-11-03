import React from 'react';

import { StyleSheet, View, Platform } from 'react-native';

import Slideshow from 'react-native-slideshow';


export default class Home extends React.Component
{

  constructor() {

    super();

    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          title: 'Title 1',
          caption: 'Caption 1',
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMDAYYy6_dlRvoJvb6zl-9xMGJWos1GZitbQ&usqp=CAU',
        }, {
          title: 'Title 2',
          caption: 'Caption 2',
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ03zFSgiErEM3_8wTKM0CKlxcTx5W6cynHfA&usqp=CAU',
        }, {
          title: 'Title 3',
          caption: 'Caption 3',
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKJYUlNRtK2OoYOg3NTVgio8QwuVxOLdcImQ&usqp=CAU',
        },
      ],
    };

  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 5000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {

    return (

      <View style={styles.MainContainer}>

        <Slideshow
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })}
           />

      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    backgroundColor: '#FFF8E1'

  }

});