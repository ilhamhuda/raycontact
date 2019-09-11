import React, { Component } from 'react';
import { Image, ImageBackground, TouchableOpacity, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Tasks from './component/task';
import Notes_add from './component/Contact_profile/notes_add';
import Requirement_add from './component/Contact_profile/requirements_add';
import Taskadd from './component/task_add';
import { createStackNavigator } from 'react-navigation';
import Marketing from './component/marketing';
import Profile from './component/profile';
import Product from './component/product';
import Contact from './component/contact';
import Group_contact from './component/group_contact';
import Group_contact_detail from './component/group_contact_detail';
import Group_contact_add from './component/group_contact_add';
import Matching from './component/matching';
import Banks from './component/banks';
import Banks_detail from './component/banks_detail';
import Banks_detail_cabang from './component/banks_detail_cabang';

import Contact_add from './component/contact_add';
import Contact_detail from './component/contact_detail';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
class App extends Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
      headerRight: (
        <Button
          onPress={navigation.getParam('increaseCount')}
          title="+1"
          color={Platform.OS === 'ios' ? '#fff' : null}
        />
      )
}
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: "#ffffff"}}>
          <Left>
          <TouchableOpacity  style={{height: hp('13%'),width: wp('40%'),marginRight:wp('4%')}}>
          <Image source={require('./assets/mycontacts.png')} style={{height: hp('13%'),width: wp('40%'),marginRight:wp('4%')}} resizeMode='contain' />
          </TouchableOpacity>
          </Left>

          <Right>
            <Button transparent>
            <Icon name="md-list" color="#063359" style={{fontSize: 30}}/>
            </Button>
          </Right>
        </Header>
        <Content style={{padding:15, borderTopWidth:15, borderTopColor: "#e6e9ed"}} >
          <Card style={{borderRadius:10, borderWidth: 0, borderColor: '#ffffff'}}>
            <CardItem style={{backgroundColor:"#063359", paddingTop: 30, paddingBottom: 30, borderRadius:10, borderWidth: 0, borderColor: 'ffffff'}}>
              <Left> 
                <Body>
                  <Text style={{color:"white", paddingBottom:5, fontSize: 12}}>Welcome Back,</Text>
                  <Text style={{color:"white", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>Ilham Huda</Text>
                  <Text style={{color:"white", paddingBottom:10, fontSize: 12}}>Raywhite Bandung</Text>
                  <TouchableOpacity style={{borderWidth:1, borderColor: "white", borderRadius:15, height: hp('5%'),width: wp('30%'),marginRight:wp('4%')}}onPress={()=>this.props.navigation.navigate('Profile')}>
                   <Text style={{textAlign:'center', marginTop: hp('1%'),  fontSize:10, color: "white"}}>Profile Saya <Icon name="md-arrow-dropright" color="white" style={{fontSize: 12}}/></Text>

                 </TouchableOpacity>
                </Body>
               
              </Left>
              <Right>
              <Thumbnail style={{borderWidth: 2, width: wp('20%'),height: hp('15%'),  borderColor: '#ffffff'}} source={{uri: 'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg'}} />
              </Right>
            </CardItem>
            
          </Card>
          <View style={{paddingRight:5}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop:30, marginBottom:20,  paddingHorizontal:10}}>
      
        <TouchableOpacity  style={{height: hp('20%'),width: wp('18.5%'),marginRight:wp('4%')}} onPress={()=>this.props.navigation.navigate('Tasks')}>
          <Image source={require('./assets/1.png')} style={{height: hp('13%'),width: wp('18%'),marginRight:wp('4%')}} resizeMode='contain' />
          <Text style={{textAlign:'center', fontSize:10}}>Tasks</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={{height: hp('20%'),width: wp('18.5%'),marginRight:wp('4%')}}onPress={()=>this.props.navigation.navigate('Contact')}>
          <Image source={require('./assets/3.png')} style={{height: hp('13%'),width: wp('18%'),marginRight:wp('4%')}} resizeMode='contain' />
          <Text style={{textAlign:'center', fontSize:10}}>Contacts </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={{height: hp('20%'),width: wp('18.5%'),marginRight:wp('4%')}} onPress={()=>this.props.navigation.navigate('Marketing')}>
          <Image source={require('./assets/4.png')} style={{height: hp('13%'),width: wp('18%'),marginRight:wp('4%')}} resizeMode='contain' />
          <Text style={{textAlign:'center', fontSize:10}}>E-Marketing</Text>
          </TouchableOpacity>
          
          <TouchableOpacity  style={{height: hp('20%'),width: wp('18.5%'),marginRight:wp('4%')}} onPress={()=>this.props.navigation.navigate('Product')}>
        <Image source={require('./assets/2.png')} style={{height: hp('13%'),width: wp('18%'),marginRight:wp('4%')}} resizeMode='contain' />
        <Text style={{textAlign:'center', fontSize:10}}>Product</Text>
        </TouchableOpacity>

        </ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginLeft:40, marginTop:-40, marginBottom:20, paddingHorizontal:10}}>
      
              
        <TouchableOpacity style={{height: hp('20%'),width: wp('18.5%'),marginRight:wp('4%')}}  onPress={()=>this.props.navigation.navigate('Banks')}>
          <Image source={require('./assets/5.png')} style={{height: hp('13%'),width: wp('18%'),marginRight:wp('4%')}} resizeMode='contain' />
          <Text style={{textAlign:'center', fontSize:10}}>Banks</Text>
          </TouchableOpacity>
  
        <TouchableOpacity style={{height: hp('20%'),width: wp('18.5%'),marginRight:wp('4%')}}onPress={()=>this.props.navigation.navigate('Matching')}>
        <Image source={require('./assets/6.png')} style={{height: hp('13%'),width: wp('18%'),marginRight:wp('4%')}} resizeMode='contain' />
        <Text style={{textAlign:'center', fontSize:10}}>Matching</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{height: hp('20%'),width: wp('18.5%'),marginRight:wp('4%')}} onPress={()=>this.props.navigation.navigate('Group_contact')}>
        <Image source={require('./assets/7.png')} style={{height: hp('13%'),width: wp('18%'),marginRight:wp('4%')}} resizeMode='contain' />
        <Text style={{textAlign:'center', fontSize:10}}>Group Contact</Text>
        </TouchableOpacity>
        
      </ScrollView>
      </View>
      {/* <TouchableOpacity style={{borderRadius:10, borderWidth: 0, borderColor: '#ffffff'}}>
      <ImageBackground source={{uri: 'https://image.shutterstock.com/image-illustration/blue-white-black-abstract-background-260nw-645331459.jpg'}} style={{height: hp('10%'),width: wp('92%'), borderRadius:10, borderWidth: 0, borderColor: '#ffffff'}}>
      <Text style={{textAlign:'center', fontSize:10, color:"white",marginTop:wp('5%')}}>Copyright@ 2019</Text>
       </ImageBackground>
       </TouchableOpacity> */}
       <CardItem style={{backgroundColor:"#063359", height: hp('7%'),width: wp('92%'), borderRadius:10, borderWidth: 0, borderColor: '#ffffff'}}>  
           <Text style={{textAlign:'center', fontSize:10, color:"white",marginTop:wp('2%'), fontWeight:"bold"}}>Copyright@ 2019</Text>
            <Text style={{fontSize:10, color:"white",marginTop:wp('2%')}}> MyContacts</Text>
       </CardItem>
        </Content>
      </Container>
    );
  }
}

const HomeStack = createStackNavigator({    
  
  App: { screen: App },
  Tasks: { screen: Tasks },
  Taskadd:{ screen: Taskadd },
  Notes_add:{ screen: Notes_add },
  Contact_detail: { screen: Contact_detail },
  Marketing: { screen: Marketing },
  Product: { screen: Product},
  Requirement_add: { screen: Requirement_add},
  Contact: { screen: Contact},
  Contact_add: { screen: Contact_add},
  Banks: { screen: Banks},
  Banks_detail_cabang: { screen: Banks_detail_cabang},
  Banks_detail: { screen: Banks_detail},
  Matching: { screen: Matching},
  Group_contact: { screen: Group_contact},
  Group_contact_add: { screen: Group_contact_add},
  Group_contact_detail: { screen: Group_contact_detail},
   Profile: { screen: Profile}

},{
  initialRouteName : 'App',

});

export default HomeStack;