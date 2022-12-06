//Import dependencies
import React, {useState} from 'react';
import {View, Alert, KeyboardAvoidingView} from 'react-native';
import { StyleSheet, SafeAreaView, Dimensions  } from 'react-native';
import MapView from 'react-native-maps';

//Import from necessary files
import Input from '../components/Input';
import { db, firebase } from "../src/firebase/config";
import Button from '../components/Button';

//Usable variables to neaten transitions/content
const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];
const deviceHeight = Dimensions.get("window").height;

//Define constant variable being changed from input onChange
function FirebaseTest({navigation}) {
	const [animalSpecies, setAnimalSpecies] = useState('');
	const [animalAge, setAnimalAge] = useState('');
	const [date, setDate] = useState('');
	const [deceased, setDeceased] = useState('');
	const [time, setTime] = useState('');
	const [location, setLocation] = useState('');

//Make sure all fields are filled out
	function handleSubmit() {
		/*if (!animalSpecies || !animalAge || !date || !deceased || !time || !location) {
			Alert.alert('Submission Failed', 'One or more fields is missing or incorrect.');
		return;
		}*/ 

//Create constant variable containing animal details called by navigation{param}
		const animalDeets = {
			animalSpecies,
			animalAge,
			date,
			deceased,
			time,
			location,
	  	};

//Grab timestamp for firebase
		const timestamp = firebase.firestore.FieldValue.serverTimestamp();

//Add information to animal collection
//Add creates a unique id each time		
		db.collection("animal").add({
			species: animalSpecies,
			age: animalAge,
			date: date,
			time: time,
			deceased: deceased,
			location: location,
			createdAt: timestamp
		})

//Verify success in console
		.then((docRef) => {
			console.log("Document written with ID: ", docRef.id);
		})
		.catch((error) => {
			console.error("Error adding document: ", error);
		});

//Navigate to landing page with animal details
		navigation.navigate('FirebaseResultScreen', {animalDeets});
	}

//Form view containing text box styles, mapview, onChange props and handleSubmit call
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={{flex: 1}}>
				<View style={{ flex: 1 }}>
					<KeyboardAvoidingView
						behavior={Platform.OS === "ios" ? "padding" : "height"}
						style={{flex: 1}}>
							{/* Initial region in NA w/ pin in center */}
							<MapView style={styles.map}
								initialRegion={{
								latitude: 37.78825,
								longitude: -98.4324,
								latitudeDelta: 0.0,
								longitudeDelta: 0.0,
							}}>
								<MapView.Marker
									coordinate={{latitude: 37.0902,
									longitude: -98.4324}}
									title={"title"}
									description={"description"}
								/>
							</MapView>			
					</KeyboardAvoidingView>	
					<View style={styles.speciesTB}>
						<Input
							style={styles.speciesTB}
                    		label="Species"
							placeholder="  Insert species...   "
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
							//onChange__ = {___}
						/>
					</View>
					<SafeAreaView>
						<Button 
							text="Complete Submission" 
							onPress={handleSubmit} 
						/>
					</SafeAreaView>
				</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#D3D3D3',
		alignItems: 'stretch',
		justifyContent: 'flex-start',
		height: deviceHeight,
	},
	speciesTB: {
		justifyContent: 'flex-start',
		position:"absolute",
		bottom: 300,
		left: 10,
	},
	speciesInput: {
		justifyContent: 'flex-start',
		position:"absolute",
		bottom: 300,
		left: 10,
		overflow: 'hidden',
	},
	ageTB:{
		justifyContent: 'flex-start',
		position: "absolute",
		bottom: 300,
		right: 10,
	},
	dateTB:{
		justifyContent: 'flex-start',
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
		justifyContent: 'flex-start',
		height: '61%',
	},
});

export default FirebaseTest;
