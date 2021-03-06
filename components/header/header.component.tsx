import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export interface HeaderProps {
	title: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({ title }) => {
	return (
		<View style={styles.header}>
			<Text style={styles.headerTitle}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 90,
		backgroundColor: Colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerTitle: {
		color: 'black',
		fontSize: 18,
	},
});

export default Header;
