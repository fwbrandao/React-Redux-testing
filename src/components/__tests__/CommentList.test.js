import React from 'react';
import { mount } from 'enzyme';

import { CommentList } from 'components/CommentList';
import Root from 'Root';

describe('CommentList', () => {

    let wrapped;

    beforeEach(() => {
        const initialState = {
            comments: ['Commmet 1', 'Comment 2']
        };

        wrapped = mount(
            <Root initialState={initialState}>
                <CommentList />
            </Root>
        )
    });

    // afterEach(() => {
    //     wrapped.unmount();
    // });

    it('creates one LI per comment', () => {
        console.log(wrapped.find('li').lenght);
    });
})


