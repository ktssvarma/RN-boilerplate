import {screenOneRoute, screenTwoRoute} from '../../constants';
import ScreenOne from '../ScreenOne/ScreenOne';
import ScreenTwo from '../ScreenTwo/ScreenTwo';

const ScreensList = [
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

export default ScreensList;
