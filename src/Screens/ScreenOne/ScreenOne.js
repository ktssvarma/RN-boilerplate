import { StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { screenThreeRoute } from '../../constants';

export class ScreenOne extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{paddingTop: 0}}>
        <TouchableOpacity
          style={{height: 40, backgroundColor: 'teal'}}
          onPress={() => {
            navigation.navigate(screenThreeRoute);
          }}
        />
        <Text>ScreenOne</Text>
      </View>
    );
  }
}

export default ScreenOne;