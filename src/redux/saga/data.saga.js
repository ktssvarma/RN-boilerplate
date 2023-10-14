// sagas/dataSaga.js
import { put, takeEvery, call } from 'redux-saga/effects';

// Saga for fetching data
function* fetchDataSaga() {
  yield takeEvery('FETCH_DATA_REQUEST', function* () {
    try {
      // Simulate an API call
      const data = yield call(fetchDataFromApi);
      yield put({ type: 'FETCH_DATA_SUCCESS', payload: data });
    } catch (error) {
      yield put({ type: 'FETCH_DATA_FAILURE', payload: error.message });
    }
  });
}

// Simulated API call function
function fetchDataFromApi() {
  return new Promise((resolve, reject) => {
    // Simulate API request
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve(['Item 1', 'Item 2', 'Item 3']);
      } else {
        reject(new Error('API request failed'));
      }
    }, 1000);
  });
}

export { fetchDataSaga };
