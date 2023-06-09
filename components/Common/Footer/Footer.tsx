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
              / <p>
                VRE is a product developed jointly by{' '}
                <a
                  href="https://www.charite.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Charité
                </a>
                /
                <a
                  href="https://www.bihealth.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BIH
                </a>{' '}
                and{' '}
                <a
                  href="https://www.indocresearch.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Indoc Research
                </a>{' '}
                and powered by{' '}
                <a
                  href="https://github.com/PilotDataPlatform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Indoc Pilot
                </a>
              </p>
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
