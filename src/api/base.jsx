import request from 'axios';
import { baseUrl } from '../constants/apiConstants';

export async function post(url, data = null) {
  const uri = `${url}`
  const result = await request({
    url: uri,
    method: "POST",
    data: data,
  });
  return result
}

export async function get(url, data = null) {
  const uri = `${url}`

  const result = await request({
    url: uri,
    method: method,
    data: data,
  });
}
