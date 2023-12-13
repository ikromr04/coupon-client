import { styled } from 'styled-components';
import Box from '../../ui/box/box';

export const Main = styled('main')`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 16px 32px;
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
