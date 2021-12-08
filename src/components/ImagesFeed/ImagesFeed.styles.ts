import { Button } from 'antd';
import { Select } from 'antd';
import styled from 'styled-components'

export const ImagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 20px 0;
`;

export const Image = styled.img`
    display: block;
    border: 2px solid #ccc;
    box-shadow: 0px 4px 7px -3px rgb(0 0 0 / 20%), 0px 7px 12px 1px rgb(0 0 0 / 14%), 0px 2px 16px 2px rgb(0 0 0 / 12%);
    border-radius: 5px;
`;

export const FilterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const SelectStld = styled(Select)`
    width: 200px;
`;

export const CreateImageBtn = styled(Button)`
    border: "1px solid #1890ff"; 
    background-color: "#fff";
`
