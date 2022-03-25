import FriendList from './homework-01/friend-list/FriendList';
import friends from './homework-01/friend-list/friends.json';

function App() {
  return (
    <div>
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
