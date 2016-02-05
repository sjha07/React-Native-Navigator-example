/**

 * Developer - Satish Jha 

 */


'use strict';
	
import React, {
	AppRegistry,
	Component,
	View,
	Text, 
	TouchableOpacity,
	StyleSheet
} from 'react-native';

var navigator;

class FirstPage extends Component {
	render() {
		navigator = this.props.navigator;
		return (
			<View style={styles.container}>

				<View style = {{flex: 1, flexDirection: 'row'}}>

					<TouchableOpacity
						onPress={this.nextButtonClick}>					
						<Text style={ styles.navItems }> Next Page </Text>				
					</TouchableOpacity>

				</View>

				<View style={{flex: 1}}>
					<Text > This is First Page. </Text>
					<Text > This is First Page. </Text>
					<Text > This is First Page. </Text>
					<Text > This is First Page. </Text>
					<Text > This is First Page. </Text>

				</View>

			</View>

			);
	}

	// Show next page
	nextButtonClick() {
		navigator.push({id : 2});
	}

}

var styles = StyleSheet.create({
		container: {
			flex: 1, 
			marginTop: 20, 
			alignItems: 'center', 
			justifyContent: 'center',	
		},
		navItems : {
			fontSize: 12,
			color: '#00AA00',
			margin: 20,
			fontWeight: '500'
		}
	});

module.exports = FirstPage;