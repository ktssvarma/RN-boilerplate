import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import tabStyles from '../styles/TabStyles';

const TabBar = ({params}) => {
  const {
    state: {routes = [], index = 0} = {},
    navigation: {navigate = {}} = {},
  } = params;
  return (
    <View style={tabStyles.tabStyle}>
      {routes?.map((tab, key) => {
        const isActive = key === index;
        return (
          <TouchableOpacity
            key={key}
            onPress={() => {
              navigate(tab?.name);
            }}>
            <Text
              style={{
                ...tabStyles.tabTextStyle,
                color: isActive ? '#FCE09B' : '#B5CB99',
              }}>
              TabBar
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default memo(TabBar);

