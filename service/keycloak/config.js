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

import Keycloak from 'keycloak-js'

const getUrl = (environment) => {
  switch (environment) {
    case 'local': {
      return "http://10.3.7.220/vre/auth/"; // the local will also connect the dev keycloak
    }
    case 'staging': {
      return "https://vre-staging.indocresearch.org/vre/auth"
    }
    default: {
      return "http://10.3.7.220/vre/auth/";
    }
  }
}

const keycloakConfig = {
  /*   "realm": "vre",
    "url": "http://10.3.7.220/vre/auth/",
    "ssl-required": "external",
    "resource": "react-app",
    "public-client": true,
    "confidential-port": 0,
    clientId:'react-app' */
  "realm": "vre",
  "url": process.env.NODE_ENV === 'development' ? getUrl(process.env["REACT_APP_BASE_URL"]) : "/vre/auth/",
  "ssl-required": "external",
  "resource": "react-app",
  "public-client": true,
  "verify-token-audience": true,
  "use-resource-role-mappings": true,
  "confidential-port": 0,
  clientId: 'react-app'
}



const keycloak = new Keycloak(keycloakConfig);
export { keycloak };