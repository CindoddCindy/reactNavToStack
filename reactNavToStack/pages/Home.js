import React from 'react';

import {Card} from 'react-native-shadow-cards';

import { StyleSheet, View, Platform,Text ,SafeAreaView,Button,ScrollView,Image,TouchableOpacity} from 'react-native';

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

  componentDidMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 5000)
    });
  }

  componentDidlUnmount() {
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
         title=""
         color="#fff"
         
        />

        
      </View>
    </SafeAreaView>
    <ScrollView>

   < ScrollView horizontal={true}>

   
 
   <View style={styles.containers}>
        <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate(' GotoPemesanan')}>
              
        <Image source={require('../image/fullbodymassage.jpeg')} style={{width:150, height: 100}} />
        
        </TouchableOpacity>
        <Text style={styles.TextsStyle}>Full Body Massage</Text>
      </View>
     

      <View style={styles.containers}>
        <TouchableOpacity style={styles.button}  onPress={ () => this.props.navigation.navigate('Login')}>
        <Image source={require('../image/kerokan.jpeg')} style={{width:150, height: 100}} />
         
 
        </TouchableOpacity>
        <Text style={styles.TextsStyle}>Kerokan</Text>
      </View>
 
 
 
</  ScrollView>

< ScrollView horizontal={true}>
 
<View style={styles.containers}>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
        <Image source={require('../image/reflexologi.jpeg')}  style={{width:150, height: 100}} />
 
        </TouchableOpacity>
        <Text style={styles.TextsStyle}>Reflexologi</Text>
      </View>

      <View style={styles.containers}>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
        <Image source={require('../image/totokwajah.jpeg')} style={{width:150, height: 100}} />
 
 
        </TouchableOpacity>
        <Text style={styles.TextsStyle}>Totok Wajah</Text>
      </View>
   
 
</ScrollView>

< ScrollView horizontal={true}>
 
<View style={styles.containers}>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
        <Image source={require('../image/fullbodymassgakerokan.jpeg')}  style={{width:150, height: 100}} />
 
        </TouchableOpacity>
        <Text style={styles.TextsStyle}>Full Body Massage </Text>
        <Text style={styles.TextsStyle}>Kerokan</Text>
      </View>

      <View style={styles.containers}>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
        <Image source={require('../image/fullbdyreflexology.jpeg')} style={{width:150, height: 100}} />
 
 
        </TouchableOpacity>
        <Text style={styles.TextsStyle}>Full Body Massage</Text>
        <Text style={styles.TextsStyle}>Refelexologi</Text>
      </View>
 
</ScrollView>

< ScrollView horizontal={true}>
 
<View style={styles.containers}>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
        <Image source={require('../image/fullbodyaccupresore.jpeg')}  style={{width:150, height: 100}} />
 
        </TouchableOpacity>
        <Text style={styles.TextsStyle}>Full Body Massage </Text>
        <Text style={styles.TextsStyle}>Accupresore</Text>
      </View>

      <View style={styles.containers}>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
        <Image source={require('../image/body_scrub.jpeg')} style={{width:150, height: 100}} />
 
 
        </TouchableOpacity>
        <Text style={styles.TextsStyle}>Full Body Massage</Text>
        <Text style={styles.TextsStyle}>Scrub</Text>
      </View>
   
      
</ScrollView>



    < ScrollView horizontal={true}>
 
<View style={styles.containers}>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
        <Image source={require('../image/acontoh1.jpeg')}  style={{width:150, height: 50}} />
 
        </TouchableOpacity>
        <Text style={styles.TextsStyleInfo}>Body Scrub Info</Text>
        
      </View>

      <View style={styles.containers}>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
        <Image source={require('../image/acontoh2.jpeg')} style={{width:150, height: 50}} />
 
 
        </TouchableOpacity>
        <Text style={styles.TextsStyleInfo}>Accupresure Info</Text>
        
      </View>
      
 
</ScrollView>




< ScrollView horizontal={true}>
 
<View style={styles.containers}>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
        <Image source={require('../image/acontoh3.jpeg')}  style={{width:150, height: 50}} />
 
        </TouchableOpacity>
        <Text style={styles.TextsStyleInfo}>Body Scrub Info</Text>
        
      </View>

      <View style={styles.containers}>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
        <Image source={require('../image/acontoh4.jpeg')} style={{width:150, height: 50}} />
 
 
        </TouchableOpacity>
        <Text style={styles.TextsStyleInfo}>Accupresure Info</Text>
        
      </View>
      
 
</ScrollView>


 
    
 
   



</ScrollView>

    </View>

          
    
    );
  }
}



const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    backgroundColor: '#fff'

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
    color: '#6F4FA8',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    textShadowColor: '#C9C6CA',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
 
  },
  TextsStyleInfo : {
    color: '#2B0D60',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    textShadowColor: '#C9C6CA',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
 
  },
  container: {
    flex: 1,
    width: 500
   
  },
  containers: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#670099',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },

});