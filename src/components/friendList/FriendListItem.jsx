import PropTypes from 'prop-types'; // типи пропсів
import css from './FriendListItem.module.css'; // стилізація компонента

// компонент який відображає кожного друга як окремий елемент списку
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <img className={css.avatar} src={avatar} alt={name} />
      <span className={css.name}>{name}</span>

      {/* динамічне встановлення кольору статусу, в залежності від того, чи друг онлайн */}
    <span className={css.status} style={{ background: (isOnline? "green" : "red") }}></span>
    </li>
  );
};

// Типізація для компонента
FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

// Діма Берестень
