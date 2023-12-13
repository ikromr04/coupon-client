import styled from 'styled-components';
import Button from '../../ui/button/button';
import Box from '../../ui/box/box';

export const Main = styled('div')`
  width: 100%;
  min-height: 100vh;
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
`;

export const LogoutButton = styled(Button)`
  margin-left: auto;
`

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-self: center;
  width: 100%;
  max-width: 560px;
  margin-top: 32px;
  padding: 24px 32px;
`;

export const Form = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

