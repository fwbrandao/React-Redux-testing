import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';


it('shows a comment box', () => {
    // shallow only render app component, not any children.
    const wrapper = shallow(<App />);

    expect(wrapper.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
    // shallow only render app component, not any children.
    const wrapper = shallow(<App />);

    expect(wrapper.find(CommentList).length).toEqual(1);
});

