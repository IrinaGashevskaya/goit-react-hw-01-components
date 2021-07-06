import React from "react";
import Profile from "./components/Profile";
import Statistic from "./components/Statistic";
import FriendList from "./components/Friends";
import user from "./user.json";
import statistics from "./statistical-data.json";
import TransactionHistory from "./components/TransactionHistory";
import friends from "./friends.json";
import transactions from "./transactions.json";
//import './App.css';
const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        statsFollowers={user.stats.followers}
        statsViews={user.stats.views}
        statsLikes={user.stats.likes}
      />
      <Statistic title="Upload stats" stats={statistics} />

      <FriendList friendsMany={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
//import logo from './logo.svg';
//import './App.css';

//function App() {
//return (
//<div className="App">
//<header className="App-header">
//<img src={logo} className="App-logo" alt="logo" />
//<p>
// Edit <code>src/App.js</code> and save to reload.
// </p>
//<a
//className="App-link"
//href="https://reactjs.org"
//target="_blank"
//rel="noopener noreferrer"
//>
// Learn React
//</a>
//</header>
//</div>
//);
//}

export default App;

//<ul>{statistics.map((statistic) => (
//<li key={statistic.id}>
//<Statistic
//
//stats = {statistic}
//></li> ))}
//</ul>
