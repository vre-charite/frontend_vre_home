import axios from 'axios';

let kongAPI = 'http://10.3.7.220/vre/api/vre/portal';
let serverBase = 'http://10.3.7.220/vre';
if (process.env.NEXT_PUBLIC_APP_ENV === 'staging') {
  kongAPI = 'https://vre-staging.indocresearch.org/vre/api/vre/portal';
  serverBase = 'https://vre-staging.indocresearch.org/vre';
}
if (process.env.NEXT_PUBLIC_APP_ENV === 'charite') {
  kongAPI = 'https://vre.charite.de/vre/api/vre/portal';
  serverBase = 'https://vre.charite.de/vre';
}
const serverAxios = axios.create({
  baseURL: kongAPI,
});
const resourceAxios = axios.create({
  baseURL: serverBase,
});

export { serverAxios, resourceAxios };
