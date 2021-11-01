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
