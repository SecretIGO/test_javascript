import { StatusBar } from 'expo-status-bar';
import { TouchableNativeFeedback, Image, Text, TextInput, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from './layout/activity_signup';

const Stack = createNativeStackNavigator();

const SignupActivity = ({ navigation }) => {
    handleBackButton = () => {
        navigation.pop();
    };

    handleSignup = () => {
        alert('Signing you up!');
    }

    const handleSigninPress = () => {
        navigation.navigate('Login');
    }

    return (

        <View style={styles.outer_container}>
            
            <View style={styles.container}>
                <Image source={require('../../../../assets/logo_test2.png')} style={styles.image_logo} />
                <Text>Create an Account</Text>
                <View style={styles.text_input}>
                    <TextInput placeholder='Username...' />
                </View>
                <View style={styles.text_input}>
                    <TextInput placeholder='Password...' />
                </View>
            </View>

            <View style={styles.button_container}>
                <View style={styles.login_options_container}>
                    <Text style={styles.text_login_options}>- Signup with -</Text>

                    <View style={styles.login_options}>
                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, 0.2)', false)}
                            >
                            <View style={styles.button_option_circ}>
                                <Image source={require('../../../../assets/logo_facebook.png')} style={styles.button_option_icon} />
                            </View>
                            
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, 0.2)', false)}
                            >
                            <View style={styles.button_option_circ}>
                                <Image source={require('../../../../assets/logo_google.png')} style={styles.button_option_icon} />
                            </View>
                        </TouchableNativeFeedback>
                            
                    </View>
                    
                </View>

                <View style={styles.container_option_signin                                                                                                                                                                                                                  }>
                    <Text>Already have an account? <Text style={styles.link_signin} onPress={handleSigninPress}>Signin</Text></Text>
                </View>

                <View style={styles.button_container}>
                    <TouchableNativeFeedback
                    onPress={handleSignup}
                    background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, 0.2)', false)}
                    >
                    <View style={styles.button}>
                        <Text style={styles.button_text}>Create Account</Text>
                    </View>
                </TouchableNativeFeedback>
                </View>

            </View>

            <StatusBar style="auto" />
        </View>
      );

}

export default SignupActivity;