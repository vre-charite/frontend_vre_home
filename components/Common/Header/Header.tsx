import styles from './Header.module.scss';
import Link from 'next/link';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useKeycloak } from '@react-keycloak/ssr';
export const Header = (props: any) => {
  const { keycloak, initialized } = useKeycloak();
  return (
    <header className={styles.home_header_wrapper}>
      <div className={styles.home_header_content}>
        <Link href="/">
          <img
            className={styles.home_logo}
            src="/vre/pages/img/logo.png"
            alt="logo"
            width="139"
            height="36"
          />
        </Link>
        <ul className={styles.header_right_navs}>
          <li>
            <Link href="/pages/about">About</Link>
          </li>
          <li>
            <Link href="/pages/getting_started">Getting Started</Link>
          </li>
          <li>
            <Link href="/pages/resources">Resources</Link>
          </li>
          <li>
            <Link href="/pages/support">Support</Link>
          </li>
          <li>
            <Button
              className={styles.nav_login_btn}
              icon={<UserOutlined />}
              onClick={(e) => {
                (keycloak as any).login({ redirectUri: '/vre/landing' });
              }}
              type="primary"
            >
              Login
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};
