import { ChangeEvent, useState } from 'react';

import {
  Button,
  Card,
  FormElement,
  Input,
  Link,
  Text,
} from '@nextui-org/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Column from '../components/elements/flex/Column';
import Row from '../components/elements/flex/Row';
import useLocalStorage from '../hooks/useLocalStorage';
import { LocalStorageKey } from '../hooks/useLocalStorage/types';

const LoginPage: NextPage = () => {
  const [auth, setAuth] = useLocalStorage(LocalStorageKey.auth);
  const [state, setState] = useState<{
    url?: string;
    email?: string;
    token?: string;
  }>({
    url: undefined,
    email: undefined,
    token: undefined,
  });
  const router = useRouter();

  const handleLogin = (): void => {
    if (!state.url || !state.email || !state.token) return;

    setAuth({ authToken: `${state.email}:${state.token}`, url: state.url });
    alert('Logged in successfully');
    router.push('/');
  };

  const handleChange =
    (field: keyof typeof state) => (e: ChangeEvent<FormElement>) => {
      setState(prevState => ({ ...prevState, [field]: e.target.value }));
    };

  return (
    <Row centerHorizontally withSpacing>
      <Card css={{ mw: 400 }}>
        <Card.Body>
          {auth && (
            <Column centerHorizontally withSpacingBottom='lg'>
              <Text color='warning' b>
                You are already logged in!
              </Text>
            </Column>
          )}
          <Column withSpacingTop='lg' withSpacingBottom='lg'>
            <Input
              labelPlaceholder='Jira base URL'
              onChange={handleChange('url')}
            />
          </Column>
          <Column withSpacingTop='lg' withSpacingBottom='lg'>
            <Input
              labelPlaceholder='Jira email'
              onChange={handleChange('email')}
            />
          </Column>
          <Column withSpacingTop='lg' withSpacingBottom='lg'>
            <Input
              labelPlaceholder='Jira token'
              onChange={handleChange('token')}
            />
            <Column
              withSpacingTop='sm'
              withSpacingLeft='sm'
              withSpacingRight='sm'
            >
              <Link
                href='https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/'
                target='_blank'
              >
                How to get token?
              </Link>
            </Column>
          </Column>
          <Column withSpacingTop>
            <Button onClick={handleLogin}>Login</Button>
          </Column>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default LoginPage;
