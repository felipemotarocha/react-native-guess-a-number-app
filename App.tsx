import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/header/header.component';
import StartGameScreen from './screens/start-game/start-game.screen';

export default function App() {
	return (
		<View style={styles.screen}>
			<Header title={'Guess a Number'} />
			<StartGameScreen />
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});
