import FriendList from './homework-01/friend-list/FriendList';
import Profile from './homework-01/social-profile/Profile';

import friends from './homework-01/friend-list/friends.json';
import user from './homework-01/social-profile/user.json';

function App() {
  return (
    <div>
      <FriendList friends={friends} />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}

export default App;
