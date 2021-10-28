import styles from './Features.module.scss';
import Link from 'next/link';
import { CaretRightOutlined, ReadOutlined } from '@ant-design/icons';
export const Features = () => {
  return (
    <div className={styles.features_wrapper}>
      <img src="/vre/pages/img/home-features-bg.svg" />
      <div className={styles.features_content}>
        <h3>Computing​</h3>
        <p>
          The VRE offers a powerful suite of workbench tools, high-performance
          computing services, and platform integrations into a central portal to
          provide researchers with the resources they need to securely collect,
          analyse, catalogue, and share their research data. ​
        </p>
        <p>
          <Link href="/pages/resources">Learn more</Link> about the VRE
          Workbench Tools and Integrations​
        </p>
        <h3>Collaboration</h3>
        <p>
          The VRE is a project of the Translation Hub Digital Medicine funded by
          the Berlin Institute of Health and developed in collaboration with
          Business Division IT and industry partner Indoc Research. The VRE
          supports interoperability with large scale EU projects and
          international data commons.​​
        </p>
        <p>
          The VRE is a portable solution. Please{' '}
          <Link href="/pages/support">contact us</Link> to find out more about
          getting the VRE established at your institution. ​
        </p>
        <ul className={styles.collaborators_list}>
          <li>
            <div className={styles.collaborator_item}>
              <img src="/vre/pages/img/TVB-logo.png" style={{ width: 210 }} />
            </div>
            <div className={styles.collaborators_visit}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://virtualbraincloud-2020.eu/tvb-cloud-main.html"
              >
                <img src="/vre/pages/img/visit.svg" />
                <span>Visit</span>
              </a>
            </div>
          </li>
          <li>
            <div className={styles.collaborator_item}>
              <img
                src="/vre/pages/img/Human-Brain-Project-logo.png"
                style={{ width: 200 }}
              />
            </div>

            <div className={styles.collaborators_visit}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.humanbrainproject.eu/en/"
              >
                <img src="/vre/pages/img/visit.svg" />
                <span>Visit</span>
              </a>
            </div>
          </li>
          <li>
            <div className={styles.collaborator_item}>
              <img
                src="/vre/pages/img/EBRAINS-logo.png"
                style={{ width: 165 }}
              />
            </div>
            <div className={styles.collaborators_visit}>
              <a target="_blank" rel="noreferrer" href="https://ebrains.eu/">
                <img src="/vre/pages/img/visit.svg" />
                <span>Visit</span>
              </a>
            </div>
          </li>
          <li>
            <div className={styles.collaborator_item}>
              <img src="/vre/pages/img/EOSC-logo.png" style={{ width: 164 }} />
            </div>
            <div className={styles.collaborators_visit}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://eosc-portal.eu/"
              >
                <img src="/vre/pages/img/visit.svg" />
                <span>Visit</span>
              </a>
            </div>
          </li>
          <li>
            <div className={styles.collaborator_item}>
              <img src="/vre/pages/img/NFDI-Logo.svg" style={{ width: 164 }} />
            </div>
            <div className={styles.collaborators_visit}>
              <a target="_blank" rel="noreferrer" href="https://www.nfdi.de/">
                <img src="/vre/pages/img/visit.svg" />
                <span>Visit</span>
              </a>
            </div>
          </li>
          <li>
            <div className={styles.collaborator_item}>
              <img
                src="/vre/pages/img/NFDI-Neuroscience-Logo.png"
                style={{ width: 164 }}
              />
            </div>
            <div className={styles.collaborators_visit}>
              <a target="_blank" rel="noreferrer" href="https://nfdi-neuro.de/">
                <img src="/vre/pages/img/visit.svg" />
                <span>Visit</span>
              </a>
            </div>
          </li>
        </ul>
        <h3>Community</h3>
        <p>
          The VRE is a community development project. We follow the FAIR guiding
          principles for scientific data management - Findability Accessibility
          Interoperability Reusability.
        </p>
        <p>
          ​​Please contact us to learn more about how to join the VRE community
          and participate in the development. We want to ensure that this
          development is open and accessible to all clinicians and scientists at
          Charité, BIH, and beyond, so we can solve today’s pressing medical
          challenges together!
        </p>
      </div>
      <div className={styles.bottom_links}>
        <Link href="/pages/getting_started">
          <div className={styles.link_button}>
            <CaretRightOutlined />
            <span>Get Started</span>
          </div>
        </Link>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://vre.charite.de/xwiki/wiki/vrepublic/view/Main/user_guide/"
        >
          <div className={styles.link_button}>
            <ReadOutlined />
            <span>User Guide</span>
          </div>
        </a>
      </div>
    </div>
  );
};
