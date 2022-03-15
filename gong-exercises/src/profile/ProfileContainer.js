import React, {Component} from 'react';
import ProfileHeader from "./ProfileHeader";
import ProfileBody from "./ProfileBody";
import { Users } from "../data/users";
import ProfileActivities from "./ProfileActivities";

class ProfileContainer extends Component {
    render() {
        return (
            <div className="profile-container">
                <ProfileHeader tweetsCount={this.props.userTweets.length} changeSection={this.props.changeSection} user={this.props.user} />
                <ProfileBody user={this.props.user}/>
                <ProfileActivities updateTweet={this.props.updateTweet} tweets={this.props.userTweets}/>
            </div>
        );
    }
}

export default ProfileContainer;