import { call, put } from 'redux-saga/effects';
import CategoriesActions from '../ducks/categories';
import api from '../../services/api';

export default function* fetchCategories() {
  try {
    const { data } = yield call(api.get, 'list.php?c=list');

    yield put(CategoriesActions.categoriesSuccess(data.drinks));
  } catch (err) {
    yield put(CategoriesActions.requestFailure());
  }
}
