import React from 'react';
import { shallow } from 'enzyme';

import { TopNav } from './top-nav';
import {
    RESTART_GAME,
    GENERATE_AURAL_UPDATE
} from '../actions';

describe('<TopNav />', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav />);
  });

  it('Should call onNewGame when new game is clicked', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    const link = wrapper.find('.new');
    link.simulate('click');
    expect(dispatch).toHaveBeenCalled();
  });

  it('Should call onGenerateAuralUpdate when state-of-game link is clicked', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={callback} />);
    const link = wrapper.find('.status-link');
    link.simulate('click', {
      preventDefault() {}
    });
    expect(dispatch).toHaveBeenCalled();
  });
});