import { all, takeLatest } from 'redux-saga/effects';
import { CategoriesTypes } from '../ducks/categories';
import { DrinksTypes } from '../ducks/drinks';
import { DetailsTypes } from '../ducks/details';
import setCategories from './categories';
import setDrinks from './drinks';
import setDetails from './details';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoriesTypes.CATEGORIES_REQUEST, setCategories),
    takeLatest(DrinksTypes.DRINKS_REQUEST, setDrinks),
    takeLatest(DetailsTypes.DETAILS_REQUEST, setDetails),
  ]);
}
