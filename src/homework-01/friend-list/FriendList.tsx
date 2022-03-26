// import friends from './friends.json';
import FriendListItem from './FriendListItem';
// import styles from './Friends.module.css';
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

// function FriendList({ avatar, name, isOnline, id }: Props) {
//   <ul className="friend-list">
//     {friends.map(friend => {
//       return friend;
//     })}
//   </ul>;
// }

export default FriendList;
