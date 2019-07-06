import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  detailsRequest: ['drink'],
  detailsSuccess: ['data'],
  requestFailure: null,
});

export const DetailsTypes = Types;
export default Creators;

const INITIAL_STATE = {
  data: null,
  loading: false,
  error: false,
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.DETAILS_REQUEST]: state => ({ ...state, loading: true }),
  [Types.DETAILS_SUCCESS]: (state, action) => ({
    ...state,
    data: action.data,
    loading: false,
  }),
  [Types.REQUEST_FAILURE]: state => ({ ...state, loading: false, error: true }),
});
