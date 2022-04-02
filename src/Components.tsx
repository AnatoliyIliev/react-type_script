import FriendList from './01-components/friend-list/FriendList';
import Profile from './01-components/social-profile/Profile';
import Statistics from './01-components/statistics/Statistics';
import TransactionHistory from './01-components/transaction-history/TransactionHistory';

import friends from './01-components/friend-list/friends.json';
import user from './01-components/social-profile/user.json';
import data from './01-components/statistics/data.json';
import transactions from './01-components/transaction-history/transactions.json';

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
