import axios from 'axios';

const service = {
  getPosts: () => axios.get('/post')
};

export default service;

