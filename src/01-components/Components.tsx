import FriendList from './friend-list/FriendList';
import Profile from './social-profile/Profile';
import Statistics from './statistics/Statistics';
import TransactionHistory from './transaction-history/TransactionHistory';

import friends from './friend-list/friends.json';
import user from './social-profile/user.json';
import data from './statistics/data.json';
import transactions from './transaction-history/transactions.json';

function Components() {
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

export default Components;
