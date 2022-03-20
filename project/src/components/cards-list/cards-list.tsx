import {useState} from 'react';
import {OfferType} from '../../types/offer-type';
import {useAppSelector} from '../../hooks';
import Card from '../card/card';

type PropsType = {
  onCardHover: (id: number) => void,
}

export default function CardsList({onCardHover}: PropsType): JSX.Element {
  const [, setActiveCardId] = useState(0);
  const {cityName, offers} = useAppSelector((state) => state);
  const currentCityOffers = offers.filter(({city}) => city.name === cityName);

  const cardHoverHandler = (id: number) => onCardHover(id);

  return (
    <>
      {currentCityOffers.map((offer: OfferType): JSX.Element =>
        <Card key={offer.id} offer={offer} setActiveCardId={setActiveCardId} cardHoverHandler={cardHoverHandler}/>)}
    </>
  );
}
