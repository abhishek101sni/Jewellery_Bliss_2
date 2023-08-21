import { takeEvery, put, all } from 'redux-saga/effects'
import { SET_USER_DATA, USER_LIST } from './constants';

function* userList() {
    const url = "https://jwell-bliss-test-dev.cyclic.app/api/products/"
    let data = yield fetch(url);
    data = yield data.json();
    yield put({ type: SET_USER_DATA, data })
    // console.log(`saga function called`,data);
}

export function* watchFetchUser() {
    yield takeEvery(USER_LIST, userList)
}

export default function* rootSaga() {
    yield all([watchFetchUser])
}