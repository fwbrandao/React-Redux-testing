import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { connect } from 'react-redux';

class App extends Component {
    renderButton() {
        if(this.props.auth) {
           return  <button>Sign out</button>;
        } else {
           return <button>Sign in</button>;
        }
    }

    renderHeader() {
        return (
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/post'>Post a Comment</Link>
                </li>
                <li>
                    <Link to='/'>{this.renderButton}</Link>
                </li>
            </ul>
        )
    }

    render() {
        return (
            <div>
                {this.renderHeader()}
                <Route path='/post' component={CommentBox} />
                <Route path='/' exact component={CommentList} />
            </div>
        );
    }
};

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps) (App);