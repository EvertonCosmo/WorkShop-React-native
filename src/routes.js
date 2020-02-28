import React from 'react';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from './pages/Home';
import Hello from './pages/Hello';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Top = createMaterialTopTabNavigator();
const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Hello"
        component={Hello}
        options={({route}) => {
          const {value} = route.params;
          return {headerTitle: value};
        }}
      />
    </Stack.Navigator>
  );
};
const TabNavigation = () => {
  return (
    <Tabs.Navigator initialRouteName={'Home'}>
      <Tabs.Screen name="Home" component={MainNavigation} />
      <Tabs.Screen name="Hello" component={Hello} />
    </Tabs.Navigator>
  );
};
const TopNavigation = () => {
  return (
    <Top.Navigator initialRouteName={'Home'}>
      <Top.Screen name="Home" component={Home} />
      <Top.Screen name="Hello" component={Hello} />
    </Top.Navigator>
  );
};
export default TabNavigation;
