import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { userShape } from "../data/users";

class ProfilePicture extends Component {
    render() {
        return (
            <span className="profile-pic">
                <img src={this.props.user.profilePic} alt={"profile-pic"}/>
                {this.props.captions &&
                    <div className="profile-pic-captions">
                        <h4>{this.props.user.fullName}</h4>
                        <span>{`@${this.props.user.nickName}`}</span>
                    </div>
                }
            </span>
        );
    }
}

ProfilePicture.propTypes = {
    user: PropTypes.shape(userShape)
}

export default ProfilePicture;