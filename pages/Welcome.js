import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/Button';

function Welcome({navigation}) {
  function goToMemberSign() {
    navigation.navigate('MemberSignScreen');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome!</Text>
      <Button text="Submit an Animal" onPress={goToMemberSign} />
    </View>
  );
}

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
