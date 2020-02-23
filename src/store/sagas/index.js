import { all } from 'redux-saga/effects';

import auth from './auth';

function* rootSagas() {
  yield all([
    auth(),
  ]);
}

export default rootSagas;
