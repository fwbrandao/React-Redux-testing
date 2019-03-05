import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'Comments/App';

it('can fetch a list of comments and display them', () => {
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );

    wrapped.find('.fetchButton').simulate('click');

    expect(wrapped.find('li').length).toEqual(500);
})