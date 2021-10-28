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
