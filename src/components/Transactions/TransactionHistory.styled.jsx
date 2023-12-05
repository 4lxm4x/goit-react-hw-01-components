import styled from '@emotion/styled';

export const Transactions = styled.table`
  border: solid black 1px;
  border-collapse: collapse;
  margin: 16px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 554px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

export const Thead = styled.thead`
  background-color: lightblue;
`;
export const Theadcells = styled.th`
  align-self: center;
  //   display: grid;
`;

export const Tbody = styled.tbody``;
export const Trows = styled.tr`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 32px;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;
export const Tcells = styled.td`
  display: flex;
  align-items: center;
  background-color: #fff;
  justify-content: center;
  height: 28px;
`;

export const TcellsAmount = styled.td`
  display: flex;
  align-items: center;
  background-color: #ebeded;
  justify-content: center;
  height: 28px;
`;

export const TheadRows = styled.tr`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 32px;
`;
