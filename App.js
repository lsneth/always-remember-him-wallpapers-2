import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Grid from './components/Grid.js'
import SetWallpaperScreen from './components/SetWallpaperScreen.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Always Remember Him">
        <Stack.Screen name="Always Remember Him" component={Grid} />
        <Stack.Screen name="Set Wallpaper" component={SetWallpaperScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;