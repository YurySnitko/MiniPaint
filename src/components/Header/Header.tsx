import { observer } from 'mobx-react-lite';
import { LogoutBtn } from '../controls/LogoutBtn/LogoutBtn';
import { AppName, HeaderContent, HeaderStld } from './Header.style';
import { useStore } from 'index';
import { SettingsBtn } from '../controls/SettingsBtn/SettingsBtn';

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