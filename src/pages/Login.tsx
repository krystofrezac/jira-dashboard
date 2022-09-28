import { NextPage } from 'next';

import useLocalStorage from '../hooks/useLocalStorage';
import { LocalStorageKey } from '../hooks/useLocalStorage/types';

const LoginPage: NextPage = () => {
  const [auth, setAuth] = useLocalStorage(LocalStorageKey.auth);

  const handleLogin = (): void => {
    const url = prompt('Enter Jira url');
    if (!url) return;

    const email = prompt('Enter your Jira email');
    if (!email) return;

    const token = prompt('Enter your Jira token');
    if (!token) return;

    setAuth({ authToken: `${email}:${token}`, url });
    alert('Logged in successfully');
  };

  return (
    <>
      <div>Jira url: {auth?.url}</div>
      <div>Auth token: {auth?.authToken}</div>
      <button onClick={handleLogin}>Login</button>
      <div>
        https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/
      </div>
    </>
  );
};

export default LoginPage;
