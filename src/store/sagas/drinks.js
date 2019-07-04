import { call, put } from 'redux-saga/effects';
import CategoriesActions from '../ducks/categories';
import api from '../../services/api';
import { navigate } from '../../services/navigation';

export default function* setCategories(category) {
  console.tron.log(category);
  try {
    const { data } = yield call(api.get, 'filter.php?c=Ordinary_Drink');
    yield put(CategoriesActions.categoriesSuccess(data.drinks));

    navigate('Drinks');
  } catch (err) {
    yield put(CategoriesActions.requestFailure());
  }
}
