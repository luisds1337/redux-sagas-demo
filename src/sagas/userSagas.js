import { takeEvery, put, delay } from "redux-saga/effects";
import { EDIT_USER, SAVE_USER } from "../actions/userActions";

// Mock asynchronous task
function* saveUserAsync(userData) {
  // Simulate API call or async operation
  yield delay(2000); // Delay for 2 seconds

  // Dispatch success action
  yield put({ type: SAVE_USER, payload: userData });
}

// Watcher saga
export function* watchUserActions() {
  yield takeEvery(EDIT_USER, function* (action) {
    // Retrieve user data from the action payload
    const userData = action.payload;

    // Dispatch an async action to save the user data
    yield saveUserAsync(userData);
  });
}
