// Copyright 2022 Indoc Research
// 
// Licensed under the EUPL, Version 1.2 or – as soon they
// will be approved by the European Commission - subsequent
// versions of the EUPL (the "Licence");
// You may not use this work except in compliance with the
// Licence.
// You may obtain a copy of the Licence at:
// 
// https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
// 
// Unless required by applicable law or agreed to in
// writing, software distributed under the Licence is
// distributed on an "AS IS" basis,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
// express or implied.
// See the Licence for the specific language governing
// permissions and limitations under the Licence.
// 

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
