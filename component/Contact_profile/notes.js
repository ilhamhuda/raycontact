import React, { Component } from 'react';
import { Image, ImageBackground, TouchableOpacity, View, ScrollView } from 'react-native';
import { Container, Header,Card, CardItem, Content, List, ListItem, Thumbnail, Text,Item, Icon, Input, Left, Button, Body, Title, Right } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class LogoTitle extends React.Component {
  render() {
    return (
      // <Image
      //   source={require('../assets/holder.png')}
      //   style={{ width: 30, height: 30 }}
      // />
      <Text style={{fontWeight:"bold", color:'white'}}> Contact</Text>
    );
  }
}
export default class Tasks extends Component {
  // static navigationOptions = {
  //   headerTitle: <LogoTitle />,
  //   headerTintColor: 'white',
  //   headerStyle: {
  //     backgroundColor: '#063359',
  //   },
  // };
  static navigationOptions = {
    header: null
}
  render() {
    return (
      
      <Container>
        <Content style={{}}>
        <Button  transparent style={{paddingTop: 1, width: wp('80%'), borderWidth:1, borderColor: "grey", borderRadius:80,marginRight:wp('4%')}} onPress={()=>this.props.navigation.navigate('Newnote')}>
          <Icon name='add' style={{fontSize: 17, fontWeight:"bold", paddingTop:5, color:"#063359"}}/>
          <Text style={{fontSize: 12, color:"black", fontWeight:"bold"}}>Add new lose</Text>
        </Button>
        <Card style={{borderRadius:10, backgroundColor:'#f2f0f0', borderWidth: 0, borderColor: '#ffffff'}}>
        <CardItem style={{backgroundColor:"white",  margin:20, paddingTop: 0, paddingBottom: 0, borderRadius:100, borderWidth: 3, borderColor: '#063359'}} >
            <Icon active name='search' style={{color: "#000001", fontSize: 20, paddingLeft: 10}} />
            <Input placeholder='Search'/>
          </CardItem>
            <CardItem style={{backgroundColor:"white",  margin:20, paddingTop: 15, paddingBottom: 15, borderRadius:10, borderWidth: 0, borderColor: 'ffffff'}}>
            <View style={{flex: 1, flexDirection: 'Column'}}>
              <View style={{flex: 1, flexDirection: 'Column',paddingLeft:5, paddingTop:10}}>
              <Text style={{color:"#063359", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>Title</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text style={{color:"#063359", alignSelf:'flex-start', paddingBottom:10, fontSize: 12, color:"grey"}}>Note</Text>
              </View>
                 <Button onPress={()=>{Linking.openURL('tel:089601777308');}} transparent style={{backgroundColor:'#063359',alignItems:'center',paddingTop: 1, width: wp('78%'), borderWidth:1, borderColor: "grey", borderRadius:10,marginRight:wp('4%')}} >
                  <Text style={{color:"white", paddingBottom:5, fontSize: 18, alignSelf:'center'}}>Detail</Text>
                 </Button>
               
                </View> 
         
                 
              </View>
            
            </CardItem>
          
          </Card> 
          <Card style={{backgroundColor:"white", paddingTop: 0, borderRadius:10,paddingBottom: 0, borderRadius:100, borderWidth: 0, borderColor: 'white'}}>
           <View style={{flex:1, flexDirection:'row'}}>
            <Icon active name='search' style={{color: "#000001", fontSize: 20, marginLeft: 10,marginTop:10}} />
            <Input placeholder='Search'/>
            </View>
          </Card>
        <Card style={{ paddingLeft:10,borderRadius:10, backgroundColor:'white', margin:20, paddingBottom: 15, borderRadius:10, borderWidth: 0, borderWidth: 0, borderColor: '#ffffff'}}>
   <View style={{flex: 1, flexDirection: 'column',margin:5}}>
              <View style={{flex: 1, flexDirection: 'Column',paddingLeft:10,paddingTop:20,paddingBottom:10}}>
              <Text style={{color:"#063359", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>Raywhite Jakarta </Text>
              <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, color:"grey"}}>Jln Ciwastra Komplek Pemda no 65</Text>
            
                 <View style={{flex: 1, flexDirection: 'row', paddingTop: 15}}>
                 <Thumbnail style={{borderRadius: 17, marginRight:5, borderWidth: 2, width: wp('10%'),height: hp('5%'),  borderColor: '#063359'}} source={{uri: 'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg'}} />  
                 <Thumbnail style={{borderRadius: 17, marginRight:5, borderWidth: 2, width: wp('10%'),height: hp('5%'),  borderColor: '#063359'}} source={{uri: 'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg'}} />  
                 <Thumbnail style={{borderRadius: 17, marginRight:5,borderWidth: 2, width: wp('10%'),height: hp('5%'),  borderColor: '#063359'}} source={{uri: 'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg'}} />  
                 <Thumbnail style={{borderRadius: 17, marginRight:5, borderWidth: 2, width: wp('10%'),height: hp('5%'),  borderColor: '#063359'}} source={{uri: 'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg'}} />  
                 <Thumbnail style={{borderRadius: 17, marginRight:5, borderWidth: 2, width: wp('10%'),height: hp('5%'),  borderColor: '#063359'}} source={{uri: 'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg'}} />  
                 <Thumbnail style={{borderRadius: 17, marginRight:5,borderWidth: 2, width: wp('10%'),height: hp('5%'),  borderColor: '#063359'}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa9iHkWQwZckfGInhsWcbbAcGW2AziADKaY_y3GiX4IuxXoert'}} />  
                
                </View>

                </View> 
                <Button onPress={()=>this.props.navigation.navigate('Group_contact_detail')} transparent style={{backgroundColor:'#063359',alignItems:'center',flex:1, flexDirection:'row', paddingTop: 1, width: wp('78%'), borderWidth:0, borderColor: "grey", borderRadius:30,marginRight:wp('4%')}} >
          
                <Text style={{color:"white",marginLeft:90, marginTop:10, paddingBottom:5, fontSize: 12, alignSelf:'center'}}>SEE GROUPS</Text> 
                 </Button>
               
              </View>
 

           
          </Card>   
        </Content>
      </Container>
    );
  }
}
