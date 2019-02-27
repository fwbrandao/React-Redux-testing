import React, {Component} from 'react';

class CommentBox extends Component {
    state = {
        comment: ''
    };

    handleChange = event => {
        this.setState({ comment: event.target.value });
    };

    handleSubmit = event => {
        // prevent reload of the page
        event.preventDefault();

        // Call an action creator
        // Save comment
        this.setState({ comment: ' '});
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add comment</h4>
                <textarea
                value={this.state.comment}
                onChange={this.handleChange}
                />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        );
    }
}

export default CommentBox;