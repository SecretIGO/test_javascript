import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeActivity from './app/interface/views/main/HomeActivity';
// import SignupActivity from './app/interface/views/auth/SignupActivity';
import LoginActivity from './app/interface/views/auth/LoginActivity';
import SignupActivity from './app/interface/views/auth/SignupActivity';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home" component={HomeActivity} />
          <Stack.Screen name="Signup" component={SignupActivity} />
          <Stack.Screen name="Login" component={LoginActivity} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  export default App;