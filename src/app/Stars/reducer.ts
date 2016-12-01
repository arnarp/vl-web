import IStarsState from './state';
import IStarsAction from './actions';

/** Initial State */
const initialState: IStarsState = {
  isFetching: false,
};

/** Reducer */
export default function starsReducer(state = initialState, action: IStarsAction) {
  switch (action.type) {
    case 'stars/GET_STARS_REQUEST':
      return Object.assign({}, state, {
        isFetching: true,
      });

    case 'stars/GET_STARS_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        count: action.payload.count,
      });

    case 'stars/GET_STARS_FAILURE':
      return Object.assign({}, state, {
        isFetching: false,
        message: action.payload.message,
        error: true,
      });

    default:
      return state;
  }
}
