import React from 'react';

export interface BaseBtnProps {
  icon?: React.ReactNode;
  onclick?: () => void;
  block?: boolean;
  htmlType?: 'button' | 'reset' | 'submit';
}
