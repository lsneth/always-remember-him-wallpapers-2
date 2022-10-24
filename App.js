import {StatusBar} from 'expo-status-bar';
import {Text, ScrollView, Image} from 'react-native';
import styles from './styles.js'
import Grid from './components/Grid.js';

export default function App() {
  return (
    <ScrollView style={styles.app}>
      <Text style={styles.title}>Always Remember Him</Text>
      <Grid/>
      <StatusBar style="auto" />
    </ScrollView>
  );
}