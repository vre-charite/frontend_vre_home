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
import { Header } from '../../../components/Common/Header/Header';
import { FairCard } from '../../../components/About/FairCard/FairCard';
import {
  SearchOutlined,
  DeploymentUnitOutlined,
  SyncOutlined,
  CaretRightOutlined,
} from '@ant-design/icons';
import { Card } from 'antd';
import { Footer } from '../../../components/Common/Footer/Footer';
import Link from 'next/link';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const About: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <section className={styles['title']}>
          <div className={styles['content']}>
            <div className={styles['big-title']}>About the VRE</div>
            <div className={styles['sub-title']}>
              The Virtual Research Environment (VRE) is designed to make it
              easier for researchers to find and securely access data and use it
              in innovative ways.
            </div>
          </div>
        </section>
        <section className={styles['gdpr']}>
          <div className={styles['content']}>
            <div className={styles['left']}>
              <img
                className={styles['img-front-view']}
                src="/vre/pages/img/VRE-front-view-mockup.png"
                alt=""
              />
              <img
                className={styles['img-gdpr-ready']}
                src="/vre/pages/img/GDPR-Ready-logo.svg"
                alt=""
              />
            </div>
            <div className={styles['right']}>
              <p>
                The BIH/Charité Virtual Research Environment (VRE) is a data
                management platform that enables medical researchers to store,
                find, access, analyse, and share their data, including sensitive
                data, thus reducing barriers to biomedical research and
                innovation.  The VRE is developed in collaboration with Charité
                Business Division IT (GB IT) and industry partner Indoc
                Research.
              </p>
              <p>
                The VRE has undergone a{' '}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://vre.charite.de/xwiki/wiki/vrepublic/view/Main/Privacy%20and%20Data%20Governance/GDPR%20Readiness%20Audit/"
                >
                  {' '}
                  GDPR Service Readiness audit
                </a>{' '}
                by an independent legal firm which confirms that the VRE can be
                offered as commissioned data processing for health-related
                research projects in compliance with the requirements of the
                European General Data Protection Regulation (GDPR). <br />
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://vre.charite.de/xwiki/wiki/vrepublic/view/Main/Privacy%20and%20Data%20Governance/GDPR%20Readiness%20Audit/"
                >
                  {' '}
                  More information.
                </a>
              </p>
            </div>
          </div>
        </section>
        <section className={styles['fair']}>
          <div className={styles['content']}>
            <p>
              <b>Built on the FAIR guiding principles</b> – Findability,
              Accessibility, Interoperability, and Reusability – the VRE
              provides interoperability with international data commons like
              those developed under the European Open Science Cloud, such as the
              Virtual Brain Cloud or the Human Brain Project.<br></br>&nbsp;
            </p>
            <div className={styles['cards']}>
              <FairCard icon={<SearchOutlined />} title="Findable">
                <ul>
                  <li> Built-in metadata capture, indexing and storage </li>
                  <li>
                    {' '}
                    Unique identifiers supported by object storage architecture{' '}
                  </li>
                  <li>Multiple ways to organize and find data </li>
                  <li>
                    {' '}
                    Flexible search and query tools and knowledge graph engine
                  </li>
                </ul>
              </FairCard>
              <FairCard icon={<DeploymentUnitOutlined />} title="Accessible">
                <ul>
                  <li>
                    {' '}
                    Transparent access policies in alignment with the{' '}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://op.europa.eu/en/publication-detail/-/publication/78e87306-48bc-11e6-9c64-01aa75ed71a1/"
                    >
                      European charter for access to Research Infrastructure
                    </a>{' '}
                  </li>
                  <li>
                    {' '}
                    Authentication and authorization procedures to ensure data
                    are accessed by the right people at the right time
                  </li>
                </ul>
              </FairCard>
              <FairCard
                icon={<img width={25} src="/vre/pages/img/Gears-icon.svg" />}
                title="Interoperable"
              >
                <ul>
                  <li>
                    {' '}
                    Interoperability with international data commons including
                    EBRAINS and Virtual Brain Cloud{' '}
                  </li>
                  <li>
                    {' '}
                    Support for common data standards such as the{' '}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://bids.neuroimaging.io/"
                    >
                      Brain Imaging Data Structure
                    </a>
                  </li>
                </ul>
              </FairCard>
              <FairCard icon={<SyncOutlined />} title="Reusable">
                <ul>
                  <li> Annotation tools for rich metadata description </li>
                  <li> Internal provenance tracking system </li>
                  <li>
                    {' '}
                    Datalad support for rich provenance of code with data and
                    metadata
                  </li>
                </ul>
              </FairCard>
            </div>
          </div>
        </section>
        <section className={styles['hdp']}>
          <div className={styles['content']}>
            <div className={styles['left']}>
              <img
                className={styles['img-bih']}
                src="/vre/pages/img/Charite-logo.svg"
                alt=""
              />
              <img
                className={styles['img-charite']}
                src="/vre/pages/img/BIH-logo.svg"
                alt=""
              />
            </div>
            <div className={styles['right']}>
              <p>
                The VRE is a module of the BIH Charité Health Data Platform
                systems (HDP), a component of the BIH Translational Hub Digital
                Medicine, and leverages that system’s generic big data
                infrastructure including its computing and storage resources. 
                The VRE provides additional specialized methodology and
                technology capabilities for data processing, data management,
                visualization, and analysis.
              </p>
            </div>
          </div>
        </section>
        <section className={styles['features']}>
          <div className={styles['content']}>
            <div className={styles['left']}>
              <div className={styles['features-title']}>
                Features of the VRE include:
              </div>
              <ul>
                <li>
                  {' '}
                  A web portal with project- and role-based access controls and
                  federated identity management system{' '}
                </li>
                <li>
                  {' '}
                  A segregated “Green Room” zone to capture and pre- process
                  sensitive data to prepare it for analysis{' '}
                </li>
                <li>
                  {' '}
                  Analytics workbench tools for processing, analysing, and
                  visualizing datasets{' '}
                </li>
                <li>
                  {' '}
                  Automated ingestion of data from hospital-based data capture
                  sources{' '}
                </li>
                <li>
                  {' '}
                  Project-specific Data Warehouse for ingestion and query of
                  structured datasets{' '}
                </li>
                <li>
                  Metadata repository and graph database for capture and query
                  of metadata and lineage tracking, and support for ontologies
                  and automated extraction and indexing of standard metadata
                  fields to make data findable
                </li>
              </ul>
            </div>
            <div className={styles['right']}>
              <Zoom>
                {' '}
                <img
                  className={styles['img-feature']}
                  src="/vre/pages/img/VRE-Diagram.jpg"
                  alt=""
                  width="100%"
                />
              </Zoom>
            </div>
          </div>
        </section>
        <section className={styles['request']}>
          <div className={styles['content']}>
            <div className={styles['rectangle']}>
              <div className={styles['request-account']}>
                Request a Test Account
              </div>
              <Link href="/pages/getting_started">
                <div className={styles['get-started']}>
                  <span>
                    <CaretRightOutlined />
                    Let&apos;s get started
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className={styles['imprint']}>
          <a id="imprint"></a>
          <div className={styles['content']}>
            <Card title="Imprint" className={styles['imprint-card']}>
              <address>
                <div className={styles['address-div']}>
                  <b>Berlin Institute of Health at Charité (BIH) </b>
                  <br />
                  Translational Research Unit
                  <br /> of Charité – Universitätsmedizin Berlin <br />
                  Anna-Louisa-Karsch-Str. 2<br /> 10178 Berlin
                  <br /> Tel.: +49 (0)30 450 543 049 <br />
                  Fax: +49 (0)30 450 7543999
                  <br /> E-Mail:{' '}
                  <a href="mailto:info@bih-charite.de">info@bih-charite.de</a>
                  <br />
                </div>
                <div className={styles['address-div']}>
                  <b>Authorized to represent</b> <br /> Prof . Dr. Petra Ritter
                  <br />
                </div>
                <div className={styles['address-div']}>
                  <b> Editing</b> <br /> Prof. Dr. Petra Ritter
                  <br /> BIH Johanna Quandt Professor for Brain Simulation
                  <br />
                  Campus Charité Mitte Charitéplatz 1<br /> 10117 Berlin
                  <br /> E-Mail:{' '}
                  <a href="mailto:petra.ritter@charite.de">
                    petra.ritter@charite.de
                  </a>{' '}
                  <br />
                </div>
                <div className={styles['address-div']}>
                  <b> Design/Programming </b> <br /> Website designed and hosted
                  by Indoc Research
                </div>
              </address>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
