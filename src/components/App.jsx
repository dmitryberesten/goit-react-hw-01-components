import { Profile } from "./profile/Profile";
import user from './profile/user.json' // дані
import { Statistics } from "./statistics/Statistics";
import data from './statistics/data.json' // дані
import { FriendList } from "./friendList/FriendList";
import friends from './friendList/friends.json' // дані
import { TransactionHistory } from "./transactionHistory/TransactionHistory";
import transactions from './transactionHistory/transactions.json' // дані

// Експортуємо наш компонент App.
// Це означає, що ми можемо використовувати цей компонент в інших частинах нашої програми.
export const App = () => {
  return (
    // створення div-контейнера для компонентів
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        color: '#010101',
      }}
    >
      <Profile
      // Відображення інформації про користувача з файлу .json
      // Передаємо властивості (props) до компонента.
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      {/* Відображення статистики завантажень з data.json */}
      <Statistics title="Upload stats" stats={data}/>

      {/* Відображення списку друзів з friends.json */}
      <FriendList friends={friends}/>

      {/* Відображення історії транзакцій з transactions.json */}
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
