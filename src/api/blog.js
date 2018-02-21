import {fetchGet, fetchPost} from './http';

let base = process.env.API_ROOT;

export const authRequestLogin = params => {
  return fetchPost(`${base}/api/v1/api-token-auth/`, params).then(res => res.data);
};

export const authRefreshToken = params => {
  return fetchPost(`${base}/api/v1/api-token-refresh/`, params).then(res => res.data)
};

/**
 * @param title
 * @returns {Promise<any>}
 */
export const fetchBlogPost = title => {
  return fetchGet(`${base}/api/v1/blog-post/${title}`).then(res => res.data)
};

/**
 * @param params
 * @returns {Promise<any>}
 */
export const fetchPostSummaryList = params => {
  return fetchGet(`${base}/api/v1/blog-posts`, params).then(res => res.data)
};

/**
 * @param params
 * @returns {Promise<any>}
 */
export const fetchPostArchive = params => {
  return fetchGet(`${base}/api/v1/archive`, params).then(res => res.data)
};

/**
 * @param params
 * @returns {Promise<any>}
 */
export const fetchPostCategroy = params => {
  return fetchGet(`${base}/api/v1/category`, params).then(res => res.data)
};

/**
 * @param params
 * @returns {Promise<any>}
 */
export const fetchPostTags = params => {
  return fetchGet(`${base}/api/v1/tags`, params).then(res => res.data)
};

/**
 * @param params
 * @returns {Promise<any>}
 */
export const searchBlogPost = params => {
  return fetchPost(`${base}/api/v1/blog-posts/search`, params).then(res => res.data)
};
