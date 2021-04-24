import { createGlobalStyle } from 'styled-components';

import {
  PALETTE,
} from './constants';

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    margin: 0;
    color: ${PALETTE.black};
    background-color: ${PALETTE.grey1};
    overflow-x: hidden
  }
`;
