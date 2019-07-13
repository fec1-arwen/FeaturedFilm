import React from 'react';
// TODO host tomatos on s3
import {GeneralStats, RatingZone, Date, Important, TomatoZone, StarZone, NoStars, StarNum, Stars, Tomato, ButtonZone, MyButton, WishList, Redeem, DmaIcon, FancyButton, FancyDmaButton} from '../style.jsx';

const MovieStats = (props) => (
  <div>
    <GeneralStats>
      <Date>{props.film.category_1} | {props.film.category_2} | {props.film.release_date}</Date>
      <Important>{props.film.mpaa_rating}</Important>
      <Important>{props.film.length} min</Important>
      <Important>CC</Important>
    </GeneralStats>

    <RatingZone>

      <StarZone>
        <NoStars>
          <Stars starWidth={props.film.star_rating} />
        </NoStars>
        <StarNum>({props.film.star_rating_count})</StarNum>
      </StarZone>
      <TomatoZone>
        <Tomato tomato={props.film.rt_rating}>{props.film.rt_rating}%</Tomato>
      </TomatoZone>
    </RatingZone>

    <ButtonZone>
        <MyButton>
          <FancyButton>Trailer</FancyButton>
        </MyButton>
        <WishList>
          <FancyButton>+Wishlist</FancyButton>
        </WishList>
        <Redeem>
          <FancyDmaButton>
            <div>Redeem</div>
            <DmaIcon />
          </FancyDmaButton>
        </Redeem>
      </ButtonZone>

    <div className="description_zone">
      <div className="description">
        {props.film.description}
      </div>
    </div>
  </div>
);

export default MovieStats;