import React from 'react';
import { mount } from "enzyme";
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    wrapped = mount(
    <Root>
        <CommentBox />
    </Root>);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and 2 buttons', () => {
    // then
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

describe('textarea', () => {
    beforeEach(() => {
        // set initial value to some text or value
        wrapped.find('textarea').simulate('change', {
            target: {
                value: 'new comment'
            }
        });
        // reset
        wrapped.update();
    });

    it('has a text area that users can type in', () => {

        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('should submit the form and empty the textarea', () => {


        // find the form tag and simulate submit
        wrapped.find('form').simulate('submit');
        // reset
        wrapped.update();

        // after submit check if the text area has a empty string
        expect(wrapped.find('textarea').prop('value')).toEqual(' ');
    });
})

