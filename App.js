import {StatusBar} from 'expo-status-bar'
import {Text, ScrollView, Image} from 'react-native'
import styles from './styles.js'
import Grid from './components/Grid.js'
import SetWallpaperScreen from './components/SetWallpaperScreen.js'
import { NavigationContainer, StackActions } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <ScrollView style={styles.app}>
        <Stack.Screen name='Home' component={Grid} options={{title:'Welcome'}}/>
        <Stack.Screen name='SetWallpaper' component={SetWallpaperScreen} options={{title:'Set Wallpaper'}}/>
      </ScrollView>
    </NavigationContainer>
  );
}