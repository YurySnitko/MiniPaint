import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';
import loginLogo from 'assets/loginlogo.png';
import { Input } from 'antd';
import { UserAddOutlined, UnlockOutlined, MailOutlined } from '@ant-design/icons';
import { Container } from '../Auth.styles';
import { useStore } from 'index';
import { observer } from 'mobx-react-lite';
import { SubmitBtn } from 'controls/SubmitBtn/SubmitBtn';

export const Signup: React.FC = observer(() => {
    const navigate = useNavigate();
    const { authStore, settingsStore } = useStore();

    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        authStore.signUp(email.value, password.value)
        navigate("/");
    }, [navigate, authStore])

    return <Container themeStyle={settingsStore.themeStyle}>
        <h1>Sign Up</h1>
        <div>
            <img src={loginLogo} alt='login logo' />
        </div>
        <form onSubmit={handleSignUp}>
            <Input type="email" name="email" placeholder="Email" prefix={<MailOutlined />} />
            <Input type="password" name="password" placeholder="Password" prefix={<UnlockOutlined />} />
            <SubmitBtn icon={<UserAddOutlined />}>Sign Up</SubmitBtn>
        </form>
        <div>
            Have an account? <NavLink to='/login'>Log In</NavLink>
        </div>
    </Container>
})
