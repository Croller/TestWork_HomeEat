import styled from 'styled-components';
import { BREAKPOINTS } from 'client/style/constants';
import { Link } from 'react-router-dom';

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 1 calc(20% - 28px);
  margin: 10px;
`;

export const Img = styled.img`
  width: 182px;

  @media screen and (min-width: ${BREAKPOINTS.medium}) {
    width: 232px;
  }

  @media screen and (min-width: ${BREAKPOINTS.large}) {
    width: 260px;
  }
`;

export const Name = styled.h2`
  margin-bottom: 5px;
`;

export const Category = styled.p`
  margin: 0;
  margin-bottom: 30px;
`;

export const Show = styled(Link)`
  margin-bottom: 20px;
`;
