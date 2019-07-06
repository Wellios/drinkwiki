import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  categoriesRequest: null,
  categoriesSuccess: ['data'],
  requestFailure: null,
});

export const CategoriesTypes = Types;
export default Creators;

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CATEGORIES_REQUEST]: state => ({ ...state, loading: true }),
  [Types.CATEGORIES_SUCCESS]: (state, action) => ({
    ...state,
    data: [action.data],
    loading: false,
  }),
  [Types.REQUEST_FAILURE]: state => ({ ...state, loading: false, error: true }),
});
