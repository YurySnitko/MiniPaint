import { observer } from 'mobx-react-lite';
import { LogoutBtn } from './LogoutBtn';
import { Layout } from 'antd';
import { AppName } from './AppNameDiv.style';
import { HeaderContent } from './HeaderContent.style';
import { useStore } from '../..';

const { Header } = Layout;

export const HeaderContainer: React.FC = observer(() => {
    const { authStore } = useStore()

    return <Header style={{ position: 'fixed', zIndex: 1, width: '762px' }}>
        <HeaderContent>
            <AppName>MiniPaint</AppName>
            {authStore.isAuth && <LogoutBtn logout={authStore.logout.bind(authStore)} />}
        </HeaderContent>
    </Header>
})