import { observer } from 'mobx-react-lite';
import { LogoutBtn } from '../Buttons/LogoutBtn';
import { AppName, HeaderContent, HeaderStld } from './HeaderContainer.style';
import { useStore } from 'index';
import { SettingsBtn } from '../Buttons/SettingsBtn';

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