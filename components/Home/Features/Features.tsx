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

import { useState, useEffect } from 'react'
import Link from 'next/link';
import {
  CaretRightOutlined,
  ReadOutlined,
  UserOutlined,
  ContainerOutlined,
  ClusterOutlined,
  DesktopOutlined,
  DatabaseOutlined,
  DashboardOutlined,
} from '@ant-design/icons';
import { message } from 'antd'

import styles from './Features.module.scss';
import { serverAxios as api } from '../../../api/config';
interface IResult {
  active_user: number,
  project: number,
  storage: number,
  vm: number,
  cores: number,
  ram: number,
  date: string,
}

// https://stackoverflow.com/questions/66007441/specify-axios-response-data-type
interface IResponse {
  result: IResult
}

export const Features = () => {
  const [ metrics, setMetrics ] = useState<IResult>();

  useEffect(() => {
    const getMetrics = async () => {
      try {
        const response = await api.get<IResponse>('/v1/stats');
        setMetrics(response.data.result);
      } catch (error) {
        message.error('Something went wrong while attempting to retrieve metrics data, please try again later');
      }
    }
    getMetrics();
  }, [])

  return (
    <>
      <div className={styles.features_wrapper}>
        <img src="/vre/pages/img/home-features-bg.svg" />
        <div className={styles.features_content}>
          <h3>Computing​</h3>
          <p>
            The VRE offers a powerful suite of workbench tools, high-performance
            computing services, and platform integrations into a central portal
            to provide researchers with the resources they need to securely
            collect, analyse, catalogue, and share their research data. ​
          </p>
          <p>
            <span style={{ textDecoration: 'underline' }}>
              <Link href="/pages/resources">Learn more</Link>
            </span>{' '}
            about the VRE Workbench Tools and Integrations​.
          </p>
          <h3>Collaboration</h3>
          <p>
            The VRE is a project of the Translation Hub Digital Medicine, funded
            by the Berlin Institute of Health, and developed in collaboration
            with Business Division IT and industry partner, Indoc Research. The
            VRE supports interoperability with large scale EU projects and
            international data commons.​​
          </p>
          <p>
            The VRE is a portable solution. Please{' '}
            <span style={{ textDecoration: 'underline' }}>
              <Link href="/pages/support">contact us</Link>
            </span>{' '}
            to find out more about getting the VRE established at your
            institution. ​
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
                <img
                  src="/vre/pages/img/EOSC-logo.png"
                  style={{ width: 164 }}
                />
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
                <img
                  src="/vre/pages/img/NFDI-Logo.svg"
                  style={{ width: 164 }}
                />
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
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://nfdi-neuro.de/"
                >
                  <img src="/vre/pages/img/visit.svg" />
                  <span>Visit</span>
                </a>
              </div>
            </li>
          </ul>
          <h3>Community</h3>
          <p>
            The VRE is a community development project. We follow the FAIR
            guiding principles for scientific data management - Findability,
            Accessibility, Interoperability, and Reusability.
          </p>
          <p>
            ​​Please contact us to learn more about how to join the VRE
            community and participate in the development. We want to ensure that
            this development is open and accessible to all clinicians and
            scientists at Charité, BIH, and beyond, so we can solve today’s
            pressing medical challenges together!
          </p>
        </div>
      </div>
      <div className={styles.feature_metrics}>
        <ul>
          <li className={styles.metric_item}>
            <div className={styles.metric_stat}>
              <UserOutlined />
              <span className={styles.metric_number}>{metrics?.active_user}</span>
            </div>
            Members
          </li>
          <li className={styles.metric_item}>
            <div className={styles.metric_stat}>
              <ContainerOutlined />
              <span className={styles.metric_number}>{metrics?.project}</span>
            </div>
            Projects
          </li>
          <li className={styles.metric_item}>
            <div className={styles.metric_stat}>
              <ClusterOutlined />
              <span className={styles.metric_number}>{metrics?.storage}</span>
              <span>GB</span>
            </div>
            Data
          </li>
          <li className={styles.metric_item}>
            <div className={styles.metric_stat}>
              <DesktopOutlined />
              <span className={styles.metric_number}>{metrics?.vm}</span>
            </div>
            Virtual Machines
          </li>
          <li className={styles.metric_item}>
            <div className={styles.metric_stat}>
              <DatabaseOutlined />
              <span className={styles.metric_number}>{metrics?.cores}</span>
            </div>
            Cores
          </li>
          <li className={styles.metric_item}>
            <div className={styles.metric_stat}>
              <DashboardOutlined />
              <span className={styles.metric_number}>{metrics?.ram}</span>
              <span>GB</span>
            </div>
            RAM
          </li>
        </ul>
      </div>
      <div className={styles.features_wrapper}>
        <div className={styles.bottom_links}>
          <Link href="/pages/getting_started">
            <div className={styles.link_button}>
              <div className={styles.btn_content_one}>
                <CaretRightOutlined />
                <span className={styles.span_one}>Get Started</span>
              </div>
            </div>
          </Link>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://vre.charite.de/xwiki/wiki/vrepublic/view/Main/user_guide/"
          >
            <div className={styles.link_button}>
              <div className={styles.btn_content_two}>
                <ReadOutlined />
                <span className={styles.span_two}>User Guide</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
