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
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import styles from './QuestionsComponent.module.scss';

type QuestionsProps = {
  question: string;
  contents: React.ReactNode;
};

const QuestionsComponent = (props: QuestionsProps) => {
  const [showList, setShowList] = useState(false);
  const { question, contents } = props;

  const handleClickQuestion = () => {
    setShowList((prev) => !prev);
  };

  return (
    <div>
      <div className={styles.questions}>
        <span onClick={handleClickQuestion}>
          {showList ? <MinusOutlined /> : <PlusOutlined />}
        </span>
        <p onClick={handleClickQuestion}>{question}</p>
      </div>
      <div className={styles.question_contents}>
        {showList && <div>{contents}</div>}
      </div>
    </div>
  );
};

export default QuestionsComponent;
