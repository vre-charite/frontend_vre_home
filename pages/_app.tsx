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

import '../styles/globals.scss';
import cookie from 'cookie';
import type { AppProps, AppContext } from 'next/app';
import { SSRKeycloakProvider, SSRCookies } from '@react-keycloak/ssr';
import type { IncomingMessage } from 'http';
const getUrl = (environment: string | undefined) => {
  switch (environment) {
    case 'local': {
      return 'http://10.3.7.220/vre/auth/'; // the local will also connect the dev keycloak
    }
    case 'staging': {
      return 'https://vre-staging.indocresearch.org/vre/auth';
    }
    default: {
      return 'http://10.3.7.220/vre/auth/';
    }
  }
};

const keycloakConfig = {
  realm: 'vre',
  url:
    process.env.NODE_ENV === 'development'
      ? getUrl(process.env['REACT_APP_BASE_URL'])
      : '/vre/auth/',
  'ssl-required': 'external',
  resource: 'react-app',
  'public-client': true,
  'verify-token-audience': true,
  'use-resource-role-mappings': true,
  'confidential-port': 0,
  clientId: 'react-app',
};

interface InitialProps {
  cookies: unknown;
}

function MyApp({ Component, pageProps, cookies }: AppProps & InitialProps) {
  return (
    <SSRKeycloakProvider
      keycloakConfig={keycloakConfig}
      persistor={SSRCookies(cookies)}
      initOptions={{
        checkLoginIframe: false,
      }}
    >
      <Component {...pageProps} />
    </SSRKeycloakProvider>
  );
}
function parseCookies(req?: IncomingMessage) {
  if (!req || !req.headers) {
    return {};
  }
  console.log('parseCookie', req.headers.cookie);
  return cookie.parse(req.headers.cookie || '');
}

MyApp.getInitialProps = async (context: AppContext) => {
  // Extract cookies from AppContext
  console.log('context', context.ctx?.req?.headers);
  return {
    cookies: parseCookies(context?.ctx?.req),
  };
};
export default MyApp;
