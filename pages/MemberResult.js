//Redundant code -- see 'FirebaseResult'

/*import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Alert} from 'react-native';
import Button from '../components/Button';
import MapView from 'react-native-maps';

//import firestore from '@react-native-firebase/firestore';
//import db from '../db/firestore';
//import Welcome from '../pages/Welcome'
//import MemberSign from '../pages/Welcome'


function MemberResult({route}, {navigation}) {
	const {animal} = route.params;
	function handleAgain() {
		return;
	}
	function handleHome() {
		return;
	}
	function handleNext() {
		return;
	}

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Text style={styles.message}>Submission Complete!</Text>
			<Text style={styles.label}>Species: {animal.animalSpecies}</Text>
			<Text style={styles.label}>Age: {animal.animalAge}</Text>
			<Text style={styles.label}>Date: {animal.date}</Text>
			<Text style={styles.label}>Time: {animal.time}</Text>
			<Text style={styles.label}>Deceased?: {animal.deceased}</Text>
			<Text style={styles.label}>Location: </Text>
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
			<SafeAreaView>
					<Button text="Submit Another" onPress={handleAgain} />
			</SafeAreaView>
			<SafeAreaView>
					<Button text="Landing Page" onPress={handleNext} />
			</SafeAreaView>
			<SafeAreaView>
					<Button text="Return Home" onPress={handleHome} />
			</SafeAreaView>
				</SafeAreaView>
	);
}



const styles = StyleSheet.create({
	label: {
		fontSize: 18,
		fontWeight: 'bold',
		margin: 15,
	},
	message: {
		fontWeight: 'bold',
		fontSize: 28,
		textAlign: 'center',
		color: '#9fa8da',
		margin: 25,
	},
	map: {
		height: '100%',
	},
});

export default MemberResult;
//export default writeUserData;*/
