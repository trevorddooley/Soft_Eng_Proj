import React, {useState, useEffect} from 'react';
//import * as React from 'react';
import {View, Alert} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { StyleSheet, Text, SafeAreaView, Dimensions  } from 'react-native';
import { MapView } from 'expo';
import DocumentPicker from 'react-native-document-picker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';



const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

function Form({navigation}) {
  const [animalSpecies, setAnimalSpecies] = useState(null);
  const [animalAge, setAnimalAge] = useState(null);
  const [dateTime, setDateTime] = useState(null);
  const [deceased, setDeceased] = useState(null);
  const [currentDate, setCurrentDate] = useState('');
  const [date, setDate] = useState(new Date())
  function handleSubmit() {
    if (!animalSpecies || !animalAge || !dateTime || !deceased) {
      Alert.alert('Submission Failed', 'One or more fields is incorrect.');
      return;
    }

    const animal = {
      animalSpecies,
      animalAge,
      dateTime,
      deceased,
    };
    navigation.navigate('Success', {animal});
  }

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + '/' + month + '/' + year 
      + ' ' + hours + ':' + min + ':' + sec
    );
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Text>Member Sign</Text> */}
      <View style={styles.container}>
        <MapView style={styles.map} />
      </View>
      
      <Input
        label="Species"
        placeholder="Insert species..."
        onChangeText={setAnimalSpecies}
      />
      <Input
        label="Age"
        placeholder="Approximate age..."
        onChangeText={setAnimalAge}
      />
      <DatePicker date={date} onDateChange={setDate} 
      />
      <Input
        label="Deceased?"
        placeholder="Yes or No..."
        onChangeText={setDeceased}
      />
      <Button text="Complete Submission" onPress={handleSubmit} />
    </SafeAreaView>
  );
}

export default Form;
