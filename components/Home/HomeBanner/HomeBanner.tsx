import styles from './HomeBanner.module.scss';
import Link from 'next/link';
export const HomeBanner = () => {
  return (
    <div className={styles.banner_wrapper}>
      <img src="/vre/pages/img/home-banner-bg-gradient.png" />
      <div className={styles.banner_content}>
        <div className={styles.banner_block}>
          <h2>Virtual Research Environment</h2>
          <p>
            Making it easier for researchers to manage, share and process
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
                The VRE has undergone a successful GDPR Service Readiness Audit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
