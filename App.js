import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import ScreensContainer from './src/Screens';
import ThemeProvider from './src/Theme/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <ScreensContainer />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
