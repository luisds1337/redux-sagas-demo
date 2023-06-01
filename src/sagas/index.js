import { all } from "redux-saga/effects";

// Import your sagas here
// Example:
import { watchUserActions } from "./userSagas";

// Combine sagas
export default function* rootSaga() {
  yield all([
    // Add your sagas here
    // Example:
    watchUserActions(),
  ]);
}
