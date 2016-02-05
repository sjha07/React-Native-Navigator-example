/*
 *
 * Developer - Satish Jha
 *
 */


'use strict';

import React, {
	Text,
	View,
	Component,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
var navigator;

class ThirdPage extends Component {
	render(){
		navigator = this.props.navigator;
		return (
			<View style={ styles.container }>
				<Text> This is the Third page. </Text>

				<View style = {{flex: 1, flexDirection: 'row'}}>
					
					<TouchableOpacity
						onPress={this.previousButtonClick}>
						<Text style={ styles.navItems }> Previous Page </Text>					
					</TouchableOpacity>

				</View>

				<View style={{flex: 1}}>
					<Text> This is the Third page. </Text>
					<Text> This is the Third page. </Text>
					<Text> This is the Third page. </Text>
					<Text> This is the Third page. </Text>
					<Text> This is the Third page. </Text>
					<Text> This is the Third page. </Text>

				</View>

				

			</View>
		);
	}

	// Show Page
	previousButtonClick() {
		navigator.pop();
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

module.exports = ThirdPage;