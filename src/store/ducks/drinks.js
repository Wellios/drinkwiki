import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  drinksRequest: ['category'],
  drinksSuccess: ['data'],
  requestFailure: null,
});

export const DrinksTypes = Types;
export default Creators;

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.DRINKS_REQUEST]: state => ({ ...state, loading: true }),
  [Types.DRINKS_SUCCESS]: (state, action) => ({
    ...state,
    data: [...state.data, action.data],
    loading: false,
  }),
  [Types.DRINKS_REQUEST]: state => ({ ...state, loading: false, error: true }),
});
