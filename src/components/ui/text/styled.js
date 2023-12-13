import styled, { css } from 'styled-components';

export const StyledText = styled('p').withConfig({
  shouldForwardProp: (prop) => ![
      'small', 
      'large', 
      'success', 
      'error', 
      'warning'
    ].includes(prop)
})`
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 400;
  font-size: 15px;
  line-height: 130%;
  color: #616161;

  ${({ small }) => small && css`
    font-size: 14px;
  `}

  ${({ large }) => large && css`
    font-size: 16px;
  `}

  ${({ success }) => success && css`
    color: #66bb6a;
  `}

  ${({ warning }) => warning && css`
    color: #ed6c02;
  `}

  ${({ error }) => error && css`
    color: #d32f2f;
  `}
`;
