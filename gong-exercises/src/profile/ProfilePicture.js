import React, {Component} from 'react';

class ProfilePicture extends Component {
    render() {
        return (
            <span className="profile-pic">
                <img src={this.props.user.profilePic}/>
                {this.props.captions && <div className="profile-pic-captions">
                    <h4>{this.props.user.fullName}</h4>
                    <span>{`@${this.props.user.nickName}`}</span>
                </div>}
            </span>
        );
    }
}

export default ProfilePicture;