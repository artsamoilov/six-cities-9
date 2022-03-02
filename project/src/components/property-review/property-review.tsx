import dayjs from 'dayjs';
import {ReviewType} from '../../types/review-type';
import {getRatingPercent} from '../../utils';

export default function PropertyReview({comment, date, id, rating, user}: ReviewType): JSX.Element {
  return (
    <li className='reviews__item'>
      <div className='reviews__user user'>
        <div className='reviews__avatar-wrapper user__avatar-wrapper'>
          <img className='reviews__avatar user__avatar' src={user.avatarUrl} width='54' height='54' alt='Reviews avatar' />
        </div>
        <span className='reviews__user-name'>{user.name}</span>
      </div>
      <div className='reviews__info'>
        <div className='reviews__rating rating'>
          <div className='reviews__stars rating__stars'>
            <span style={{width: `${getRatingPercent(rating)}%`}} />
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <p className='reviews__text'>{comment}</p>
        <time className='reviews__time' dateTime={dayjs(date).toISOString()}>{dayjs(date).format('MMMM YYYY')}</time>
      </div>
    </li>
  );
}