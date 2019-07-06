import { call, put } from 'redux-saga/effects';
import DetailsActions from '../ducks/details';
import api from '../../services/api';
import { navigate } from '../../services/navigation';

export default function* fetchDetails({ drink }) {
  try {
    const { data } = yield call(api.get, `lookup.php?i=${drink}`);
    yield put(DetailsActions.detailsSuccess(...data.drinks));

    navigate('Details');
  } catch (err) {
    yield put(DetailsActions.requestFailure());
  }
}
