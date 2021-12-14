import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { SelectValue } from "antd/lib/select";
import { Option } from "antd/lib/mentions";
import { ImagesContainer, Image, FilterContainer, SelectStld } from "./ImagesFeed.styles";
import { useStore } from "index";
import { CreateImageBtn } from "controls/CreateImageBtn/CreateImageBtn";

export const ImagesFeed: React.FC = observer(() => {
    const { imagesFeedStore, settingsStore } = useStore();

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
            <CreateImageBtn />
        </FilterContainer>
        <ImagesContainer>
            {imagesFeedStore.images.map(image =>
                <Image themeStyle={settingsStore.themeStyle} key={image[0]} src={image[1]} alt='img' />
            )}
        </ImagesContainer>
    </div>
})