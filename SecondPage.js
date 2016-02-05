/*
 *
 * Developer - Satish Jha
 *
 */


'use strict';

import React, {
	StyleSheet,
	Component,
	View,
	Text,
	TouchableOpacity
} from 'react-native';

var navigator;

class SecondPage extends Component {
	render(){
		navigator = this.props.navigator;

		return (
			<View style={styles.container}>				

				<View style = {{flex: 1, flexDirection: 'row'}}>
					
					<TouchableOpacity
						onPress={this.previousButtonClick}>
						<Text style={ styles.navItems }> Previous Page </Text>					
					</TouchableOpacity>

					<TouchableOpacity
						onPress={this.nextButtonClick}>					
						<Text style={ styles.navItems }> Next Page </Text>				
					</TouchableOpacity>

				</View>

				<View style={{flex: 1}}>
					<Text> This is the Second page. </Text>
					<Text> This is the Second page. </Text>
					<Text> This is the Second page. </Text>
					<Text> This is the Second page. </Text>
					<Text> This is the Second page. </Text>					
				</View>


			</View>
		);
	}

	// Show previous page
	previousButtonClick() {
		navigator.pop();
	}

	// Show next page
	nextButtonClick() {
		navigator.push({id : 3});
	}
}

var styles = StyleSheet.create({
		container: {
			flex: 1, 
			marginTop: 20, 
			justifyContent: 'center', 
			alignItems: 'center'		
		},

		navItems : {
			fontSize: 12,
			color: '#00AA00',
			margin: 20,
			fontWeight: '500'
		}

	});

module.exports = SecondPage;