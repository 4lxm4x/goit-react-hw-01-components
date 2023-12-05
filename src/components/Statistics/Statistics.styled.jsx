import styled from '@emotion/styled';
import data from '../../data.json';

const boxWidth = 100 / data.length;

export const StatisticsSection = styled.section`
  background-color: #fff;
  margin-top: 16px;
  padding-bottom: 5px;
`;

export const StatList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  min-width: 554px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  margin: 2px;

  width: ${boxWidth}%;
`;

export const Label = styled.span`
  display: flex;
  justify-content: center;
  color: #fff;
`;

export const Percentage = styled.span`
  display: flex;
  justify-content: center;
  font-weight: 700;
  color: #fff;
`;

export const Title = styled.h2`
  display: block;
  margin: auto, 10px;
  text-align: center;
`;
