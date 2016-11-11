import { post } from './base';
import sha256 from 'crypto-js/sha256';

export async function authLogin(name, pwd) {
  const data = {
    username: name,
    password: sha256(pwd).toString(),
  }
  const result = await post('/auth', data);
  return result
}
