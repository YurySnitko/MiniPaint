import { observer } from 'mobx-react-lite';
import { LogoutBtn } from './LogoutBtn';
import { AppName, HeaderContent, HeaderStld } from './HeaderContainer.style';
import { useStore } from '../..';
import { SettingsBtn } from './SettingsBtn';

export const HeaderContainer: React.FC = observer(() => {
    const { authStore } = useStore()

    return <HeaderStld>
        <HeaderContent>
            <AppName>MiniPaint</AppName>
            {authStore.isAuth && <LogoutBtn logout={authStore.logout} />}
            <SettingsBtn />
        </HeaderContent>
    </HeaderStld>
})