import React from 'react';
import NewsFeedContainer from "./newsfeed/NewsFeedContainer";
import ProfileContainer from "./profile/ProfileContainer";
import PropTyes from "prop-types";

export const Sections = {
    TWEETER: '',
    NEWS_FEED: 'Home',
    EXPLORE: 'Explore',
    NOTIFICATIONS: 'Notifications',
    MESSAGES: 'Messages',
    BOOKMARKS: 'Bookmarks',
    LISTS: 'Lists',
    USER_PROFILE: 'Profile',
    MORE: 'More',
};

class MainSection extends React.Component {
    getUserTweets = () => {
        return this.props.tweets.filter(tweet => tweet.author.id === this.props.user.id);
    }

    render() {
        return (
            <>
                {this.props.openSection === Sections.NEWS_FEED && <NewsFeedContainer user={this.props.user} postTweet={this.props.postTweet} updateTweet={this.props.updateTweet} tweets={this.props.tweets}/>}
                {this.props.openSection === Sections.USER_PROFILE && <ProfileContainer user={this.props.user} changeSection={this.props.changeSection} updateTweet={this.props.updateTweet} updateUserProfile={this.props.updateUserProfile} userTweets={this.getUserTweets()}/>}
            </>
        );
    }
}

MainSection.propTypes = {
    openSection: PropTyes.string.isRequired,
}

export default MainSection;