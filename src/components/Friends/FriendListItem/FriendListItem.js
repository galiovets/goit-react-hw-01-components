import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';
import userPhoto from '../../../user-photo.png';

function FriendListItem({ avatar = userPhoto, name, isOnline }) {
  return (
    <li className={s.item}>
      {isOnline ? (
        <span className={s.online}>online</span>
      ) : (
        <span className={s.offline}>offline</span>
      )}

      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
