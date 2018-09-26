import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import ScarletScreen from './src/ScarletScreen'
import GrayScreen from './src/GrayScreen'
import BlueScreen from './src/BlueScreen'
import MaizeScreen from './src/MaizeScreen'
import BlackScreen from './src/BlackScreen'
import GoldScreen from './src/GoldScreen'
import ModalScreen from './src/ModalScreen'

import { Router, Scene, Actions, Modal } from 'react-native-router-flux';
import { Fonts } from './Fonts'

const TabIcon = ({ selected, title }) => {
	console.log("lalalala");
	console.log(selected);
	if (title === 'OSU')
		return (
			<Text style={{ color: selected ? 'red' : 'black' }}>BIRL</Text>
		);
	return (
		<Text style={{ color: selected ? 'red' : 'black' }}>UHU</Text>
	);
}

export default class App extends Component {

	render() {
		console.disableYellowBox = true;
		return (
			<Router>
				<Modal hideNavBar>
					<Scene key="tabbar"
						tabs
						tabBarStyle={{ backgroundColor: '#FFFFFF' }}>
						<Scene key="osu" title="OSU" icon={TabIcon}>
							<Scene
								key="scarlet"
								component={ScarletScreen}
								title="Scarlet"
								titleStyle={styles.titulo}
							/>
							<Scene
								key="gray"
								component={GrayScreen}
								title="Gray"
								back
								onBack={() => Actions.pop()}
							/>
						</Scene>

						<Scene key="um" title="UM" icon={TabIcon}>
							<Scene
								key="blue"
								component={BlueScreen}
								title="Blue"
							/>
							<Scene
								key="maize"
								component={MaizeScreen}
								title="Maize"
							/>
						</Scene>

						<Scene key="vu" title="VU" icon={TabIcon}>
							<Scene
								key="gold"
								component={GoldScreen}
								title="Gold"
							/>
							<Scene
								key="black"
								component={BlackScreen}
								title="Black"
							/>
						</Scene>
					</Scene>

					<Scene key="modal"
						component={ModalScreen}
						title="Modal"
						direction="vertical"
						hideNavBar />

				</Modal>
			</Router>
		);
	}
}

const styles = StyleSheet.create({
	titulo: {
		fontWeight: '100',
		fontFamily: Fonts.ProductSansBold
	}
});






/* import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
  */