import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Button, Select } from 'antd';
import { SelectValue } from "antd/lib/select";
import { Option } from "antd/lib/mentions";
import { FilterContainer } from "./FilterContainer.style";
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router";
import { ImagesContainer } from "./ImagesContainer.style";
import { Image } from "./Image.style";
import { useStore } from "../..";

export const ImagesFeed: React.FC = observer(() => {
    const navigate = useNavigate();
    const { imagesFeedStore } = useStore();

    const onSelectChange = (value: SelectValue) => {
        (value && value !== "All users")
            ? imagesFeedStore.setChosenUser(value)
            : imagesFeedStore.setChosenUser('');
    }
    
    useEffect(() => {
        imagesFeedStore.getUsersData()
    }, [imagesFeedStore])

    return <div>
        <FilterContainer>
            <Select defaultValue="All users" style={{ width: 200 }} onChange={onSelectChange}>
                <Option>All users</Option>
                {imagesFeedStore.users.map(u => <Option key={u}>{u}</Option>)}
            </Select>
            <Button type="link" icon={<PlusOutlined />} onClick={() => navigate("/newimage")}
                style={{ border: "1px solid #1890ff", backgroundColor: "#fff" }}>Create New Image</Button>
        </FilterContainer>
        <ImagesContainer>
            {imagesFeedStore.images.map(image => <Image key={image[0]} src={image[1]} alt='img' />)}
        </ImagesContainer>
    </div>
})