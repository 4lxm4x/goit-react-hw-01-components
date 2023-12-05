import {
  FriendListUl,
  Friend,
  Online,
  Offline,
  Name,
  Avatar,
} from './Friendlist.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <FriendListUl>
      {friends.map(friend => {
        return (
          <Friend key={friend.id}>
            {friend.isOnline ? <Online>•</Online> : <Offline>•</Offline>}

            <Avatar src={friend.avatar} alt="User avatar" width="48" />
            <Name>{friend.name}</Name>
          </Friend>
        );
      })}
    </FriendListUl>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
