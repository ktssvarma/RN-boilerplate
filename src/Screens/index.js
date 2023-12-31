import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { tabScreenRoute } from '../constants';
import {ScreensList} from './Navigation/Screens-list';
import headerStyles from './Navigation/styles/headerStyles';
import { View } from 'react-native';

const Stack = createStackNavigator();

const ScreensContainer = () => {
  const screenOptions = {
    headerStyle: headerStyles.headerStyle,
    headerTitleAlign: 'center',
    headerTitleStyle: headerStyles.headerTitleStyle,
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
    <View style={{flex: 1, backgroundColor: 'blue'}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={tabScreenRoute}
          screenOptions={screenOptions}>
          {renderScreens}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default memo(ScreensContainer);
