import { all, takeLatest } from 'redux-saga/effects';
import { CategoriesTypes } from '../ducks/categories';
import { DrinksTypes } from '../ducks/drinks';
import { DetailsTypes } from '../ducks/details';
import fetchCategories from './categories';
import fetchDrinks from './drinks';
import fetchDetails from './details';
import fetchSearch from './search';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoriesTypes.CATEGORIES_REQUEST, fetchCategories),
    takeLatest(DrinksTypes.DRINKS_REQUEST, fetchDrinks),
    takeLatest(DetailsTypes.DETAILS_REQUEST, fetchDetails),
    takeLatest(DrinksTypes.SEARCH_REQUEST, fetchSearch),
  ]);
}
