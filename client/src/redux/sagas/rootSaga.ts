import { all } from 'redux-saga/effects';
import testSaga from './testSaga';
import lobbySaga from './lobbySaga';

export default function* rootSaga() {
    yield all([
      testSaga(),
      lobbySaga(),
    ])
  }
