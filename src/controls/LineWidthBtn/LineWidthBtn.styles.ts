import { Button } from 'antd';
import styled from 'styled-components';
import { LineProps } from './LineWidthBtn.interfaces';

export const Line = styled.div<LineProps>`
  display: block;
  content: '';
  border-top: ${({ width }) => width} solid black;
  width: 100%;
`;

export const LineBtnStld = styled(Button)`
  min-height: 50px;
`;
