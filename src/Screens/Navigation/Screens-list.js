import {screenOneRoute, screenThreeRoute, screenTwoRoute, tabScreenRoute} from '../../constants';
import ScreenOne from '../ScreenOne/ScreenOne';
import ScreenThree from '../ScreenThree/ScreenThree';
import ScreenTwo from '../ScreenTwo/ScreenTwo';
import TabScreen from './TabScreen/TabScreen';

const ScreensList = [
  {
    name: tabScreenRoute,
    component: TabScreen,
    showHeader: false,
    title: 'Tab Screen',
  },
  {
    name: screenOneRoute,
    component: ScreenOne,
    showHeader: true,
    title: 'Screen One',
  },
  {
    name: screenTwoRoute,
    component: ScreenTwo,
    showHeader: true,
    title: 'Screen Two',
  },
  {
    name: screenThreeRoute,
    component: ScreenThree,
    showHeader: true,
    title: 'Screen Three',
  },
];

const TabScreensList = [
  {
    name: screenOneRoute,
    component: ScreenOne,
    showHeader: true,
    title: 'Screen One',
  },
  {
    name: screenTwoRoute,
    component: ScreenTwo,
    showHeader: true,
    title: 'Screen Two',
  },
];

export {ScreensList, TabScreensList};
