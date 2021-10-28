import React, { useState } from 'react';
import { CheckOutlined } from '@ant-design/icons';
import styles from './SubmittedFeedback.module.scss';

export function SubmittedFeedBack({ children }: { children: string }) {
  return (
    <div>
      <div className={styles['title']}>
        <CheckOutlined /> Submitted
      </div>
      <div className={styles['thank']}>Thank you for your interest!</div>
      <div className={styles['text']}>{children}</div>
    </div>
  );
}
