import { expect } from 'chai';
import { renderComponent } from '../../utils/testHelpers';
import Stars from './stars.cmp';

/** Mock App. State */
const state: Object = {
  stars: {
    count: 61,
    isFetching: false,
  },
};

describe('<Counter />', () => {

  const component = renderComponent(Stars, state);
});
