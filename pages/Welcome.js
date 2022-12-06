//Import dependencies for placeholder:welcome page after logging in
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { NativeScreenNavigationContainer } from 'react-native-screens';
import Button from '../components/Button';

//Navigate to form
function Welcome({navigation}) {
  function goToMemberSign() {
    navigation.navigate('FirebaseTestScreen');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome!</Text>
      <Button text="Submit an Animal" onPress={goToMemberSign} />
    </View>
  );
}

//Standard styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default Welcome;
