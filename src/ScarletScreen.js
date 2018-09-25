import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Fonts } from '../Fonts'

const ScarletScreen = () => {
    return (
      <View style={styles.container}>
        <Text
          style={styles.welcome}
          onPress={() => Actions.gray()}
        >
          Scarlet Screen
        </Text>
        <Text
          style={styles.welcome}
          onPress={() => Actions.modal()} 
        >
          Open Modal
        </Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#bb0000',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      fontFamily: Fonts.ProductSans
    },
  });
  
  export default ScarletScreen;