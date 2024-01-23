import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableNativeFeedback, Text, View } from 'react-native';
import styles from './layout/activity_main';

export default function MainActivity() {

    const [number, setNumber] = useState(0);

    const handleButtonPress = () => {
        setNumber(number+1)
        alert("Button Pressed! " + (number+1) + " times.");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello World</Text>
            <Text>This is just a test for now!</Text>
            <Text>{number}</Text>

            <View style={styles.buttonContainer}>
                <TouchableNativeFeedback
                    onPress={handleButtonPress}
                    background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, 0.2)', false)}
                    >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>i am a button</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
            
            <StatusBar style="auto"/>
        </View>
    );
};
