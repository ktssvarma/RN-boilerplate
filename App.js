import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import ScreensContainer from './Screens';

const App = () => {
  return (
    <Provider store={store}>
      <ScreensContainer/>
    </Provider>
  );
};

export default App;
