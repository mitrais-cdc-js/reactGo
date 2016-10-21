import { postService } from 'services';
import * as types from 'types';

const fetchData = (params, store) => {
  return postService.getPosts()
          .then(res => {
            store.dispatch({type: types.GET_POSTS_SUCCESS, data: res.data});
            return res.data;
          });
};

export default fetchData;
