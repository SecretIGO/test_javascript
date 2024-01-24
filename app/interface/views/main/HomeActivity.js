import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableNativeFeedback, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from './layout/activity_home';

const Stack = createNativeStackNavigator();

const HomeActivity = ({ navigation }) => {
  
    const [number, setNumber] = useState(0);

    const dialogs = [
        'What comes after 10?',
        'I\'m tired',
        'How about you count',
        'I don\'t wanna do this anymore',
        'What would you do if I told you to do this?',
        'nawh, hell nawh!',
        'Want some ice cream?',
        'Grab me something to eat',
        'The fact that you are here means you are alive',
        'Fun fact : when you see this dialog it means you have pressed this button more than 10 times! Congratulations, maybe you should find something else to do!'
      ];

    const handleButtonPress = () => {
        
        if (number >= 10){
            const randomDialog = dialogs[Math.floor(Math.random() * dialogs.length)];
            alert(randomDialog);
        }
        else{
            setNumber(number+1)
        }
            
    };

    const handleSignupPress = () => {
        navigation.navigate('Signup');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello World</Text>
            <Text>This is just a test for now!</Text>
            <Text>{number}</Text>

            <View style={styles.button_container}>
                <TouchableNativeFeedback
                    onPress={handleButtonPress}
                    background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, 0.2)', false)}
                    >
                    <View style={styles.button}>
                        <Text style={styles.button_text}>i am a button</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
            
            <Text>Don't have an account? <Text style={styles.text_signup} onPress={handleSignupPress}>Sign Up!</Text></Text>
            
            <StatusBar style="auto"/>
        </View>
    );
};

export default HomeActivity;
