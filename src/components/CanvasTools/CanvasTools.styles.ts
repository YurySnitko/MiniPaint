import { Input } from 'antd';
import styled from 'styled-components';

export const Color = styled(Input)`
  min-height: 50px;
  padding: 10px;
`;

export const ToolsContainer = styled.div`
  width: 10%;

  & button {
    display: block;
    padding: 10px;
    height: fit-content;
  }
`;
