import React, {Component} from 'react';
import "./style/style.css"
import NavBarContainer from "./navbar/NavBarContainer";
import MainSection, { Sections } from "./MainSection";
import TrendsContainer from "./TrendsContainer";

class PageContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mainSection: Sections.NEWS_FEED,
        };

    }

    changeSection = (newSection) => {
        this.setState({mainSection: newSection});
    }

    render() {
        return (
            <div className="page-container">
                <NavBarContainer changeSection={this.changeSection}/>
                <MainSection openSection={this.state.mainSection}/>
                <TrendsContainer/>
            </div>
        );
    }
}

export default PageContainer;