import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import ScreensContainer from './src/Screens';

const App = () => {
  return (
    <Provider store={store}>
      <ScreensContainer/>
    </Provider>
  );
};

export default App;
