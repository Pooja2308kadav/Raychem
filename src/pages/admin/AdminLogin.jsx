import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axiosInstance from '../../utils/axiosInstance';
import { AuthContext } from '../../App';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setAuthState } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/auth/login', { email, password });
      const { token, role } = response.data;

      // Store token and role in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      // Update auth state
      setAuthState({
        isAuthenticated: true,
        userRole: role,
        token,
      });

      // Redirect to dashboard
      navigate('/admin/dashboard');
    } catch (err) {
      setError('Invalid email or password');
      console.error('Login error:', err);
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <h2>Admin Login</h2>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginContainer>
  );
};

// Styled Components
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7fafc;
`;

const LoginForm = styled.form`
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #2d3748;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #4a5568;
  }
`;

const ErrorMessage = styled.p`
  color: #e53e3e;
  margin-bottom: 10px;
`;

export default AdminLogin;