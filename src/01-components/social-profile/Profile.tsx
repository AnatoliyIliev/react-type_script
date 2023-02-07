import './Profile.css';

interface Props {
  username: string;
  tag: string;
  location: string;
  avatar: string;
  stats: {
    followers: number;
    views: number;
    likes: number;
  };
}

function Profile({ username, tag, location, avatar, stats }: Props) {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={username} className="profile_avatar" />
        <p className="profile_name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="profile_stats">
        <li className="profile_data">
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className="profile_data">
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className="profile_data">
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
