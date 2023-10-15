import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabScreensList} from '../Screens-list';
import TabBar from './TabBar';
import headerStyles from '../styles/headerStyles';

const Tab = createBottomTabNavigator();

const TabScreen = () => {
  const screenOptions = {
    headerStyle: headerStyles.headerStyle,
    headerTitleAlign: 'center',
    headerTitleStyle: headerStyles.headerTitleStyle,
    headerMode: 'float',
    headerBackTitleVisible: false,
    headerBackAllowFontScaling: false,
    headerTintColor: 'lavender',
  };

  const renderTabs = TabScreensList?.map((screen, index) => (
    <Tab.Screen
      name={screen?.name}
      component={screen?.component}
      key={index}
      options={{
        headerShown: screen?.showHeader,
        title: screen?.title,
      }}
    />
  ));
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBar={params => <TabBar params={params} />}>
      {renderTabs}
    </Tab.Navigator>
  );
};

export default TabScreen;

const styles = StyleSheet.create({});
