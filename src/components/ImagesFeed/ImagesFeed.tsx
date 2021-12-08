import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { SelectValue } from "antd/lib/select";
import { Option } from "antd/lib/mentions";
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router";
import { ImagesContainer, Image, FilterContainer, SelectStld, CreateImageBtn } from "./ImagesFeed.styles";
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
            <SelectStld defaultValue="All users" onChange={onSelectChange}>
                <Option>All users</Option>
                {imagesFeedStore.users.map(u => <Option key={u}>{u}</Option>)}
            </SelectStld>
            <CreateImageBtn type="link" icon={<PlusOutlined />} onClick={() => navigate("/newimage")}>
                Create New Image
            </CreateImageBtn>
        </FilterContainer>
        <ImagesContainer>
            {imagesFeedStore.images.map(image => <Image key={image[0]} src={image[1]} alt='img' />)}
        </ImagesContainer>
    </div>
})