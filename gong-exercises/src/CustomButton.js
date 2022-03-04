import React, {Component} from 'react';
import PropTypes from 'prop-types';

export const ButtonType = {
    TWEET: {
        className: 'tweet-button',
        text: 'Tweet'
    },
    EDIT_PROFILE: {
        className: 'edit-profile-button',
        text: 'Edit profile'
    }
}

class CustomButton extends Component {
    render() {
        return (
            <button className={this.props.btnType.className}>
                {this.props.btnType.text}
            </button>
        );
    }
}

CustomButton.propTypes = {
    btnType: PropTypes.shape({
        className: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}

export default CustomButton;