import css from './FriendList.module.css';
import FriendItem from './FriendItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};
