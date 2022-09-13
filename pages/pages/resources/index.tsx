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
import { ResourceCard } from '../../../components/Resources/ResourceCard/ResourceCard';
import { Header } from '../../../components/Common/Header/Header';
import { Footer } from '../../../components/Common/Footer/Footer';

const Resources: NextPage = () => {
  return (
    <>
      <Header />
      <main className={styles['main']}>
        <section className={styles['resources']}>
          <h2>Resources</h2>
          <div className={styles['subtitle']}>
            The VRE provides a rich ecosystem of tools, integrations, and
            support resources to make complex biomedical analysis possible in a
            secure environment.
          </div>
        </section>
        <div className={styles['background']}>
          <img src="/vre/pages/img/about-title-background.png"></img>
        </div>
        <section className={styles['workbench']}>
          <h2>Workbench Tools</h2>
          <div className={styles['cards-container']}>
            <ResourceCard
              imgSrc="/vre/pages/img/Guacamole-Logo-300x100px.png"
              href="https://vre.charite.de/xwiki/wiki/vrepublic/view/Main/user_guide/Analyzing%20Data/Guacamole/"
            >
              A built-in remote desktop gateway, for accessing Virtual Machines
              and facilitating workbench analyses.
            </ResourceCard>
            <ResourceCard
              imgSrc="/vre/pages/img/Jupyterhub-Logo-300x100px.png"
              href="https://vre.charite.de/xwiki/wiki/vrepublic/view/Main/user_guide/Analyzing%20Data/JupyterHub/"
            >
              A multi-user version of Jupyter Notebook that provides access to
              custom and pre-configured data science computational environments.
            </ResourceCard>
            <ResourceCard
              imgSrc="/vre/pages/img/SuperSet-Logo-300x100px.png"
              href="https://vre.charite.de/xwiki/wiki/vrepublic/view/Main/user_guide/Analyzing%20Data/Superset/"
            >
              A data exploration and visualization platform, designed for
              integrating modern databases and building visualization
              dashboards.
            </ResourceCard>
            <ResourceCard
              imgSrc="/vre/pages/img/CLT-Logo-300x100px.png"
              href="https://vre.charite.de/xwiki/wiki/vrepublic/view/Main/user_guide/Managing%20Data/Command%20Line%20Tool/"
            >
              A binary executable program that provides a text-based user
              interface for managing data within the VRE platform.
            </ResourceCard>
            <ResourceCard
              imgSrc="/vre/pages/img/HPC-Logo-300x100px.png"
              href="https://vre.charite.de/xwiki/wiki/vrepublic/view/Main/user_guide/Analyzing%20Data/HPC/"
            >
              The High Performance Computing (HPC) cluster hosted by the Charité
              that is integrated directly with the VRE workbench.
            </ResourceCard>
            <ResourceCard
              imgSrc="/vre/pages/img/XWIKI-Logo-300x100px.png"
              href="https://vre.charite.de/xwiki/wiki/vrepublic/view/Main/user_guide/Managing%20Projects/Project%20Wiki/"
            >
              A collaborative content management tool for project documentation
              and learning resources.
            </ResourceCard>
          </div>
        </section>
        <section className={styles['documentation']}>
          <h2>Documentation</h2>
          <div className={styles['cards-container']}>
            <ResourceCard
              imgSrc="/vre/pages/img/GitHub-Logo-300x100px.png"
              href="https://github.com/virtualresearchenvironment"
            >
              A collaborative, version-controlled code repository with shared
              documents and code.
            </ResourceCard>
            <ResourceCard
              imgSrc="/vre/pages/img/VRE_userGuide-Logo-300x100px.png"
              href="https://vre.charite.de/xwiki/wiki/vrepublic/view/Main/user_guide/"
            >
              A comprehensive guide for users and developers.
            </ResourceCard>
          </div>
        </section>
        <section className={styles['hospital']}>
          <h2>Hospital Integrations</h2>
          <div className={styles['cards-container']}>
            <ResourceCard
              imgSrc="/vre/pages/img/RedCap-Logo-300x100px.png"
              href="https://vre.charite.de/xwiki/wiki/vrepublic/view/Main/user_guide/Integrations/REDCap/"
            >
              A secure web application for building and managing research
              surveys and databases.
            </ResourceCard>
            <ResourceCard
              imgSrc="/vre/pages/img/PhonixPACS-Logo-300x100px.png"
              href="https://vre.charite.de/xwiki/wiki/vrepublic/view/Main/user_guide/Integrations/PACS/"
            >
              A secure software solution designed for the storage, retrieval,
              and display of diagnostic images and reports.
            </ResourceCard>
          </div>
        </section>
        <section className={styles['coming']}>
          <h2>Coming Soon</h2>
          <div className={styles['cards-container']}>
            <ResourceCard
              imgSrc="/vre/pages/img/DataLad-Logo-300x100px.png"
              href="https://www.datalad.org/"
            >
              A data management multitool that can assist you in handling the
              entire life cycle of digital objects.
            </ResourceCard>
            <ResourceCard
              imgSrc="/vre/pages/img/BBN-Logo-300x100px.png"
              href="https://vre.charite.de/kg/"
            >
              An ecosystem that allows you to organize and better leverage your
              data through the use of a Knowledge Graph.
            </ResourceCard>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Resources;
