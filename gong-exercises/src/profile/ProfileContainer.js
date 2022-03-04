import React, {Component} from 'react';
import ProfileHeader from "./ProfileHeader";
import ProfileBody from "./ProfileBody";
import { Users } from "../data/users";

class ProfileContainer extends Component {
    render() {
        return (
            <div className="profile-container">
                <ProfileHeader user={Users.Meitar} />
                <ProfileBody user={Users.Meitar}/>
            </div>
        );
    }
}

export default ProfileContainer;