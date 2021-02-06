import axios from 'Config/axios';
import url from './url';

export default {
  async login() {
    // eslint-disable-next-line no-undef
    return axios.post(url.LOGIN, LOGIN_DEV_DEFAULT);
  },
};
