import { combineReducers } from 'redux';
import * as types from 'types';

const post = (
  state = {},
  action
) => {
  switch (action.type) {
    case types.CREATE_POST_SUCCESS:
      return {
        id: action.data.id,
        title: action.data.title,
        content: action.data.content
      };
    default:
      return state;
  }
};

const posts = (
  state = [],
  action
) => {
  switch (action.type) {
    case types.GET_POSTS_SUCCESS:
      if (action.data) return action.data;
      return state;
    case types.CREATE_POST_SUCCESS:
      return [...state, post(undefined, action)];
    case types.CREATE_POST_FAILURE:
      return state.filter(p => p.id !== action.id);
    case types.DESTROY_POST:
      return state.filter(p => p.id !== action.id);
    default:
      return state;
  }
};

const postReducer = combineReducers({
  posts
});

export default postReducer;
