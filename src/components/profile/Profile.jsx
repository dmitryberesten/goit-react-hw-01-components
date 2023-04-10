import PropTypes from 'prop-types'; // типи пропсів
import css from './Profile.module.css'; // стилізація компонента

// компонент профілю користувача з переданих властивостей
export const Profile = ({ userName, tag, location, avatar, stats }) => {
  return (
    // блок з інформацією про користувача та статистикою
    <div className={css.profile}>

      {/* інформація про користувача */}
      <div className={css.description}>
        <img src={avatar} alt={userName} className={css.avatar} />
        <p className={css.name}>{userName}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      {/* статистика користувача */}

      <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.label}>Followers</span>
          <span className={css.quantiny}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views</span>
          <span className={css.quantiny}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Likes</span>
          <span className={css.quantiny}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

// Типізація для компонента
Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }).isRequired,
};

// Діма Берестень
