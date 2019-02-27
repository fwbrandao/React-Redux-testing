import React from 'react';
import { mount } from "enzyme";
import CommentBox from 'components/CommentBox';

let wrapped;

// first
beforeEach(() => {
    wrapped = mount(<CommentBox />);
});

// last
afterEach(() => {
    wrapped.unmount();
});

// second
it('has a text area and a button', () => {
    // then
    expect(wrapped.find('textarea').lenght).toEqual(1);
    expect(wrapped.find('button').lenght).toEqual(1);

});
