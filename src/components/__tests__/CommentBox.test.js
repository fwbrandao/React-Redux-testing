import React from 'react';
import { mount } from "enzyme";
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox />);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {
    // then
    expect(wrapped.find('textarea').lenght).toEqual(1);
    expect(wrapped.find('button').lenght).toEqual(1);

});
