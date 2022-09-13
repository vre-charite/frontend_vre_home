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

import styles from './Header.module.scss';
import Link from 'next/link';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useKeycloak } from '@react-keycloak/ssr';
import { matchPath } from 'react-router';
import { useRouter } from 'next/router';
import { KeycloakInstance } from 'keycloak-js';

export const Header = (props: any) => {
  const { keycloak, initialized } = useKeycloak<KeycloakInstance>();
  const router = useRouter();
  const isMatchPath = (path: string) => {
    console.log(router.pathname, path);
    const match = matchPath(router.pathname, {
      path,
      exact: true,
      strict: false,
    });
    return match;
  };
  if (!initialized) {
    return null;
  }
  return (
    <header className={styles.home_header_wrapper}>
      <div className={styles.home_header_content}>
        <Link href="/">
          <img
            className={styles.home_logo}
            src="/vre/pages/img/logo.png"
            alt="logo"
            width="185"
            height="48"
          />
        </Link>
        <ul className={styles.header_right_navs}>
          <li>
            <Link href="/pages/about">
              <span
                className={isMatchPath('/pages/about') ? styles['on-page'] : ''}
              >
                About
              </span>
            </Link>
          </li>
          <li>
            <Link href="/pages/getting_started">
              <span
                className={
                  isMatchPath('/pages/getting_started') ? styles['on-page'] : ''
                }
              >
                Getting Started
              </span>
            </Link>
          </li>
          <li>
            <Link href="/pages/resources">
              <span
                className={
                  isMatchPath('/pages/resources') ? styles['on-page'] : ''
                }
              >
                Resources
              </span>
            </Link>
          </li>
          <li>
            <Link href="/pages/support">
              <span
                className={
                  isMatchPath('/pages/support') ? styles['on-page'] : ''
                }
              >
                Support
              </span>
            </Link>
          </li>
          <li>
            <Button
              id="auth_login_btn"
              className={styles.nav_login_btn}
              icon={<UserOutlined />}
              onClick={(e) => {
                (keycloak as any).login({ redirectUri: '/vre/landing' });
              }}
              type="primary"
            >
              <span>
                {keycloak?.authenticated
                  ? (keycloak.tokenParsed as any)?.preferred_username + ''
                  : 'Login'}
              </span>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};
