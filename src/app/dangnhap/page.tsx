// pages/login.tsx
'use client'

import { useState } from 'react';
import styled from 'styled-components';
import { generateToken } from '../utils/auth';
import { useRouter } from 'next/navigation';

const LoginContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Kiểm tra thông tin đăng nhập ở đây
    if (username === 'admin' && password === '123456') {
      const token = generateToken(username, password);
      localStorage.setItem('token', token);
      console.log('Login successful!');
      // Redirect hoặc hiển thị thông báo đăng nhập thành công
      router.push('/trangchu');
    } else {
      console.log('Login failed. Invalid username or password.');
      // Hiển thị thông báo đăng nhập không thành công
    }
  };

  return (
    <LoginContainer>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Username:</Label>
          <InputField
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password:</Label>
          <InputField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">Login</Button>
      </form>
    </LoginContainer>
  );
};

export default LoginPage;
