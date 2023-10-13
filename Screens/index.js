import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { screenOneRoute, screenTwoRoute } from '../constants';
import ScreensList from './Navigation/Screens-list';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'teal',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerTitleStyle: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'lavender',
  },
});

const ScreensContainer = () => {
  const screenOptions = {
    headerStyle: styles.headerStyle,
    headerTitleAlign: 'center',
    headerTitleStyle: styles.headerTitleStyle,
    headerMode: 'float',
    headerBackTitleVisible: false,
    headerBackAllowFontScaling: false,
    headerTintColor: 'lavender',
  };

  const renderScreens = ScreensList.map((screen, index) => (
    <Stack.Screen
      key={index}
      name={screen?.name}
      component={screen?.component}
      options={{
        headerShown: screen?.showHeader,
        title: screen?.title,
      }}
    />
  ));

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={screenOneRoute} screenOptions={screenOptions}>
        {renderScreens}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default memo(ScreensContainer);
