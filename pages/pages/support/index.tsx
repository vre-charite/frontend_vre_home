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
import { MedicineBoxOutlined, MailOutlined } from '@ant-design/icons';
import { Footer } from '../../../components/Common/Footer/Footer';
import { Input, Select, Form, Button, message } from 'antd';
import ReCAPTCHA from 'react-google-recaptcha';
import { useEffect, useState } from 'react';
import { ContactUsPara } from '../../../api/types';
import { contactUsApi } from '../../../api/support';
import { trimString } from '../../../utils/common';
const { TextArea } = Input;
const { Option } = Select;
function getSiteKey() {
  let siteKey;
  switch (process.env.NEXT_PUBLIC_APP_ENV) {
    case 'dev':
      siteKey = '6Lem3-IcAAAAAHrvu-CpOfVRUd2kd7S_y6oxqBG7';
      break;
    case 'staging':
      siteKey = '6Lex3-IcAAAAAMvV6IGIup6joIBKLghQfWm9vy7W';
      break;
    case 'charite':
      siteKey = '6Ld3rPUcAAAAANISpycDfJexKKVJfFywxLFrad29';
      break;
    default:
      break;
  }
  return siteKey;
}
const reCaptchaSiteKey = getSiteKey();
interface FieldData {
  name: string | number | (string | number)[];
  value?: any;
  touched?: boolean;
  validating?: boolean;
  errors?: string[];
}

const Support: NextPage = () => {
  const [recaptchaPass, setRecaptchaPass] = useState(false);
  const [form] = Form.useForm();
  const [fields, setFields] = useState<FieldData[]>([
    { name: 'category', value: 'General Inquiry' },
  ]);
  async function sendReq() {
    const paramObj: any = fields.reduce((acc: any, val: FieldData) => {
      acc[val.name.toString()] = val.value;
      return acc;
    }, {});
    const params: ContactUsPara = {
      category: paramObj['category'],
      name: paramObj['name'],
      email: paramObj['email'],
      title: `[${paramObj['category']}] Inquiry From VRE Support Page`,
      description: paramObj['message'],
    };
    await contactUsApi(params);
    message.success(
      {
        content:
          'Thank you for submitting a request! VRE Support Team has received your request and will respond soon.',
        style: {
          marginTop: '20vh',
        },
      },
      5000,
    );
    form.resetFields();
    form.setFields([{ name: 'category', value: 'General Inquiry' }]);
    setFields([{ name: 'category', value: 'General Inquiry' }]);
  }
  const disbaleBtn =
    !recaptchaPass ||
    fields.length !== 4 ||
    fields.filter(({ value, errors }) => {
      return (errors && errors?.length > 0) || !value;
    }).length > 0;
  return (
    <>
      <Header />
      <div className={styles.support_section}>
        <div className={styles.support_content}>
          <div className={styles.support_left}>
            <h3>
              <MedicineBoxOutlined />
              <span>Support</span>
            </h3>
            <p>
              The VRE Support Team is available to help you with your questions
              about our services, tools, and integrations.{' '}
            </p>
            <p>
              You can contact the VRE Support Team for help by filling out the
              Contact Us form. You should receive a response in 1-2 business
              days. For assistance with your Charité account, please visit the{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://zugang.charite.de/"
              >
                Charité Access Portal
              </a>
              .{' '}
            </p>
            <p>
              Before you send a request, you can check to see if the answers are
              already available in the{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://vre.charite.de/xwiki/wiki/vrepublic/view/Main/user_guide/"
              >
                VRE Documentation
              </a>
              .
            </p>
          </div>
          <div className={styles.support_right}>
            <h3>
              <MailOutlined /> <span>Contact Us</span>
            </h3>
            <div className="form-content">
              <Form
                layout="vertical"
                form={form}
                fields={fields}
                onFieldsChange={(_, allFields) => {
                  setFields(allFields);
                }}
                onFinish={sendReq}
              >
                <div className="form-row">
                  <div className="form-half-row">
                    <Form.Item
                      name="name"
                      label="Name"
                      rules={[
                        { required: true, message: 'Please input your name.' },
                        {
                          validator: (rule, value) => {
                            if (!value) return Promise.reject();
                            const isLengthValid =
                              value &&
                              trimString(value) &&
                              trimString(value).length <= 100;
                            return isLengthValid
                              ? Promise.resolve()
                              : Promise.reject(
                                  'The name must be between 1 and 100 characters.',
                                );
                          },
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </div>
                  <div className="form-half-row">
                    <Form.Item
                      name="email"
                      label="Email"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your email.',
                        },
                        {
                          type: 'email',
                          message: 'Please enter a valid email address.',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </div>
                </div>
                <Form.Item
                  name="category"
                  label="Category"
                  rules={[
                    { required: true, message: 'Please input category.' },
                  ]}
                >
                  <Select>
                    <Option value="General Inquiry">General Inquiry</Option>
                    <Option value="Platform Technical Support">
                      Platform Technical Support
                    </Option>
                    <Option value="Account Support">Account Support</Option>
                    <Option value="Report A Bug">Report A Bug</Option>
                    <Option value="Other">Other</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="message"
                  label="Message"
                  rules={[
                    { required: true, message: 'Please input your message.' },
                    {
                      validator: (rule, value) => {
                        if (!value) return Promise.reject();
                        const isLengthValid =
                          value &&
                          trimString(value) &&
                          trimString(value).length >= 10 &&
                          trimString(value).length <= 1000;
                        return isLengthValid
                          ? Promise.resolve()
                          : Promise.reject(
                              'The message must be between 10 and 1000 characters.',
                            );
                      },
                    },
                  ]}
                >
                  <TextArea rows={6} />
                </Form.Item>
                <div className="bottom-line">
                  <ReCAPTCHA
                    sitekey={`${reCaptchaSiteKey}`}
                    onChange={(value) => {
                      setRecaptchaPass(true);
                    }}
                    onExpired={() => {
                      setRecaptchaPass(false);
                    }}
                  />
                  <Button
                    type="primary"
                    disabled={disbaleBtn}
                    htmlType="submit"
                  >
                    {disbaleBtn ? (
                      <img src={'/vre/pages/img/Rocket-dark.svg'} />
                    ) : (
                      <img src={'/vre/pages/img/Rocket.svg'} />
                    )}
                    Send
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Support;
