import { all } from 'redux-saga/effects';
import lobbySaga from './lobbySaga';

export default function* rootSaga() {
    yield all([
      lobbySaga(),
    ])
  }
