import css from './FriendItem.module.css';
import PropTypes from 'prop-types';

const FriendItem = ({ friend }) => {
  return (
    <li className={css.item} key={friend.id}>
      <span className={friend.isOnline ? css.statusOnline : css.statusOffline}>
        <img
          className={css.avatar}
          src={friend.avatar}
          alt={friend.name}
          width="48"
        />
        <p className={css.name}>{friend.name}</p>
      </span>
    </li>
  );
};

export default FriendItem;

FriendItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
