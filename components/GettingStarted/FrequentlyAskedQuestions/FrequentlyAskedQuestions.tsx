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
import { Input } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import QuestionsComponent from '../QuestionsComponent/QuestionsComponent';
import styles from './FrequentlyAskedQuestions.module.scss';

type FreQuestionsProps = {
  title: string;
  data: { key: number; question: string; contents: React.ReactNode }[];
};

const FrequentlyAskedQuestions = (props: FreQuestionsProps) => {
  const { title, data } = props;

  return (
    <div className={styles.questions_section}>
      <p>{title}</p>
      {data.map((el, ind) => (
        <QuestionsComponent
          key={ind}
          question={el.question}
          contents={el.contents}
        />
      ))}
    </div>
  );
};

export default FrequentlyAskedQuestions;
