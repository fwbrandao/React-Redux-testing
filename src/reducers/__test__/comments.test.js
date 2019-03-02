import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
    const actions = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    };

    const newState = commentsReducer([], actions);

    expect(newState).toEqual(['New Comment']);
});

it('handles actions with unknow type', () => {
    const newState = commentsReducer([], { type: 'NANDO'});

    expect(newState).toEqual([]);
});