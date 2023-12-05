import styled from '@emotion/styled';

export const FriendListUl = styled.ul`
s  box-sizing: border-box;
  list-style-type: none;
  padding: 0;
  margin-bottom:0;
`;

export const Friend = styled.li`
  margin-bottom: 5px;
  display: flex;
  justify-content: left;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  padding-top: 5px;
  padding-bottom: 5px;
  min-width: 554px;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Online = styled.span`
  color: green;
  font-size: 40px;
`;

export const Offline = styled.span`
  color: red;
  font-size: 40px;
`;

export const Name = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 30px;
  font-size: 16px;
  font-weight: 700;
  align-self: center;
`;

export const Avatar = styled.img`
  padding-left: 30px;
`;
