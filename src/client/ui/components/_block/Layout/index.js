import React from 'react';
import { Header } from 'client/ui/components/_block/Header';

import { 
  LayoutWrapper,
  Cotainer,
} from './styled';

export const Layout = ({
  children,
  className,
}) => (
  <LayoutWrapper className={className}>
    <Header />
    <Cotainer>
      {children}
    </Cotainer>
  </LayoutWrapper>
);
