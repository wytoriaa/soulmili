import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './src/Home';
import Servicos from './src/Servicos';
import Form from './src/Form';

const Tab = createBottomTabNavigator();

export default function App() {
  return <NavigationContainer style={styles.container}>
  <Tab.Navigator initalRouteName = "Home" screenOptions = {({route}) => ({
         tabBarIcon: ({color, size}) => {
           let iconName;
           switch(route.name){
             case "Home":
             iconName = "home";
             break;
             case "Servicos":
             iconName = 'list';
             break;
             case "Form":
             iconName = "grid";
             break;
           }
           return <Ionicons name = {iconName} size = {size} color = {color}/>
         },
       })} 
           tabBarOptions = {{
             activeTintColor: '#035159',
             inactiveTintColor: '#419CA6',
           }}>
       <Tab.Screen name = "Home" component = {Home}/>
       <Tab.Screen name = "Servicos" component ={Servicos}/>
       <Tab.Screen name = "Form" component ={Form}/>
       </Tab.Navigator>

 </NavigationContainer>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
