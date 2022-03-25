import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { userShape } from "../../../data/users";
import ProfilePicture from "./ProfilePicture";
import CustomButton, { ButtonType } from "../../common/CustomButton";
import { SVG } from "../../../assets/svgs/svgs";
import ProfileEditor from "./ProfileEditor";

class ProfileBody extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showEditProfileDialog: false,
        }
    }

    openEditProfileDialog = () => {
        this.setState({showEditProfileDialog: true});
    }

    closeEditProfileDialog = () => {
        this.setState({showEditProfileDialog: false});
    }

    render() {
        return (
            <div className="profile-body">
                <div className="cover-photo">
                    <img src={this.props.user.coverPhoto} alt={"cover"}/>
                </div>
                <div className="profile-edit">
                    <ProfilePicture user={this.props.user} captions />
                    <ProfileEditor showDialog={this.state.showEditProfileDialog} user={this.props.user} closeProfileEditor={this.closeEditProfileDialog}  updateUserProfile={this.props.updateUserProfile}/>
                    <CustomButton onClick={this.openEditProfileDialog} btnType={ButtonType.EDIT_PROFILE}/>
                </div>
                <div className="profile-about">
                    <p>{this.props.user.about}</p>
                    <div className="profile-about__extra-details">
                        <span>
                            {SVG.profile.LOCATION}
                            <span>{this.props.user.location}</span>
                        </span>
                        <span>
                            {SVG.profile.WEBSITE}
                            <span id="website">{this.props.user.website}</span>
                        </span>
                        <span>
                            {SVG.profile.JOIN_DATE}
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