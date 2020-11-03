import React from 'react';

import { StyleSheet, View, Platform,Text ,SafeAreaView,Button} from 'react-native';

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
         
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMDAYYy6_dlRvoJvb6zl-9xMGJWos1GZitbQ&usqp=CAU',
        }, {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ03zFSgiErEM3_8wTKM0CKlxcTx5W6cynHfA&usqp=CAU',
        }, {
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
             

            
             <SafeAreaView style={{ flex: 1 }}>
      {/* enclose all components in this View tag */}
      <View style={styles.container}>
        
        {/* Button whith handler function named onPressLearnMore*/}
        <Button
         
         title="UserName"
         color="#FFF8E1"
         
        />

        
      </View>
    </SafeAreaView>
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

  },
  
  NameStyle:{
      flex:1,
      justifyContent:'space-between',
      backgroundColor : '#670099',
      width: 500,
    height: 50,
      
      

  },
  flexStyle:{
    width: 500,
    height: 50, 
    backgroundColor: 'purple'

  },
  TextsStyle : {
    color: '#670099',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 14,

  },
  container: {
    flex: 1,
    width: 500
   
  }

});