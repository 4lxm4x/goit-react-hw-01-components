import styled from '@emotion/styled';

export const ProfileDiv = styled.div`
  display: flex;
  margin-top: 20px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  background-color: #fff;
  flex-direction: column;
  border: solid grey 1px;
`;

export const Username = styled.p`
  font-size: 36px;
`;

export const Description = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 50%;
`;

export const Tag = styled.p`
  font-size: 16px;
  color: grey;
`;
export const Location = styled.p`
  font-size: 16px;
  color: grey;
`;

export const Stats = styled.ul`
  margin: 0;
  display: flex;
  padding: 0;

  justify-content: space-around;
  list-style-type: none;
  background-color: #ebeded;
`;
export const ListEl = styled.li`
  box-sizing: border-box;
  width: 184px;
  height: 80px;
  display: block;
  flex-direction: column;
  padding: 20px;
  border-top: solid grey 1px;
`;

export const Label = styled.span`
  display: flex;
  justify-content: center;
`;

export const Quantity = styled.span`
  display: flex;
  justify-content: center;
  font-weight: 700;
`;
