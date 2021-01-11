import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const Globalstyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background-color: wheat;
      color: #000;
    }
`;

export const Mainbody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`