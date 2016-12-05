import { expect } from 'chai';
import { renderComponent } from './../../utils/testHelpers';
import Counter from './counter.cmp';

/** Mock App. State */
const state: Object = {
  counter: { count: 1 },
};

describe('<Counter />', () => {

  let component;

  beforeEach(() => {
    component = renderComponent(Counter, state);
  });

  it('Calls the increment', () => {
    expect(component.find({ name: 'incBtn' })).to.exist;
    component.find({ name: 'incBtn' }).simulate('click');
    expect(component.find('p').text()).to.eql('2');
  });

  it('Calls the decrement', () => {
    expect(component.find({ name: 'decBtn' })).to.exist;
    component.find({ name: 'decBtn' }).simulate('click');
    expect(component.find('p').text()).to.eql('0');
  });

});
