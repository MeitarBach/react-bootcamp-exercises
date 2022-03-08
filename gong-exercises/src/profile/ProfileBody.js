import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { userShape } from "../data/users";
import ProfilePicture from "./ProfilePicture";
import CustomButton, { ButtonType } from "../CustomButton";
import { SVG } from "../assets/svgs/svgs";

class ProfileBody extends Component {
    render() {
        return (
            <div className="profile-body">
                <div className="cover-photo">
                    <img src={this.props.user.coverPhoto} alt={"cover"}/>
                </div>
                <div className="profile-edit">
                    <ProfilePicture user={this.props.user} captions />
                    <CustomButton btnType={ButtonType.EDIT_PROFILE}/>
                </div>
                <div className="profile-about">
                    <p>{this.props.user.about}</p>
                    <div className="profile-about__extra-details">
                        <span>
                            {SVG.LOCATION}
                            <span>{this.props.user.location}</span>
                        </span>
                        <span>
                            {SVG.WEBSITE}
                            <span id="website">{this.props.user.website}</span>
                        </span>
                        <span>
                            {SVG.JOIN_DATE}
                            <span id="join-date">{this.props.user.joinDate}</span>
                        </span>
                    </div>
                    <div className="profile-about__following-followers">
                        <span><b id="followers">{this.props.user.followingIds.length}</b> Following</span>
                        <span><b id="following">{this.props.user.followersIds.length}</b> Followers</span>
                    </div>
                </div>
            </div>
        );
    }
}

ProfileBody.propTypes = {
    user: PropTypes.shape(userShape)
};

export default ProfileBody;