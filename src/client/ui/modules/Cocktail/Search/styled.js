import styled from 'styled-components';
import { PALETTE } from 'client/style/constants';

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 30px;
  text-align: center;
`;

export const ControlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 60px;
`;

export const Control = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InputStyled = styled.input`
  display: block;
  width: 300px;
  height: 50px;
  border: 1px solid ${PALETTE.black};
  border-right: 0;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  font-size: 20px;
`;

export const SearchBtn = styled.button`
  display: block;
  width: 100px;
  height: 50px;
  border: 1px solid ${PALETTE.black};
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const Error = styled.span`
  width: 100%;
  color: red;
  font-size: 12px;
`;

export const ListWrapper = styled.div`
  display: block;
`;

export const List = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;
