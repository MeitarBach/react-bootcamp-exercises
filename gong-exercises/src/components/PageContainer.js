import React, {Component} from 'react';
import "../style/style.css"
import NavBarContainer from "./navbar/NavBarContainer";
import MainSection, { Sections } from "./mainsection/MainSection";
import { Users } from "../data/users";
import { TweetsApi } from "../data/tweets";
import TrendsContainer from "./trends/TrendsContainer";

class PageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainSection: Sections.NEWS_FEED,
            tweets: [],
            currentUser: Users.Meitar,
        };

    }

    async componentDidMount() {
        let tweets = await TweetsApi.getTweets();
        this.setState({ tweets });
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
        TweetsApi.setTweets(tweets);
    }

    postTweet = (newTweet) => {
        let tweets = this.state.tweets;
        tweets.push(newTweet);
        this.setState({tweets: tweets});
        TweetsApi.setTweets(tweets);
    }

    updateUserProfile = (userUpdates) => {
        let user = this.state.currentUser;
        const updatedUser = {...user, ...userUpdates};
        this.setState({currentUser: updatedUser});
    }

    render() {
        return (
            <div className="page-container">
                <NavBarContainer changeSection={this.changeSection}/>
                <MainSection user={this.state.currentUser}
                             tweets={this.state.tweets}
                             openSection={this.state.mainSection}
                             changeSection={this.changeSection}
                             postTweet={this.postTweet}
                             updateTweet={this.updateTweet}
                             updateUserProfile={this.updateUserProfile}
                />
                <TrendsContainer/>
            </div>
        );
    }
}

export default PageContainer;