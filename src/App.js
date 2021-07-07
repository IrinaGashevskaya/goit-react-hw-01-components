import React from "react";
import Profile from "./components/Profile/Profile";
import Statistic from "./components/Statistic/Statistic";
import FriendList from "./components/Friends/Friends";
import user from "./user.json";
import statistics from "./statistical-data.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import friends from "./friends.json";
import transactions from "./transactions.json";

const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={statistics} />
      <Statistic stats={statistics} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
