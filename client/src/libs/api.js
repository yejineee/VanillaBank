/* eslint-disable no-undef */
import axios from 'Config/axios';
import url from './url';

export default {
  async login() {
    return axios.post(
      url.LOGIN,
      process.env.NODE_ENV === 'production'
        ? LOGIN_PROD_DEFAULT
        : LOGIN_DEV_DEFAULT,
    );
  },
};
