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
        );
    });

    it('creates one LI per comment', () => {
        expect(wrapped.find('li').lenght).toEqual(2);
    });

    it('creates one LI per comment', () => {
        expect(wrapped.render().text()).contain('Comment 1');
        expect(wrapped.render().text()).contain('Comment 2');
    });
})


