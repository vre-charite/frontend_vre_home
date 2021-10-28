import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { SSRKeycloakProvider, SSRCookies } from '@react-keycloak/ssr';

const getUrl = (environment:string | undefined) => {
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
  /*   "realm": "vre",
    "url": "http://10.3.7.220/vre/auth/",
    "ssl-required": "external",
    "resource": "react-app",
    "public-client": true,
    "confidential-port": 0,
    clientId:'react-app' */
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
    >
      <Component {...pageProps} />
    </SSRKeycloakProvider>
  );
}
export default MyApp;
