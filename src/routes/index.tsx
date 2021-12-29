import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {theme} from '../global/theme';
import {News} from '../screens/News';
import {Transparency} from '../screens/Transparency';

export function Routes() {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  function NewsTab() { 
    return (
      <Stack.Navigator
        initialRouteName="News"
        screenOptions={{
          title: 'Notícias',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#FFF',
            fontFamily: theme.fonts.title,
          },
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
        }}>
        <Stack.Screen name="News" component={News} />
      </Stack.Navigator>
    );;
  }

  function TransparencyTab() {
    return (
      <Stack.Navigator
        initialRouteName="Transparency"
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#FFF',
          },
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
        }}>
        <Stack.Screen
          name="Transparency"
          component={Transparency}
          options={{title: 'Transparência'}}
        />
      </Stack.Navigator>
    );;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="NewsTab"
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="NewsTab" component={NewsTab} />
        <Tab.Screen name="TransparencyTab" component={TransparencyTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );;
}
