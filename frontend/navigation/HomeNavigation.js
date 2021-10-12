import 'react-native-gesture-handler';
import React from 'react';
import { Text, Image, SafeAreaView, View, StyleSheet, Icon } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Visitors/Home';
import About from '../screens/Visitors/About';
import Login from '../screens/Visitors/Login';
import Inscription from '../screens/Visitors/Inscription';
import Toast from 'react-native-toast-message';
import { createDrawerNavigator } from "@react-navigation/drawer"
import {DrawerActions} from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { color } from 'react-native-reanimated';
import { colors } from '../constants/Colors';

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator();


class HomeNavigation extends React.Component {
  render() {
    return (
      <NavigationContainer>
        {/* <Drawer.Navigator  style={style.navigation} DrawerContent= {props => <DrawerContent { ... props} /> }initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home}  />
          <Drawer.Screen name="Connexion" component={Login} />
          <Drawer.Screen name="Inscription" component={Inscription} />
          <Drawer.Screen name="A propos" component={About} />
        </Drawer.Navigator> */}
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                  headerTitle:'Community',
                  headerStyle: {
                    backgroundColor: colors.blueColor2, 
                    shadowColor: colors.blueColor2,         
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
            
                }}

              />
              <Stack.Screen
                name="About"
                component={About}
                options={{
                  headerBackTitleVisible: false,
                  headerTitle:'A propos',
                  headerStyle: {
                    backgroundColor: colors.blueColor2, 
                    shadowColor: colors.blueColor2,         
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  headerBackTitleVisible: false,
                  headerTitle:'Connexion',
                  headerStyle: {
                    backgroundColor: colors.blueColor2, 
                    shadowColor: colors.blueColor2,         
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              />
              <Stack.Screen
                name="Inscription"
                component={Inscription}
                options={{
                  headerBackTitleVisible: false,
                  headerTitle:'Inscription',
                  headerStyle: {
                    backgroundColor: colors.blueColor2, 
                    shadowColor: colors.blueColor2,         
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              />
            </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const style = StyleSheet.create({
  navigation: {
    backgroundColor: 'red',
  },
});

export default HomeNavigation;