//Import dependencies used
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

//Import from necessary files
import Button from '../components/Button';
import MapView from 'react-native-maps';

//create route/nav function to output parameters and navigate onward after
function FirebaseResult({route, navigation}) {
	const {animalDeets} = route.params;
	function handleAgain() {
		navigation.navigate('FirebaseTestScreen');
	}
	function handleHome() {
		navigation.navigate('WelcomeScreen');
	}
	function handleNext() {
		return;
	}

//Results of input are shown along with buttons to proceed
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Text style={styles.message}>Submission Complete!</Text>
			<Text style={styles.label}>Species: {animalDeets.animalSpecies}</Text>
			<Text style={styles.label}>Age: {animalDeets.animalAge}</Text>
			<Text style={styles.label}>Date: {animalDeets.date}</Text>
			<Text style={styles.label}>Time: {animalDeets.time}</Text>
			<Text style={styles.label}>Deceased?: {animalDeets.deceased}</Text>
			<Text style={styles.label}>Location: </Text>
			<View style = {{flex: 1}}>
				<MapView 
                    style={styles.map}
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

export default FirebaseResult;
