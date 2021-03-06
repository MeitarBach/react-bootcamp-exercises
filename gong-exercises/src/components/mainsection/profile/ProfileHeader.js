import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { userShape } from "../../../data/users";
import { Sections } from "../MainSection";

class ProfileHeader extends Component {
    render() {
        return (
            <div className="profile-header">
                <svg onClick={() => this.props.changeSection(Sections.NEWS_FEED)} height="20" width="20" viewBox="0 0 24 24" id="back-home-arrow">
                    <g>
                        <path
                            d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
                    </g>
                </svg>
                <div className="profile-title">
                    <h3 className="profile-title-name">{this.props.user.fullName}</h3>
                    <span className="profile-title-tweets-num">{`${this.props.tweetsCount} Tweets`}</span>
                </div>
            </div>
        );
    }
}

ProfileHeader.propTypes = {
    user: PropTypes.shape(userShape),
}

export default ProfileHeader;