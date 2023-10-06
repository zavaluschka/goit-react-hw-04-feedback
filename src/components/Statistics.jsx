import css from './Feedback.module.css';

import { Total } from './Total';
import { GoodRating } from './GoodRating';
import { Rating } from './Rating';


export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePersentage,
}) => {
  return (
    <div className={css.ratingList}>
      <Rating good={good} neutral={neutral} bad={bad}/>
      <Total total={total} />
      <GoodRating positivePersentage={positivePersentage} />
    </div>
  );
};