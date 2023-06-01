import { takeLatest, put, call } from "redux-saga/effects";
import { loginSuccess, loginFailure, LOGIN_REQUEST } from "../../actions/userActions";
import api from "../../api";
import { login, watchLogin } from "../userSagas";

const user = {
    username: 'luis@boats.com',
    password: '123456'
}

describe("login Saga", () => {
  it("should handle successful login", () => {
    const action = { payload: { username: user.username, password: user.password } };
    const generator = login(action);

    // Simulate the API call
    expect(generator.next().value).toEqual(call(api.loginUser, user.username, user.password));

    // Simulate the successful response
    const response = { id: 1, username: user.username };
    expect(generator.next(response).value).toEqual(put(loginSuccess(response)));

    // Ensure that the generator is complete
    expect(generator.next().done).toBe(true);
  });

  it("should handle login failure", () => {
    const action = { payload: { username: user.username, password: user.password } };
    const generator = login(action);

    // Simulate the API call
    expect(generator.next().value).toEqual(call(api.loginUser, user.username, user.password));

    // Simulate the error response
    const error = new Error("Login failed");
    expect(generator.throw(error).value).toEqual(put(loginFailure(error.message)));

    // Ensure that the generator is complete
    expect(generator.next().done).toBe(true);
  });
});

describe("watchLogin Saga", () => {
  it("should watch for LOGIN_REQUEST action and call login saga", () => {
    const generator = watchLogin();

    // Ensure that the watcher is listening for the LOGIN_REQUEST action
    expect(generator.next().value).toEqual(takeLatest(LOGIN_REQUEST, login));

    // Ensure that the generator is complete
    expect(generator.next().done).toBe(true);
  });
});
