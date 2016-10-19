/* eslint consistent-return: 0, no-else-return: 0*/
import { polyfill } from 'es6-promise';
import request from 'axios';
import * as types from 'types';

polyfill();

/*
 * Utility function to make AJAX requests using isomorphic fetch.
 * You can also use jquery's $.ajax({}) if you do not want to use the
 * /fetch API.
 * Note: this function relies on an external variable `API_ENDPOINT`
 *        and isn't a pure function
 * @param Object Data you wish to pass to the server
 * @param String HTTP method, e.g. post, get, put, delete
 * @param String endpoint
 * @return Promise
 */
export function makePostRequest(method, id, data, api = '/post') {
  return request[method](api + (id ? ('/' + id) : ''), data);
}

/*
 * @param data
 * @return a simple JS object
 */

export function createPostSuccess(data) {
  return {
    type: types.CREATE_POST_SUCCESS,
    data
  };
}

export function createPostFailure(data) {
  return {
    type: types.CREATE_POST_FAILURE,
    error: data.error
  };
}

export function createPost(title, content) {
  return (dispatch) => {
    // If the text box is empty
    if (content.trim().length <= 0 ||
        title.trim().length <= 0) return;
    const data = { title, content };

    return makePostRequest('post', false, data)
      .then(res => {
        if (res.status === 200) {
          const postedData = Object.assign({ id: res.data.id}, data);
          return dispatch(createPostSuccess(postedData));
        }
      })
      .catch((err) => {
        console.error(err);
        return dispatch(createPostFailure({
            error: 'Oops! Something went wrong and we couldn\'t create your post'
        }));
      });
  };
}