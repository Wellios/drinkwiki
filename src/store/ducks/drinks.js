import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  searchRequest: ['drink'],
  drinksRequest: ['category'],
  drinksSuccess: ['data', 'category'],
  requestFailure: null,
});

export const DrinksTypes = Types;
export default Creators;

const INITIAL_STATE = {
  data: [],
  category: null,
  loading: false,
  error: false,
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH_REQUEST]: state => ({ ...state, loading: true }),
  [Types.DRINKS_REQUEST]: state => ({ ...state, loading: true }),
  [Types.DRINKS_SUCCESS]: (state, action) => ({
    ...state,
    data: [action.data],
    category: action.category,
    loading: false,
  }),
  [Types.REQUEST_FAILURE]: state => ({ ...state, loading: false, error: true }),
});
