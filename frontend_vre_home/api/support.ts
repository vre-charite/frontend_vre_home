import { serverAxios } from './config';
import { ContactUsPara } from './types';
function contactUsApi(data: ContactUsPara) {
  return serverAxios({
    url: '/v1/contact',
    method: 'post',
    data,
    timeout: 100 * 1000,
  });
}
export { contactUsApi };
