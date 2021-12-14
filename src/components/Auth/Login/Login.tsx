import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import loginLogo from 'assets/loginlogo.png';
import { useNavigate } from 'react-router';
import { Input } from 'antd';
import { MailOutlined, UnlockOutlined, LoginOutlined } from '@ant-design/icons';
import { Container } from '../Auth.styles';
import { useStore } from 'index';
import { observer } from 'mobx-react';
import { SubmitBtn } from 'controls/SubmitBtn/SubmitBtn';

export const Login: React.FC = observer(() => {
    const navigate = useNavigate();
    const { authStore, settingsStore } = useStore();

    const handleLogin = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        authStore.login(email.value, password.value);
        navigate("/");
    }, [navigate, authStore])

    return <Container themeStyle={settingsStore.themeStyle}>
        <h1>Log In</h1>
        <div>
            <img src={loginLogo} alt='login logo' />
        </div>
        <form onSubmit={handleLogin}>
            <Input type="email" name="email" placeholder="Email" prefix={<MailOutlined />} />
            <Input type="password" name="password" placeholder="Password" prefix={<UnlockOutlined />} />
            <SubmitBtn icon={<LoginOutlined />}>Log in</SubmitBtn>
        </form>
        <div>
            Don't have an account? <NavLink to='/signup'>Sign Up</NavLink>
        </div>
    </Container>
})

