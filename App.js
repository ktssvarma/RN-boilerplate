import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import { Text } from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <Text>Redux Working</Text>
    </Provider>
  );
};

export default App;
