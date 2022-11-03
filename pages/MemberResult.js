import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
/*import database from '@react-native-firebase/database';
//import { initializeApp } from "@firebase/app";
//import { getDatabase, ref, set } from "@firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://apcs360-9ac59-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
//const database = getDatabase(app);

function writeUserData(animalSpecies, animalAge, dateTime, deceased) {
    const db = getDatabase(app);
    set(ref(db, 'animals/' + animalSpecies), {
      age: animalAge,
      date: dateTime,
      death : deceased
    });
  }*/

function MemberResult({route}) {
  const {animal} = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.message}>Submission Complete!</Text>
      <Text style={styles.label}>Species: {animal.animalSpecies}</Text>
      <Text style={styles.label}>Age: {animal.animalAge}</Text>
      <Text style={styles.label}>Date and Time: {animal.dateTime}</Text>
      <Text style={styles.label}>Deceased: {animal.deceased}</Text>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
  },
  message: {
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    color: '#9fa8da',
  },
});

export default MemberResult;
//export default writeUserData;
