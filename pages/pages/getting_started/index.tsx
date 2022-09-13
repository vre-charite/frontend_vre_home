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
import GettingSartedCard from '../../../components/GettingStarted/GettingStartedCard/GettingStartedCard';
import FrequentlyAskedQuestions from '../../../components/GettingStarted/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import { Card } from 'antd';
import { Footer } from '../../../components/Common/Footer/Footer';

const questionOneContent = [
  {
    key: 0,
    question: 'Who can request an account?',
    contents: (
      <ul>
        <li>
          Accounts for testing the VRE are available to employees of the Charité
          and to members of external organizations who have a contractual
          agreement with the Charité (e.g. subcontract, collaboration, data
          processing and/or service agreement) If none of these situations
          applies to you, please contact the VRE support team to see how you can
          be included in the VRE community.
        </li>
        <li>
          You can also access the VRE by invitation from a PI who has an
          established research project in the VRE. For more information, see FAQ
          Projects (below).
        </li>
      </ul>
    ),
  },
  {
    key: 1,
    question: 'How do I access my account after submitting my request?',
    contents: (
      <ul>
        <li>
          If you are a Charité employee, you will receive an email when
          notifying you that your access has been granted. Click on the link in
          the email or navigate to{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://vre.charite.de"
            style={{
              fontStyle: 'italic',
              color: '#1890FF',
              textDecoration: 'underline',
            }}
          >
            vre.charite.de
          </a>{' '}
          and log in using your Charité credentials to complete your
          registration. You will now have access to the Test Project.
          <br /> If you do not receive the email within one business day, please
          contact the VRE support team for assistance. If you are a member of an
          external organization, you will first need to be added to the Charité
          central Active Directory to fulfill your account.
          <br /> You will receive an email with a form and instructions on how
          to apply. The approval process can take several days.
          <br /> The VRE support team will help you if you have any questions.
        </li>
        <li>
          If you are a member of an external organization, you will first need
          to be added to the Charité central Active Directory to fulfill your
          account. You will receive an email with a form and instructions on how
          to apply. The approval process can take several days. The VRE support
          team will help you if you have any questions.
        </li>
      </ul>
    ),
  },
  {
    key: 2,
    question: 'What can I use my account for?',
    contents: (
      <p>
        Your VRE Test account will help you explore the features and
        functionality of the VRE and its integrated workbench tools in a Test
        Project. <br /> This Test Project is for
        <b style={{ margin: '0px 5px' }}>testing purposes only</b>
        and should not be used for uploading, storing, sharing, or processing of
        any human participant research data, or any other sensitive data, nor
        should it be used for long term storage of files.
        <br /> Please note: any data uploaded to test projects on the VRE may be
        periodically purged without warning.
      </p>
    ),
  },
];

const questionTwoContent = [
  {
    key: 0,
    question:
      'What is the Indoc Test Project and why was I granted access to it?',
    contents: (
      <p>
        If you submitted an account request through the VRE Portal and your
        account is approved, you will be granted access to the Indoc Test
        Project. The Indoc Test Project is a demonstration project for testing
        purposes only.
      </p>
    ),
  },
  {
    key: 1,
    question: 'How can I set up my own research project on the VRE?',
    contents: (
      <ul>
        <li>
          Principal Investigators of research programs at the Charité or
          external institutions may request their own project on the VRE and
          invite additional members to collaborate. Projects involving the
          processing of human research must also fulfil applicable data
          protection requirements including a data processing agreement and
          evidence of research ethics approval. Please contact the{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:vre-support@charite.de"
            style={{
              fontStyle: 'italic',
              color: '#1890FF',
              textDecoration: 'underline',
            }}
          >
            VRE support team
          </a>{' '}
          to discuss your project needs.
        </li>
        <li>
          Access to VRE projects other than the Test Project is by invitation
          only. Please contact the Principal Investigator (PI) of a VRE project,
          or their deputy, to request an invitation to their project.
        </li>
      </ul>
    ),
  },
  {
    key: 2,
    question:
      'Can I use my existing testing account to work other VRE projects?',
    contents: (
      <p>
        Yes! Once your VRE account has been created, you can use the same
        account to access all other VRE projects that you have been invited to.
      </p>
    ),
  },
];

const questionThreeContent = [
  {
    key: 0,
    question:
      'Who should I contact for assistance with setting up my VRE account or access to projects?',
    contents: (
      <p>
        For assistance with your VRE test account, you can contact the{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:vre-support@charite.de"
          style={{
            fontStyle: 'italic',
            color: '#1890FF',
            textDecoration: 'underline',
          }}
        >
          VRE Support Team
        </a>
      </p>
    ),
  },
  {
    key: 1,
    question:
      'I have forgotten my password, or need to reset my password. How can I get help with my username or password?',
    contents: (
      <p>
        Please visit the Charité access portal{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://zugang.charite.de/"
          style={{
            fontStyle: 'italic',
            color: '#1890FF',
            textDecoration: 'underline',
          }}
        >
          zugang.charite.de/
        </a>{' '}
        for assistance with your Charité username or password.
      </p>
    ),
  },
];

const GetStarted: NextPage = () => {
  return (
    <>
      <Header />
      <main className={styles['main']}>
        <div className={styles['main_div']}>
          <section className={styles['title']}>
            <div className={styles['content']}>
              <div className={styles['big-title']}>
                Getting Started with VRE
              </div>
            </div>
          </section>
          <section className={styles['getting_started_card']}>
            <div className={styles['content']}>
              <GettingSartedCard />
            </div>
          </section>
          <section className={styles['frequently_questions']}>
            <div className={styles['content']}>
              <p className={styles['title']}>Frequently Asked Questions</p>
              <div className={styles['question_one']}>
                <FrequentlyAskedQuestions
                  title={'User Accounts'}
                  data={questionOneContent}
                />
              </div>
              <div className={styles['question_two']}>
                <FrequentlyAskedQuestions
                  title={'Projects'}
                  data={questionTwoContent}
                />
              </div>
              <div className={styles['question_three']}>
                <FrequentlyAskedQuestions
                  title={'Support'}
                  data={questionThreeContent}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default GetStarted;
