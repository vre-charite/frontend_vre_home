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

import styles from './HomeBanner.module.scss';
import Link from 'next/link';
export const HomeBanner = () => {
  return (
    <div className={styles.banner_wrapper}>
      <img
        className={styles.banner_wrapper_bg}
        src="/vre/pages/img/home-banner-background.jpg"
      />
      <img
        className={styles.banner_gradient_img}
        src="/vre/pages/img/home-banner-bg-gradient.png"
      />
      <div className={styles.banner_content}>
        <div className={styles.banner_block}>
          <h2>Virtual Research Environment</h2>
          <p>
            Making it easier for researchers to manage, share, and process
            complex research data.
          </p>
          <Link href="/pages/about">
            <div className={styles.banner_learn_more}>Learn more</div>
          </Link>
          <div className={styles.banner_gdpr}>
            <img src="/vre/pages/img/GDPR-ready-Gold.svg" />
            <div className={styles.banner_gdpr_text}>
              <h4>GDPR READY</h4>
              <p>
                The VRE has undergone a successful{' '}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://vre.charite.de/xwiki/wiki/vrepublic/view/Main/Privacy%20and%20Data%20Governance/GDPR%20Readiness%20Audit/"
                  style={{ fontStyle: 'italic', textDecoration: 'underline' }}
                >
                  {' '}
                  GDPR Service Readiness audit.
                </a>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
