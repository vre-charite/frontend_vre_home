import React, { useState } from 'react';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import styles from './QuestionsComponent.module.scss';

type QuestionsProps = {
  question: string,
  contents: React.ReactNode
};

const QuestionsComponent = (props: QuestionsProps) => {
    const [showList, setShowList] = useState(false);
    const { question, contents } = props;

    const handleClickQuestion = () => {
        setShowList(prev => !prev);
    }

    return (
      <div>
        <div className={styles.questions}>
          {showList ? <MinusOutlined /> : <PlusOutlined />}
          <p onClick={handleClickQuestion}>{question}</p>
        </div>
        <div className={styles.question_contents}>{showList && <div>{contents}</div>}</div>
      </div>
    );
};

export default QuestionsComponent;