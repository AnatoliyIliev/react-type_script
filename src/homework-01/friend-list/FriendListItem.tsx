import './Friends.css';

interface Props {
  avatar: string;
  name: string;
  isOnline: boolean;
}

function FriendListItem({ avatar, name, isOnline }: Props) {
  return (
    <>
      <span
        className="status"
        style={{ background: isOnline ? 'green' : 'red' }}
      ></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </>
  );
}

export default FriendListItem;
