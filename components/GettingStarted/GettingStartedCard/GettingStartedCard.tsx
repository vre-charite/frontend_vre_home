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
            information to get started
          </p>
          <p
            style={{
              fontSize: '20px',
              color: '#595959',
              marginTop: '-6px',
              padding: '0px 50px',
            }}
          >
            Your information is collected to confirm your Charite account in
            accordance with our{' '}
            <a
              style={{ textDecoration: 'underline', fontStyle: 'italic' }}
              target="_blank"
              rel="noreferrer"
              href="https://vre.charite.de/xwiki/wiki/vrepublic/view/Main/Privacy%20and%20Data%20Governance/Privacy%20Policy/"
            >
              Privacy Policy
            </a>
          </p>
          <div className={styles.sub_content}>
            <p>Are you an employee of the Charite?</p>
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
            message.error('Failed to request account');
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
                fontWeight: 600,
                marginBottom: '20px',
              }}
            >
              Please provide the following information to register your VRE
              account
            </p>
            <CloseOutlined
              style={{ cursor: 'pointer', fontSize: '20px' }}
              onClick={() => {
                setStep(2);
                setEmployeeSubmitted(false);
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
                      fontWeight: 600,
                    }}
                    onClick={() => setStep(1)}
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
                  fontWeight: 600,
                  maxWidth: '600px',
                  lineHeight: '34px',
                }}
              >
                Do you currently have a business contract or Data Processing
                Agreement with the Charite?
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
          message.error('Failed to request account');
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
                fontWeight: 600,
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
            //{...layout}
            //ref={this.formRef}
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
                Please provide an academic or industry affiliated email address
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
                  },
                ]}
              >
                <Input
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
                  },
                ]}
              >
                <Input
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
              fontWeight: 600,
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
            Unforunately, you are not eligible to receive a VRE account at this
            time.
          </p>
          <p style={{ fontSize: '20px', color: '#003262' }}>
            Please contact{' '}
            <Link href="/pages/support">
              <span
                style={{
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  cursor: 'pointer',
                }}
              >
                VRE Support
              </span>
            </Link>{' '}
            for help getting started with a Data Processing Agreement or
            contract to set up access.
          </p>
          <p style={{ fontSize: '20px', color: '#003262' }}>
            Please feel free to explore our public content at
            <a
              style={{
                fontWeight: 'bold',
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
