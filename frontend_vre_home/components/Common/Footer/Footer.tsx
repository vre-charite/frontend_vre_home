import styles from './Footer.module.scss';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { TermsOfUseModal } from '../../Common/TermsOfUseModal/TermsOfUseModal';
import { ReleaseNoteModal } from '../ReleaseNoteModal/ReleaseNoteModal';
import { getReleaseNotes } from '../../../api/release';
import { Button } from 'antd';
export const Footer = (props: any) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [releaseVisible, setReleaseVisible] = useState(false);
  const [versionsArr, setVersionArr] = useState<any[]>([]);
  const [version, setVersion] = useState<any>('0.0.0');
  useEffect(() => {
    async function init() {
      try {
        const res = await getReleaseNotes();
        const versions = (res as any).data?.versions;
        const currentVersion =
          versions && versions[0] ? versions[0].version : null;
        setVersionArr(versions);
        setVersion(currentVersion);
      } catch (err) {}
    }
    init();
  }, []);
  return (
    <>
      <div className={styles.home_footer_wrapper}>
        <div className={styles.home_footer_content}>
          <div className={styles.home_footer_logos}>
            <Link href="/">
              <img
                className={styles.home_logo}
                src="/vre/pages/img/logo.png"
                alt="logo"
                width="139"
                height="36"
              />
            </Link>
            <p>
              Making it easier for researchers to manage, share, and process
              complex research data.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.bihealth.org/en/"
            >
              <img
                className={styles.link_logo}
                src="/vre/pages/img/BIH-logo-white.svg"
                alt="logo"
                width="73"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.charite.de/en/"
            >
              <img
                className={styles.link_logo}
                src="/vre/pages/img/Charite-logo-white.svg"
                alt="logo"
                width="67"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://indocresearch.org/"
            >
              <img
                className={styles.link_logo}
                src="/vre/pages/img/Indoc-logo-white.svg"
                alt="logo"
                width="61"
              />
            </a>
          </div>
          <div className={styles.home_footer_links}>
            <ul>
              <li>
                <Link href="/pages/support">Contact Us</Link>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://vre.charite.de/xwiki/wiki/vrepublic/view/Main/"
                >
                  Documentation
                </a>
              </li>

              <li>
                <Link href="/pages/about#imprint">Imprint</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.home_footer_note}>
          <div className={styles.home_footer_note_content}>
            <div className={styles.home_footer_left}>
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://vre.charite.de/xwiki/wiki/vrepublic/view/Main/Privacy%20and%20Data%20Governance/Privacy%20Policy/"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://vre.charite.de/xwiki/wiki/vrepublic/view/Main/Privacy%20and%20Data%20Governance/General%20Terms%20of%20Use/"
                  >
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.home_footer_right}>
              <a
                onClick={() => {
                  setReleaseVisible(true);
                }}
              >
                Version {version}
              </a>{' '}
              / <p>Copyright ©2021, Indoc Research. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
      <ReleaseNoteModal
        setVisible={setReleaseVisible}
        visible={releaseVisible}
        versionsArr={versionsArr}
        version={version}
      />
      <TermsOfUseModal
        handleOk={() => {
          setModalVisibility(false);
        }}
        handleCancel={() => {
          setModalVisibility(false);
        }}
        visible={modalVisibility}
      />
    </>
  );
};
