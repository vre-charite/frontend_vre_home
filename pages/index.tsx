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

import type { NextPage } from 'next';
import styles from './index.module.scss';
import { Header } from '../components/Common/Header/Header';
import { HomeBanner } from '../components/Home/HomeBanner/HomeBanner';
import { Footer } from '../components/Common/Footer/Footer';
import { Features } from '../components/Home/Features/Features';
import { useEffect, useState } from 'react';
import { notification, Button } from 'antd';
const notifyKeyVal = `open${Date.now()}`;
const Home: NextPage = () => {
  const closeNotification = () => {
    notification.close(notifyKeyVal);
    window.localStorage.setItem('cookies_notified', 'true');
  };
  useEffect(() => {
    const cookiesNotified = localStorage.getItem('cookies_notified');
    if (!cookiesNotified) {
      notification.open({
        message: 'Cookies on this site',
        description: (
          <>
            <p>
              We use cookies to make your experience better by keeping your
              session information and login status. By using the VRE, you accept
              our use of cookies in accordance with our{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://vre.charite.de/xwiki/wiki/vrepublic/view/Main/Privacy%20and%20Data%20Governance/Privacy%20Policy/"
              >
                Privacy Policy
              </a>
            </p>
          </>
        ),
        key: notifyKeyVal,
        btn: (
          <Button
            type="primary"
            size="small"
            onClick={() => {
              closeNotification();
            }}
          >
            OK
          </Button>
        ),
        duration: 0,
        onClose: () => {
          closeNotification();
        },
      });
    }
    return () => {
      notification.close(notifyKeyVal);
    };
  }, []);
  return (
    <div className={styles['home-page']}>
      <Header />
      <HomeBanner />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
