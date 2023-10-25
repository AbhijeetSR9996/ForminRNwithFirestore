import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/Screens/Splash';
import Home from './src/Screens/Home';
import Enquiry from './src/Screens/Enquiry';
import Toast from 'react-native-toast-message';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Home" options={{headerShown: false}}>
            {props => <Home {...props} channelName={'The Makers'} />}
          </Stack.Screen>
          <Stack.Screen
            name="Enquiry"
            component={Enquiry}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast position="top" topOffset={40} />
    </>
  );
}
