// sagas/index.js
import { all } from 'redux-saga/effects';
import { fetchDataSaga } from './saga';

function* rootSaga() {
  yield all([
    fetchDataSaga(),
  ]);
}

export default rootSaga;
