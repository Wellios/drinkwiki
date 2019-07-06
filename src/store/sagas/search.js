import { call, put } from 'redux-saga/effects';
import DrinksActions from '../ducks/drinks';
import api from '../../services/api';
import { navigate } from '../../services/navigation';

export default function* fetchSearch({ drink }) {
  try {
    const { data } = yield call(api.get, `search.php?s=${drink}`);
    yield put(DrinksActions.drinksSuccess(data.drinks));
  } catch (err) {
    yield put(DrinksActions.requestFailure());
  }
}
