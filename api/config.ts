import axios from 'axios';

let kongAPI = 'http://10.3.7.220/vre/api/vre/portal';
if (process.env.NEXT_PUBLIC_APP_ENV === 'staging') {
  kongAPI = 'https://vre-staging.indocresearch.org/vre/api/vre/portal';
}
if (process.env.NEXT_PUBLIC_APP_ENV === 'charite') {
  kongAPI = 'https://vre.charite.de/vre/api/vre/portal';
}
const serverAxios = axios.create({
  baseURL: kongAPI,
});
export { serverAxios };
