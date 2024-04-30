import request from '@/utils/request';

export function getToken(query) {
  return request({
    url: '/platform/auth',
    method: 'post',
    params: query
  });
}