/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './HomeScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createNativeStackNavigator();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
