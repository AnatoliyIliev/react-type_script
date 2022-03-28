import FriendList from './homework-01/friend-list/FriendList';
import Profile from './homework-01/social-profile/Profile';
import Statistics from './homework-01/statistics/Statistics';
import TransactionHistory from './homework-01/transaction-history/TransactionHistory';

import friends from './homework-01/friend-list/friends.json';
import user from './homework-01/social-profile/user.json';
import data from './homework-01/statistics/data.json';
import transactions from './homework-01/transaction-history/transactions.json';

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
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
