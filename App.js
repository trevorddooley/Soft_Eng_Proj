//Import dependencies
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Import files needed to creat navigation stack
import Welcome from './pages/Welcome';
import LoginScreen from './screens/LoginScreen';
import FirebaseTest from './pages/FirebaseTest';
import FirebaseResult from './pages/FirebaseResult';

//declare stack and create navigation
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="FirebaseTestScreen" component={FirebaseTest} />
        <Stack.Screen name="FirebaseResultScreen" component={FirebaseResult} />
        <Stack.Screen name="WelcomeScreen" component={Welcome}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
