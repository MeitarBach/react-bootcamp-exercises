import React from 'react';
import NewsFeedContainer from "./newsfeed/NewsFeedContainer";
import ProfileContainer from "./profile/ProfileContainer";
import PropTyes from "prop-types";

export const Sections = {
    NEWS_FEED: 'Home',
    USER_PROFILE: 'Profile'
};

class MainSection extends React.Component {
    render() {
        return (
            <>
                {this.props.openSection === Sections.NEWS_FEED && <NewsFeedContainer/>}
                {this.props.openSection === Sections.USER_PROFILE && <ProfileContainer/>}
            </>
        );
    }
}

MainSection.propTypes = {
    openSection: PropTyes.string.isRequired,
}

export default MainSection;