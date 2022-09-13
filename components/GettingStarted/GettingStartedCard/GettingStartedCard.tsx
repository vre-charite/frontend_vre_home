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

import React, { useState } from 'react';
import { Card, Button, Form, Input, message } from 'antd';
import Link from 'next/link';
import { UserOutlined, CloseOutlined } from '@ant-design/icons';
import styles from './GettingStartedCard.module.scss';
import { SubmittedFeedBack } from '../SubmittedFeedbackEmployee/SubmittedFeedbackEmployee';
import {
  submitContractRequestApi,
  submitEmployeeRequestApi,
} from '../../../api/getStart';

type FieldData = { type: string; username: string; email: string };
const { TextArea } = Input;

const GettingSartedCard = () => {
  const [step, setStep] = useState(1);
  const [formEmployee] = Form.useForm();
  const [formContract] = Form.useForm();
  const [loadingEmployee, setLoadingEmployee] = useState<boolean>(false);
  const [employeeSubmitted, setEmployeeSubmitted] = useState<boolean>(false);
  const [contractSubmitted, setContractSubmitted] = useState<boolean>(false);
  const [loadingContract, setLoadingContract] = useState<boolean>(false);

  const gridStyle = {
    width: '100%',
  };

  const cardTitle = (
    <div className={styles.card_title}>
      <UserOutlined />
      <p>Request an Account</p>
    </div>
  );

  const cardContentBasic = (
    <Card.Grid style={gridStyle} hoverable={false}>
      <div className={styles.content_base}>
        <p>
          If you are interested in trying out the tools and features of the VRE,
          please provide some basic information to request access.
        </p>
        <button onClick={() => setStep(2)}>
          <p>Try out the VRE</p>
        </button>
      </div>
    </Card.Grid>
  );

  const step2 = (
    <div>
      <Card.Grid style={gridStyle} hoverable={false}>
        <div className={styles.step2_content}>
          <p
            style={{
              fontSize: '20px',
              color: '#222222',
              marginBottom: '2px',
              padding: '0px 50px',
            }}
          >
            Thank you for your interest in the VRE. Please provide some
            information to get started.
          </p>
          <p
            style={{
              fontSize: '20px',
              color: '#595959',
              marginTop: '-6px',
              padding: '0px 50px',
            }}
          >
            Your information is collected to confirm your Charité account in
            accordance with our{' '}
            <a
              style={{ textDecoration: 'underline', fontStyle: 'italic' }}
              target="_blank"
              rel="noreferrer"
              href="https://vre.charite.de/xwiki/wiki/vrepublic/view/Main/Privacy%20and%20Data%20Governance/Privacy%20Policy/"
            >
              Privacy Policy
            </a>
            .
          </p>
          <div className={styles.sub_content}>
            <p>Are you an employee of the Charité?</p>
            <button
              className={[
                styles.step_question_btn,
                step === 3 ? styles.pressed_btn : '',
              ].join(' ')}
              onClick={() => setStep(3)}
            >
              <p>Yes</p>
            </button>
            <button
              className={[
                styles.step_question_btn,
                step === 4 || step === 5 || step === 6 || step === 7
                  ? styles.pressed_btn
                  : '',
              ].join(' ')}
              onClick={() => setStep(4)}
            >
              <p>No</p>
            </button>
          </div>
        </div>
      </Card.Grid>
    </div>
  );
  const submitEmployee = () => {
    setLoadingEmployee(true);
    formEmployee
      .validateFields()
      .then(async (res) => {
        try {
          await submitEmployeeRequestApi({
            username: res.username,
            email: res.email,
          });
          setEmployeeSubmitted(true);
        } catch (err) {
          if ((err as any).response?.status) {
            setEmployeeSubmitted(true);
          } else {
            message.error(
              'Something went wrong while attempting to submit your account request, please try again later.',
            );
          }
        } finally {
          setLoadingEmployee(false);
        }
      })
      .catch((err) => {
        setLoadingEmployee(false);
      });
  };

  const step3 = (
    <div>
      <Card.Grid style={gridStyle} hoverable={false}>
        <div className={`${styles.step3_content} ${styles.step_form}`}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p
              style={{
                fontSize: '20px',
                color: '#003262',
                fontWeight: 500,
                marginBottom: '20px',
              }}
            >
              Please provide the following information to register your VRE
              account.
            </p>
            <CloseOutlined
              style={{ cursor: 'pointer', fontSize: '20px' }}
              onClick={() => {
                setStep(2);
                setEmployeeSubmitted(false);
                formEmployee.resetFields();
              }}
            />
          </div>
          <Form
            //{...layout}
            //ref={this.formRef}
            name="control-ref"
            layout="vertical"
            onFinish={submitEmployee}
            form={formEmployee}
          >
            <div style={{ display: 'flex', padding: '0px 10px' }}>
              <div style={{ flex: 0.5, marginRight: '30px' }}>
                <Form.Item
                  name="username"
                  label="Charité Username"
                  required
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your username.',
                    },
                  ]}
                >
                  <Input
                    style={{
                      height: '52px',
                      borderRadius: '6px',
                    }}
                  />
                </Form.Item>
              </div>
              <div style={{ flex: 0.5 }}>
                <Form.Item
                  name="email"
                  label="Charité / BIH email address"
                  required
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your email address.',
                    },
                    {
                      type: 'email',
                      message: 'Please enter a valid email address.',
                    },
                  ]}
                >
                  <Input
                    style={{
                      height: '52px',
                      borderRadius: '6px',
                    }}
                  />
                </Form.Item>
              </div>
            </div>
            <div
              style={{
                padding: '0px 10px',
                maxWidth: '700px',
                marginTop: '-10px',
              }}
            >
              <p style={{ fontSize: '20px', color: '#003262' }}>
                The email address you provide will be used to send your account
                invitation link and other VRE platform notifications.
              </p>
            </div>
            {employeeSubmitted ? (
              <SubmittedFeedBack>
                Your information will be sent to the VRE Platform Administrator
                for processing. Please check your email inbox in the next 1-3
                days for an invitation link.
              </SubmittedFeedBack>
            ) : (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Form.Item>
                  <Button
                    style={{
                      width: '271px',
                      height: '52px',
                      border: '0px',
                      fontSize: '20px',
                      fontWeight: 'bold',
                    }}
                    onClick={() => {
                      setStep(1);
                      formEmployee.resetFields();
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="primary"
                    loading={loadingEmployee}
                    style={{
                      width: '271px',
                      height: '52px',
                      borderRadius: '6px',
                      fontSize: '23px',
                      fontWeight: 'bold',
                    }}
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </div>
            )}
          </Form>
        </div>
      </Card.Grid>
    </div>
  );

  const step4 = (
    <div>
      <Card.Grid style={gridStyle} hoverable={false}>
        <div className={styles.step4_content}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0px 50px',
            }}
          >
            <div>
              <p
                style={{
                  fontSize: '25px',
                  color: '#003262',
                  fontWeight: 500,
                  maxWidth: '600px',
                  lineHeight: '34px',
                }}
              >
                Do you currently have a business contract or Data Processing
                Agreement with the Charité?
              </p>
            </div>
            <div style={{ display: 'flex' }}>
              <button
                className={[
                  styles.step_question_btn,
                  step === 5 ? styles.pressed_btn : '',
                ].join(' ')}
                onClick={() => setStep(5)}
              >
                <p>Yes</p>
              </button>
              <button
                className={[
                  styles.step_question_btn,
                  step === 6 ? styles.pressed_btn : '',
                ].join(' ')}
                onClick={() => setStep(6)}
              >
                <p>No</p>
              </button>
              <button
                className={[
                  styles.step_question_btn,
                  step === 7 ? styles.pressed_btn : '',
                ].join(' ')}
                onClick={() => setStep(7)}
              >
                <p>Not Sure</p>
              </button>
            </div>
          </div>
        </div>
      </Card.Grid>
    </div>
  );

  const onContractSubmit = () => {
    setLoadingContract(true);
    formContract
      .validateFields()
      .then(async (res) => {
        const {
          firstName,
          lastName,
          email,
          institution,
          contractDescription,
          interestDescription,
        } = res;
        try {
          await submitContractRequestApi({
            firstName,
            lastName,
            email,
            institution,
            contractDescription,
            interestDescription,
          });
          setContractSubmitted(true);
        } catch (err) {
          message.error(
            'Something went wrong while attempting to submit your account request, please try again later.',
          );
        } finally {
          setLoadingContract(false);
        }
      })
      .catch((err) => {
        setLoadingContract(false);
      });
  };

  const step5 = (
    <div>
      <Card.Grid style={gridStyle} hoverable={false}>
        <div className={`${styles.step5_content} ${styles.step_form}`}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p
              style={{
                fontSize: '20px',
                color: '#003262',
                fontWeight: 500,
                marginBottom: '20px',
              }}
            >
              Please provide some information to request a user account to try
              out the VRE.
            </p>
            <CloseOutlined
              style={{ cursor: 'pointer', fontSize: '20px' }}
              onClick={() => {
                setStep(4);
                setContractSubmitted(false);
              }}
            />
          </div>
          <Form
            form={formContract}
            name="control-ref"
            layout="vertical"
            onFinish={onContractSubmit}
          >
            <div style={{ display: 'flex', padding: '0px 10px' }}>
              <div style={{ flex: 0.5, marginRight: '30px' }}>
                <Form.Item
                  name="firstName"
                  label="First Name"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your first name.',
                    },
                  ]}
                >
                  <Input
                    style={{
                      height: '52px',
                      borderRadius: '6px',
                    }}
                  />
                </Form.Item>
              </div>
              <div style={{ flex: 0.5 }}>
                <Form.Item
                  name="lastName"
                  label="Last Name"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your last name.',
                    },
                  ]}
                >
                  <Input
                    style={{
                      height: '52px',
                      borderRadius: '6px',
                    }}
                  />
                </Form.Item>
              </div>
            </div>
            <div style={{ display: 'flex', padding: '0px 10px' }}>
              <div style={{ flex: 0.5, marginRight: '30px' }}>
                <Form.Item
                  name="email"
                  label="Institutional email address"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your institutional email address.',
                    },
                    {
                      type: 'email',
                      message: 'Please enter a valid email address.',
                    },
                  ]}
                >
                  <Input
                    style={{
                      height: '52px',
                      borderRadius: '6px',
                    }}
                  />
                </Form.Item>
              </div>
              <div style={{ flex: 0.5 }}>
                <Form.Item
                  name="institution"
                  label="Institution"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your institution.',
                    },
                  ]}
                >
                  <Input
                    style={{
                      height: '52px',
                      borderRadius: '6px',
                    }}
                  />
                </Form.Item>
              </div>
            </div>
            <div
              style={{
                padding: '0px 10px',
                maxWidth: '1000px',
                marginTop: '-15px',
              }}
            >
              <p className={styles.form_para}>
                Please provide an academic or industry affiliated email address.
              </p>
            </div>
            <div style={{ padding: '0px 10px' }}>
              <Form.Item
                name="contractDescription"
                label="Information about contract or data processing agreement
                (reference number, description)"
                rules={[
                  {
                    required: true,
                    message:
                      'Please provide information about your contract or data processing agreement.',
                  },
                ]}
              >
                <TextArea
                  style={{
                    height: '99px',
                    borderRadius: '6px',
                  }}
                />
              </Form.Item>
            </div>
            <div
              style={{
                padding: '0px 10px',
                maxWidth: '1000px',
                marginTop: '-15px',
              }}
            >
              <p className={styles.form_para}>
                Please provide a reference number and/or description of your
                business contract or Data Processing Agreement to help us find
                your information.
              </p>
            </div>
            <div style={{ padding: '0px 10px' }}>
              <Form.Item
                name="interestDescription"
                label="Why are you interested in using the VRE?"
                rules={[
                  {
                    required: true,
                    message:
                      'Please provide information regarding your interest in using the VRE.',
                  },
                ]}
              >
                <TextArea
                  style={{
                    height: '99px',
                    borderRadius: '6px',
                  }}
                />
              </Form.Item>
            </div>
            {contractSubmitted ? (
              <SubmittedFeedBack>
                Your submitted information will be sent to the VRE Platform
                Administrator to set up a VRE trial. Please check your email
                inbox in the next few days for further correspondence and next
                steps.
              </SubmittedFeedBack>
            ) : (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Form.Item>
                  <Button
                    style={{
                      width: '271px',
                      height: '52px',
                      border: '0px',
                      fontSize: '20px',
                      fontWeight: 'bold',
                    }}
                    onClick={() => setStep(1)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="primary"
                    style={{
                      width: '271px',
                      height: '52px',
                      borderRadius: '6px',
                      fontSize: '23px',
                      fontWeight: 'bold',
                    }}
                    loading={loadingContract}
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </div>
            )}
          </Form>
        </div>
      </Card.Grid>
    </div>
  );

  const step6 = (
    <div>
      <Card.Grid style={gridStyle} hoverable={false}>
        <div className={styles.step6_content}>
          <p
            style={{
              fontSize: '30px',
              color: '#003262',
              marginBottom: '2px',
              fontWeight: 500,
            }}
          >
            Thank you for your interest!
          </p>
          <CloseOutlined
            style={{
              cursor: 'pointer',
              fontSize: '20px',
              position: 'absolute',
              right: '20px',
            }}
            onClick={() => setStep(4)}
          />
          <p
            style={{ fontSize: '20px', color: '#003262', marginBottom: '0px' }}
          >
            VRE user accounts are available to users with a legitimate interest
            (research, development or possibly others) from Europe and beyond.
            If you would like to sign up for an account, please{' '}
            <Link href="/pages/support">
              <a href="#" style={{ fontStyle: 'italic', color: '#1890ff' }}>
                contact us
              </a>
            </Link>{' '}
            for more assistance.
          </p>

          <p style={{ fontSize: '20px', color: '#003262' }}>
            Please feel free to explore our public content at
            <a
              style={{
                fontWeight: 500,
                fontStyle: 'italic',
                marginLeft: '7px',
                textDecoration: 'underline',
              }}
              target="_blank"
              rel="noreferrer"
              href="https://vre.charite.de"
            >
              https://vre.charite.de
            </a>
          </p>
        </div>
      </Card.Grid>
    </div>
  );

  return (
    <Card className={styles.getting_started_card} title={cardTitle}>
      {step === 1 && cardContentBasic}
      {step === 2 && (
        <>
          {cardContentBasic} {step2}
        </>
      )}
      {step === 3 && (
        <>
          {cardContentBasic} {step2} {step3}
        </>
      )}
      {step === 4 && (
        <>
          {cardContentBasic} {step2} {step4}
        </>
      )}
      {step === 5 && (
        <>
          {cardContentBasic} {step2} {step4} {step5}
        </>
      )}
      {(step === 6 || step === 7) && (
        <>
          {cardContentBasic} {step2} {step4} {step6}
        </>
      )}
    </Card>
  );
};

export default GettingSartedCard;
