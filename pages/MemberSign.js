import React, {useState} from 'react';
//import * as React from 'react';
import {View, Alert} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { StyleSheet, Text, SafeAreaView, Dimensions  } from 'react-native';
import MapView from 'react-native-maps';
import DocumentPicker from 'react-native-document-picker';



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

function MemberSign({navigation}) {
  const [animalSpecies, setAnimalSpecies] = useState(null);
  const [animalAge, setAnimalAge] = useState(null);
  const [dateTime, setDateTime] = useState(null);
  const [deceased, setDeceased] = useState(null);

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
  
  navigation.navigate('MemberResultScreen', {animal});
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Text>Member Sign</Text> */}
      <View style={styles.container}>
        <MapView style={styles.map}
          initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0,
              longitudeDelta: 0.0,
          }}
        >
        <MapView.Marker
            coordinate={{latitude: 37.78825,
            longitude: -122.4324}}
            title={"title"}
            description={"description"}
         />
      </MapView>
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
      <Input
        label="Date and Time"
        placeholder="Select the date and time..."
        onChangeText={setDateTime}
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

export default MemberSign;
