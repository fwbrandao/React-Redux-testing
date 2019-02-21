import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

it('Should show a comment box', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);

    // Looks inside the div for the Comment Box text
    expect(div.innerHTML).toContain('Comment Box');
    console.log(div.innerHTML);

    ReactDOM.unmountComponentAtNode(div);
});

