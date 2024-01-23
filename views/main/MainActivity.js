import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './layout/activity_main';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <Text>This is just a test for now!</Text>
      <StatusBar style="auto"/>
    </View>
  );
};
