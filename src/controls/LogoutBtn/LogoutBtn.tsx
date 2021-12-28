import { LogoutOutlined } from '@ant-design/icons';
import React from 'react';
import { BaseBtn } from '../BaseBtn/BaseBtn';
import { LogoutBtnProps } from './LogoutBtn.interfaces';

export const LogoutBtn: React.FC<LogoutBtnProps> = ({ logout }) => {
  return (
    <BaseBtn onclick={logout} icon={<LogoutOutlined />}>
      Sign Out
    </BaseBtn>
  );
};
