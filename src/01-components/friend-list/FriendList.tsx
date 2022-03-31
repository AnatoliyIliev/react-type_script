import FriendListItem from './FriendListItem';
import './Friends.css';

interface Props {
  friends: { avatar: string; name: string; isOnline: boolean; id: number }[];
}

function FriendList({ friends }: Props) {
  return (
    <ul className="friendList">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className="item">
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
