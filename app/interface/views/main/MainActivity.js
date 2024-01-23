import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableHighlight,Text, View } from 'react-native';
import styles from './layout/activity_main';

export default function MainActivity() {

  const handleButtonPress = () => {
    alert('Why touch me!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <Text>This is just a test for now!</Text>
      <TouchableHighlight onPress={handleButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>i am a button</Text>
      </TouchableHighlight>
      <StatusBar style="auto"/>
    </View>
  );
};
