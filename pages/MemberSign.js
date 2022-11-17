import React, {useState} from 'react';
//import * as React from 'react';
import {View, Alert, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { StyleSheet, Text, SafeAreaView, Dimensions  } from 'react-native';
import MapView from 'react-native-maps';
import DocumentPicker from 'react-native-document-picker';
import DatePicker from 'react-native-date-picker';

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];
const deviceHeight = Dimensions.get("window").height;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    height: deviceHeight,
  },
  speciesTB: {
    position:"absolute",
    bottom: 300,
    left: 10,

  },
  ageTB:{
    position: "absolute",
    bottom: 300,
    right: 10,
  },
  dateTB:{
    position: "absolute",
    bottom: 230,
    left: 10,
  },
  timeTB:{
    position: "absolute",
    bottom: 230,
    right: 10,
  },
  deathTB:{
    position: "absolute",
    bottom: 160,
    right: 10,
  },
  locationTB:{
    position: "absolute",
    bottom: 160,
    left: 10,
  },
  photoTB:{
    position: "absolute",
    bottom: 88,
    left: 100,
  },
  map: {
    height: '61%',
  },
});

function MemberSign({navigation}) {
  const [animalSpecies, setAnimalSpecies] = useState(null);
  const [animalAge, setAnimalAge] = useState(null);
  const [date, setDate] = useState(null);
  const [deceased, setDeceased] = useState(null);
  const [time, setTime] = useState(null);
  const [location, setLocation] = useState(null);


  function handleSubmit() {
    /*if (!animalSpecies || !animalAge || !date || !deceased || !time || !location) {
      Alert.alert('Submission Failed', 'One or more fields is missing or incorrect.');
      return;
    }*/


    const animal = {
      animalSpecies,
      animalAge,
      date,
      deceased,
      time,
      location,
    };
  
  navigation.navigate('MemberResultScreen', {animal});
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
        {/* <Text>Member Sign</Text> */}
          <View style = {{flex: 1}}>
            <MapView style={styles.map}
              initialRegion={{
                latitude: 37.78825,
                longitude: -98.4324,
                latitudeDelta: 0.0,
                longitudeDelta: 0.0,
              }}
            >
            <MapView.Marker
              coordinate={{latitude: 37.0902,
              longitude: -98.4324}}
              title={"title"}
              description={"description"}
            />
            
            </MapView>
          </View>

        <View style={styles.speciesTB}>
          <Input
            label="Species"
            placeholder="  Insert species...   "
            placeholderTextColor="#fff"
            onChangeText={setAnimalSpecies}
          />
        </View>

        <View style={styles.ageTB}>
          <Input
            label="Age"
            placeholder="  Approximate age...  "
            onChangeText={setAnimalAge}
          />
        </View>

        <View style={styles.dateTB}>
          <Input
            label="Date"
            placeholder="  MM/DD/YYYY  "
            onChangeText={setDate}
          />
        </View>

        <View style={styles.deathTB}>
          <Input
            label="Deceased?"
            placeholder="  Yes or No...  "
            onChangeText={setDeceased}
            />
        </View>
        <View style={styles.timeTB}>
          <Input
            label="Time"
            placeholder="  HH:MM:SS  "
            onChangeText={setTime}
          />
        </View>
        <View style={styles.locationTB}>
          <Input
            label="Location"
            placeholder="  Input location or move pin...  "
            onChangeText={setLocation}
            />
        </View>
        <View style={styles.photoTB}>
          <Input
            label="Upload"
            placeholder="  Upload will live here  "
            
            //onChangeText={setPhoto}
            />
        </View>

        <SafeAreaView>
          <Button text="Complete Submission" onPress={handleSubmit} />
        </SafeAreaView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView> 
  );
}

export default MemberSign;
