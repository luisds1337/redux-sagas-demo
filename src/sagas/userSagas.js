import { takeLatest, put, delay } from "redux-saga/effects";
import { loginSuccess, loginFailure, LOGIN_REQUEST } from "../actions/userActions";
import api from "../api";

// Worker saga
function* login(action) {
  try {
    // Extract the login credentials from the action payload
    const { username, password } = action.payload;

    yield delay(2000);

    // Call the API to perform the login
    const { data } = api.loginUser(username, password)

    // Dispatch the login success action
    yield put(loginSuccess(data));

  } catch (error) {
    // Dispatch the login failure action
    yield put(loginFailure(error.message));
  }
}

// Watcher saga
export function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}
