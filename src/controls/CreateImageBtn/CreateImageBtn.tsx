import { useNavigate } from 'react-router';
import { PlusOutlined } from '@ant-design/icons';
import { useStore } from 'index';
import { observer } from 'mobx-react-lite';
import { CreateImageBtnStld } from './CreateImageBtn.styles';

export const CreateImageBtn = observer(() => {
  const navigate = useNavigate();
  const { settingsStore } = useStore();

  return (
    <CreateImageBtnStld
      themeStyle={settingsStore.themeStyle}
      type="link"
      icon={<PlusOutlined />}
      onClick={() => navigate('/newimage')}
    >
      Create New Image
    </CreateImageBtnStld>
  );
});
