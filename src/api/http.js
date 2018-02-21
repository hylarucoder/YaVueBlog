import axios from 'axios';
import store from '../store';
import router from '../router';

export function getAuthorization() {
  let token = {Authorization: `JWT ${store.state.access_token}`};
  // console.log(token);
  return token
};
// axios 配置
axios.defaults.timeout = 20000;

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.access_token) {
      config.headers.Authorization = `JWT ${store.state.access_token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // console.log(error);
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          router.replace({
            path: 'login',
            query: {redirect: router.currentRoute.fullPath}
          })
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response.status)
  });

export default axios;

/**
 * fetch 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function fetchGet(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function fetchPost(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
  })
}

/**
 * patch 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
  })
}

/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
  })
}

/**
 * post 请求方法
 * @param url
 * @param filename
 * @param data
 * @returns {Promise}
 */
export function downloadPost(url, data = {}, filename) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: url,
      responseType: 'arraybuffer',
      data: data
    })
      .then(function (response) {
        let blob = new Blob([response.data], {
          type: 'application/x-msdownload'
        });
        let link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        if (filename) {
          link.download = filename + `.xlsx`
        } else {
          link.download = 'report.xlsx'
        }

        link.click()
      });
    axios.post(url, data)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
  })
}
