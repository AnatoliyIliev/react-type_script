import FriendList from './homework-01/friend-list/FriendList';
import Profile from './homework-01/social-profile/Profile';
import Statistics from './homework-01/statistics/Statistics';

import friends from './homework-01/friend-list/friends.json';
import user from './homework-01/social-profile/user.json';
import data from './homework-01/statistics/data.json';

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
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
}

export default App;
