import React, {Component} from 'react';
import * as actions from 'actions';
import requireAuth from './requireAuth';
import { connect } from 'react-redux';

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
        this.props.saveComment(this.state.comment);
        this.setState({ comment: ' '});
    };

    render() {
        return (
            <div>
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
            <button className='fetchButton' onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        );
    }
}

export default connect(null, actions)(requireAuth(CommentBox));