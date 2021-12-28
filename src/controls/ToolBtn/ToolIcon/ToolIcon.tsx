import { Img } from './ToolIcon.styles';
import { ToolIconProps } from './ToolIcon.interfaces';
import React from 'react';

export const ToolIcon: React.FC<ToolIconProps> = ({ image }) => {
  return <Img src={image} alt="button logo" />;
};
