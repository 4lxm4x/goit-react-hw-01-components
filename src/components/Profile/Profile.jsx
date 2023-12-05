import {ProfileDiv,Description,Avatar,Tag,Location,Username,Stats,ListEl,Label,Quantity} from './Profile.styled';
import PropTypes from 'prop-types';


export const Profile = ({username, tag, location, avatar, stats}) => {
  return <ProfileDiv>
  <Description>
    <Avatar
      src={avatar}
      alt="User avatar"
      
    />
        <Username>{username}</Username>
        <Tag>{ `@${tag}`}</Tag>
        <Location>{location}</Location>
  </Description>

  <Stats>
    <ListEl>
            <Label>Followers</Label>
            <Quantity>{stats.followers}</Quantity>
    </ListEl>
    <ListEl>
      <Label>Views</Label>
            <Quantity>{stats.views}</Quantity>
    </ListEl>
    <ListEl>
      <Label>Likes</Label>
            <Quantity>{stats.likes}</Quantity>
    </ListEl>
  </Stats>
</ProfileDiv>

}
    
Profile.propTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
    })
}