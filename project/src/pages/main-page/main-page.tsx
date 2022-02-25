import {OfferType} from '../../const';
import Tabs from '../../components/tabs/tabs';
import Header from '../../components/header/header';
import Navigation from '../../components/navigation/navigation';
import CardsList from '../../components/cards-list/cards-list';

type PropsType = {
  offers: OfferType[],
}

export default function MainPage({offers}: PropsType): JSX.Element {
  return (
    <div className='page page--gray page--main'>
      <Header>
        <Navigation />
      </Header>

      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <Tabs />
        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>{offers.length} places to stay in Amsterdam</b>
              <form className='places__sorting' action='#' method='get'>
                <span className='places__sorting-caption'>Sort by</span>
                <span className='places__sorting-type' tabIndex={0}>
                  &nbsp;Popular
                  <svg className='places__sorting-arrow' width='7' height='4'>
                    <use xlinkHref='#icon-arrow-select' />
                  </svg>
                </span>
                <ul className='places__options places__options--custom places__options--opened'>
                  <li className='places__option places__option--active' tabIndex={0}>Popular</li>
                  <li className='places__option' tabIndex={0}>Price: low to high</li>
                  <li className='places__option' tabIndex={0}>Price: high to low</li>
                  <li className='places__option' tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className='cities__places-list places__list tabs__content'>
                <CardsList offers={offers} />
              </div>
            </section>
            <div className='cities__right-section'>
              <section className='cities__map map' />
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}