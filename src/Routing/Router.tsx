import * as React from 'react';

import { Text, View } from 'react-native';

import Home from '../containers/Home';
import Messages from "../containers/Messages";
import { NavigationContainer } from '@react-navigation/native';
import Welcome from "../containers/Welcome";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Messages" component={Messages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;