import { all } from "redux-saga/effects";

// Import your sagas here
import { watchLogin } from "./userSagas";

// Combine sagas
export default function* rootSaga() {
  yield all([
    // Add your sagas here
    watchLogin()
  ]);
}
