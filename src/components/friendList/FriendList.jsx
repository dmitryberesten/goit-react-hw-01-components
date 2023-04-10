import { FriendListItem } from './FriendListItem'; // елемент списку
import PropTypes from 'prop-types'; // типи пропсів
import css from './FriendList.module.css'; // стилізація компонента

// компонент який приймає список друзів в якості пропсів
export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>

      {/* Перебір друзів */}
      {friends.map(friend => {
        return (

          // повернення 1 карточки друга
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {

  // Перевірка, чи переданий параметр є масивом,
  // і приймає PropTypes.shape в якості параметра.
  friends: PropTypes.arrayOf(

  // shape - визначає форму об'єкта, який передається у властивість
  // і вимагає, щоб властивості цього об'єкта відповідали певній формі (типу даних)

  PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired
  ).isRequired,
};

// Діма Берестень
