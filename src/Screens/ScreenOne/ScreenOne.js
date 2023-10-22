import { StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { screenThreeRoute } from '../../constants';
import ThemeContext from '../../Theme/ThemeContext';

export class ScreenOne extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <ThemeContext.Consumer>
        {({theme, toggleTheme}) => (
          <View
            style={{paddingTop: 0, flex: 1, backgroundColor: theme.background}}>
            <TouchableOpacity
              style={{height: 40, backgroundColor: 'teal'}}
              onPress={() => {
                navigation.navigate(screenThreeRoute);
              }}
            />
            <Text>ScreenOne</Text>
            <TouchableOpacity
              style={{height: 40, backgroundColor: 'teal'}}
              onPress={() => {
                toggleTheme();
              }}
            />
          </View>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default ScreenOne;