import React from 'react';
import { Card,Space } from 'antd';
import styles from './FairCard.module.scss';
type FairCardProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactChild;
};
export function FairCard(props: FairCardProps) {
  const { icon, title, children } = props;
  return (
    <Card
      className={styles['card']}
      title={
        <Space size={15}>
          {icon}
          {title}
        </Space>
      }
    >
      {children}
    </Card>
  );
}
