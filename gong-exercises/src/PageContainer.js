import React, {Component} from 'react';
import "./style/style.css"
import NavBarContainer from "./navbar/NavBarContainer";
import MainSection, { Sections } from "./MainSection";
import { Users } from "./data/users";
import { Tweets } from "./data/tweets";
import TrendsContainer from "./TrendsContainer";

class PageContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mainSection: Sections.NEWS_FEED,
            tweets: Tweets,
            currentUser: Users.Meitar,
        };

    }

    changeSection = (newSection) => {
        this.setState({mainSection: newSection});
    }

    updateTweet = (tweetId, tweetUpdates) => {
        let tweets = this.state.tweets;
        let tweetToUpdate = tweets.find(tweet => tweet.id === tweetId);
        let tweetToUpdateIdx = tweets.findIndex(tweet => tweet.id === tweetId);
        const newTweet = {...tweetToUpdate, ...tweetUpdates};
        tweets.splice(tweetToUpdateIdx, 1, newTweet);
        this.setState({tweets: tweets});
    }

    render() {
        return (
            <div className="page-container">
                <NavBarContainer changeSection={this.changeSection}/>
                <MainSection changeSection={this.changeSection} user={Users.Meitar} updateTweet={this.updateTweet} tweets={this.state.tweets}  openSection={this.state.mainSection}/>
                <TrendsContainer/>
            </div>
        );
    }
}

export default PageContainer;