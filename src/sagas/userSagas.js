import { takeLatest, put, delay, call, takeEvery } from "redux-saga/effects";
import { loginSuccess, loginFailure, LOGIN_REQUEST } from "../actions/userActions";
import api from "../api";

// Worker saga
function* login(action) {
  try {
    // Extract the login credentials from the action payload
    const { username, password } = action.payload;

    yield delay(2000);

    const response = yield call(api.loginUser, username, password);    

    // Dispatch the login success action
    yield put(loginSuccess(response));

  } catch (error) {
    // Dispatch the login failure action
    yield put(loginFailure(error.message));
  }
}

// Watcher saga
export function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}
