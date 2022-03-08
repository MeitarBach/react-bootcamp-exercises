import React from 'react';
import NewsFeedContainer from "./newsfeed/NewsFeedContainer";
import ProfileContainer from "./profile/ProfileContainer";
import PropTyes from "prop-types";

export const Sections = {
    NEWS_FEED: 'Home',
    USER_PROFILE: 'Profile'
}

class MainSection extends React.Component {
    getUserTweets = () => {
        return this.props.tweets.filter(tweet => tweet.author.id === this.props.user.id);
    }

    render() {
        return (
            <>
                {this.props.openSection === Sections.NEWS_FEED && <NewsFeedContainer updateTweet={this.props.updateTweet} tweets={this.props.tweets}/>}
                {this.props.openSection === Sections.USER_PROFILE && <ProfileContainer updateTweet={this.props.updateTweet} userTweets={this.getUserTweets()}/>}
            </>
        );
    }
}

MainSection.propTypes = {
    openSection: PropTyes.string.isRequired,
}

export default MainSection;