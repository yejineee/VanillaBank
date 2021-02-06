import axios from 'Config/axios';
import url from './url';

export default {
  async login() {
    return axios.post(url.LOGIN, {
      name: 'yejin',
      password: 'mypwd',
    });
  },
};
