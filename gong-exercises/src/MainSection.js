import React from 'react';
import NewsFeedContainer from "./newsfeed/NewsFeedContainer";
import ProfileContainer from "./profile/ProfileContainer";

class MainSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <>
                <NewsFeedContainer/>
                {/*<ProfileContainer/>*/}
            </>
        );
    }
}

export default MainSection;