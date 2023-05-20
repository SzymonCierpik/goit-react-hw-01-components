import css from './FriendList.module.css';
export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          <span
            className={friend.isOnline ? css.statusOnline : css.statusOffline}
          >
            <img
              className={css.avatar}
              src={friend.avatar}
              alt={friend.name}
              width="48"
            />
            <p className={css.name}>{friend.name}</p>
          </span>
        </li>
      ))}
    </ul>
  );
};
