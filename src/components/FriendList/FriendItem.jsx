import css from './FriendItem.module.css';

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
